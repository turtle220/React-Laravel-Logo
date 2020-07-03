// Farbtastic 2.0.0-alpha.1

(function(jquery) {

	var __debug = false;

	jquery.fn.farbtastic = function(options) {
		jquery.farbtastic(this, options);
		return this;
	};

	jquery.farbtastic = function(container, options) {
		var container = jquery(container)[0];
		var element = container.farbtastic || (container.farbtastic = new jquery._farbtastic(container, options));
		return element;
	}

	jquery._farbtastic = function(container, options) {
		var fb = this;

		/////////////////////////////////////////////////////
		/**
		 * Link to the given element(s) or callback.
		 */
		fb.linkTo = function(callback) {
			// Unbind previous nodes
			if (typeof fb.callback == 'object') {
				Gesture.on(fb.callback, 'mousedown', Gesture.stopPropagation);
				Gesture.on(fb.callback, 'keyup', fb.updateValue);
// 				jquery(fb.callback).unbind('mousedown', Gesture.stopPropagation);
// 				jquery(fb.callback).unbind('keyup', fb.updateValue);
			}

			// Reset color
			fb.color = null;

			// Bind callback or elements
			if (typeof callback == 'function') {
				fb.callback = callback;
			} else {
				if (typeof callback == 'string') {
					callback = document.querySelector(callback);
				}
				if (typeof callback == 'object') {
					fb.callback = callback;
					Gesture.on(callback, 'mousedown', Gesture.stopPropagation);
					Gesture.on(callback, 'keyup', fb.updateValue);
// 					fb.callback = jquery(callback);
// 	 				fb.callback.bind('mousedown', Gesture.stopPropagation);
// 	 				fb.callback.bind('keyup', fb.updateValue);
					if (callback.value) {
						fb.setColor(callback.value);
					}
				}
			}
			return this;
		}
		fb.updateValue = function(event) {
			if (this.value && this.value != fb.color) {
				fb.setColor(this.value);
			}
		}

		/**
		 * Change color with HTML syntax #123456
		 */
		fb.setColor = function(color, event) {
			var unpack = fb.unpack(color);
			if (fb.color != color && unpack) {
				fb.color = color;
				fb.rgb = unpack;
				fb.hsl = fb.RGBToHSL(fb.rgb);
				fb.event = event;
				fb.updateDisplay();
			}
			return this;
		}

		/**
		 * Change color with HSL triplet [0..1, 0..1, 0..1]
		 */
		fb.setHSL = function(hsl) {
			fb.hsl = hsl;
			fb.rgb = fb.HSLToRGB(hsl);
			fb.color = fb.pack(fb.rgb);
			fb.updateDisplay();
			return this;
		}

		/////////////////////////////////////////////////////
		/**
		 * Initialize the color picker widget.
		 */
		fb.initWidget = function() {

			// Insert markup and size accordingly.
			var dim = {
				width: options.width,
				height: options.width
			};
			jquery(container).html('<div class="farbtastic" style="position: relative">' + '<div class="farbtastic-solid"></div>' + '<canvas class="farbtastic-mask"></canvas>' + '<canvas class="farbtastic-overlay"></canvas>' + '</div>').find('*').attr(dim).css(dim).end().find('div>*').css('position', 'absolute');

			// Determine layout
			fb.radius = (options.width - options.wheelWidth) / 2 - 1;
			fb.square = Math.floor((fb.radius - options.wheelWidth / 2) * 0.7) - 1;
			fb.mid = Math.floor(options.width / 2);
			fb.markerSize = options.wheelWidth * 0.3;
			fb.solidFill = jquery('.farbtastic-solid', container).css({
				width: fb.square * 2 - 1,
				height: fb.square * 2 - 1,
				left: fb.mid - fb.square,
				top: fb.mid - fb.square
			});

			// Set up drawing context.
			fb.cnvMask = jquery('.farbtastic-mask', container);
			fb.ctxMask = fb.cnvMask[0].getContext('2d');
			fb.cnvOverlay = jquery('.farbtastic-overlay', container);
			fb.ctxOverlay = fb.cnvOverlay[0].getContext('2d');
			fb.ctxMask.translate(fb.mid, fb.mid);
			fb.ctxOverlay.translate(fb.mid, fb.mid);

			// Draw widget base layers.
			fb.drawCircle();
			fb.drawMask();
		}

		/**
		 * Draw the color wheel.
		 */
		fb.drawCircle = function() {
			var tm = +(new Date());
			// Draw a hue circle with a bunch of gradient-stroked beziers.
			// Have to use beziers, as gradient-stroked arcs don't work.
			var n = 24,
				r = fb.radius,
				w = options.wheelWidth,
				nudge = 8 / r / n * Math.PI,
				// Fudge factor for seams.
				m = fb.ctxMask,
				angle1 = 0,
				color1, d1;
			m.save();
			m.lineWidth = w / r;
			m.scale(r, r);
			// Each segment goes from angle1 to angle2.
			for (var i = 0; i <= n; ++i) {
				var d2 = i / n,
					angle2 = d2 * Math.PI * 2,
					// Endpoints
					x1 = Math.sin(angle1),
					y1 = -Math.cos(angle1);
				x2 = Math.sin(angle2), y2 = -Math.cos(angle2),
				// Midpoint chosen so that the endpoints are tangent to the circle.
				am = (angle1 + angle2) / 2, tan = 1 / Math.cos((angle2 - angle1) / 2), xm = Math.sin(am) * tan, ym = -Math.cos(am) * tan,
				// New color
				color2 = fb.pack(fb.HSLToRGB([d2, 1, 0.5]));
				if (i > 0) {
					// Create gradient fill between the endpoints.
					var grad = m.createLinearGradient(x1, y1, x2, y2);
					grad.addColorStop(0, color1);
					grad.addColorStop(1, color2);
					m.strokeStyle = grad;
					// Draw quadratic curve segment.
					m.beginPath();
					m.moveTo(x1, y1);
					m.quadraticCurveTo(xm, ym, x2, y2);
					m.stroke();
				}
				// Prevent seams where curves join.
				angle1 = angle2 - nudge;
				color1 = color2;
				d1 = d2;
			}
			m.restore();
			__debug && jquery('body').append('<div>drawCircle ' + (+(new Date()) - tm) + 'ms');
		};

		/**
		 * Draw the saturation/luminance mask.
		 */
		fb.drawMask = function() {
			var tm = +(new Date());

			// Iterate over sat/lum space and calculate appropriate mask pixel values.
			var size = fb.square * 2,
				sq = fb.square;

			function calculateMask(sizex, sizey, outputPixel) {
				var isx = 1 / sizex,
					isy = 1 / sizey;
				for (var y = 0; y <= sizey; ++y) {
					var l = 1 - y * isy;
					for (var x = 0; x <= sizex; ++x) {
						var s = 1 - x * isx;
						// From sat/lum to alpha and color (grayscale)
						var a = 1 - 2 * Math.min(l * s, (1 - l) * s);
						var c = (a > 0) ? ((2 * l - 1 + a) * .5 / a) : 0;
						outputPixel(x, y, c, a);
					}
				}
			}

			// Method #1: direct pixel access (new Canvas).
			// Create half-resolution buffer.
			var sz = Math.floor(size / 2);
			var buffer = document.createElement('canvas');
			buffer.width = buffer.height = sz + 1;
			var ctx = buffer.getContext('2d');
			var frame = ctx.getImageData(0, 0, sz + 1, sz + 1);

			var i = 0;
			calculateMask(sz, sz, function(x, y, c, a) {
				frame.data[i++] = frame.data[i++] = frame.data[i++] = c * 255;
				frame.data[i++] = a * 255;
			});

			ctx.putImageData(frame, 0, 0);
			fb.ctxMask.drawImage(buffer, 0, 0, sz + 1, sz + 1, -sq, -sq, sq * 2, sq * 2);

			__debug && jquery('body').append('<div>drawMask ' + (+(new Date()) - tm) + 'ms');
		}

		/**
		 * Draw the selection markers.
		 */
		fb.drawMarkers = function() {
			// Determine marker dimensions
			var sz = options.width,
				lw = Math.ceil(fb.markerSize / 4),
				r = fb.markerSize - lw + 1;
			var angle = fb.hsl[0] * 6.28,
				x1 = Math.sin(angle) * fb.radius,
				y1 = -Math.cos(angle) * fb.radius,
				x2 = 2 * fb.square * (.5 - fb.hsl[1]),
				y2 = 2 * fb.square * (.5 - fb.hsl[2]),
				c1 = fb.invert ? '#fff' : '#000',
				c2 = fb.invert ? '#000' : '#fff';
			var circles = [{
				x: x1,
				y: y1,
				r: r,
				c: '#000',
				lw: lw + 1
			}, {
				x: x1,
				y: y1,
				r: fb.markerSize,
				c: '#fff',
				lw: lw
			}, {
				x: x2,
				y: y2,
				r: r,
				c: c2,
				lw: lw + 1
			}, {
				x: x2,
				y: y2,
				r: fb.markerSize,
				c: c1,
				lw: lw
			}, ];

			// Update the overlay canvas.
			fb.ctxOverlay.clearRect(-fb.mid, -fb.mid, sz, sz);
			for (var i = 0; i < circles.length; i++) {
				var c = circles[i];
				fb.ctxOverlay.lineWidth = c.lw;
				fb.ctxOverlay.strokeStyle = c.c;
				fb.ctxOverlay.beginPath();
				fb.ctxOverlay.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
				fb.ctxOverlay.stroke();
			}
		}

		/**
		 * Update the markers and styles
		 */
		fb.updateDisplay = function() {
			// Determine whether labels/markers should invert.
			fb.invert = (fb.rgb[0] * 0.3 + fb.rgb[1] * .59 + fb.rgb[2] * .11) <= 0.6;

			// Update the solid background fill.
			fb.solidFill.css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

			// Draw markers
			fb.drawMarkers();

			// Linked elements or callback
			if (typeof fb.callback == 'object') {
				// Change linked value
				jquery(fb.callback).each(function() {
					if ((typeof this.value == 'string') && this.value != fb.color) {
						this.value = fb.color.replace('#', '')
					}
				}).change();
			} else if (typeof fb.callback == 'function') {
				var state = fb.event && fb.event.state || 'update';
				fb.callback.call(fb, fb.color, state, fb.event);
			}
		}

		/**
		 * Helper for returning coordinates relative to the center.
		 */
		fb.widgetCoords = function(event) {
			return {
				x: event.pageX - fb.offset.left - fb.mid - 6,
				y: event.pageY - fb.offset.top - fb.mid
			};
		}

		/**
		 * Mousedown handler
		 */
		fb.mousedown = function(event) {
			// Capture mouse
// 			if (!jquery._farbtastic.dragging) {
// 				Gesture.on(document, 'mousemove', fb.mousemove);
// 				Gesture.on(document, 'mouseup', fb.mouseup);
// // 				jquery(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup);
// 				jquery._farbtastic.dragging = true;
// 			}

			// Update the stored offset for the widget.
			fb.offset = jquery(container).offset();

			// Check which area is being dragged
			var pos = fb.widgetCoords(event);
			fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) > (fb.square + 2);

			// Ensure point is within clickable area
			var rad = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
			if (fb.inBounds = rad < fb.mid) {
				Gesture.cancel(event);
				fb.mousemove(event);
				return false;
			}
		}

		/**
		 * Mousemove handler
		 */
		fb.mousemove = function(event) {
			if (fb.inBounds) {
				Gesture.cancel(event);
				// Get coordinates relative to color picker center
				var pos = fb.widgetCoords(event);

				// Set new HSL parameters
				if (fb.circleDrag) {
					var hue = Math.atan2(pos.x, -pos.y) / 6.28;
					fb.setHSL([(hue + 1) % 1, 1.0, 0.5]);
// 					fb.setHSL([(hue + 1) % 1, fb.hsl[1], fb.hsl[2]]);
				} else {
					var sat = Math.max(0, Math.min(1, -(pos.x / fb.square / 2.0) + .5));
					var lum = Math.max(0, Math.min(1, -(pos.y / fb.square / 2.0) + .5));
					fb.setHSL([fb.hsl[0], sat, lum]);
				}
				return false;
			}
		}

		/**
		 * Mouseup handler
		 */
		fb.mouseup = function(event) {
			fb.mousemove(event);
			// Uncapture mouse
// 			Gesture.off(document, 'mousemove', fb.mousemove);
// 			Gesture.off(document, 'mouseup', fb.mouseup);
// 			jquery(document).unbind('mousemove', fb.mousemove);
// 			jquery(document).unbind('mouseup', fb.mouseup);
			jquery._farbtastic.dragging = false;
		}

		/**
		 * MouseGhost handler
		 */
		fb.mouseghost = function(event) {
			fb.offset = jquery(container).offset();
			///
			var pos = fb.widgetCoords(event);
			var rad = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
			if (fb.inBounds = rad < fb.mid) {
				container.style.cursor = 'crosshair';
			} else {
				container.style.cursor = 'default';
			}
		};

		/* Various color utility functions */
		fb.dec2hex = function(x) {
			return (x < 16 ? '0' : '') + x.toString(16);
		}

		fb.packDX = function(c, a) {
			return '#' + fb.dec2hex(a) + fb.dec2hex(c) + fb.dec2hex(c) + fb.dec2hex(c);
		};

		fb.pack = function(rgb) {
			var r = Math.round(rgb[0] * 255);
			var g = Math.round(rgb[1] * 255);
			var b = Math.round(rgb[2] * 255);
			return '#' + fb.dec2hex(r) + fb.dec2hex(g) + fb.dec2hex(b);
		};

		fb.unpack = function(color) {
			if (color[0] !== '#') color = '#' + color;
			if (color.length == 7) {
				function x(i) {
					return parseInt(color.substring(i, i + 2), 16) / 255;
				}
				return [x(1), x(3), x(5)];
			} else if (color.length == 4) {
				function x(i) {
					return parseInt(color.substring(i, i + 1), 16) / 15;
				}
				return [x(1), x(2), x(3)];
			}
		};

		fb.HSLToRGB = function(hsl) {
			var m1, m2, r, g, b;
			var h = hsl[0],
				s = hsl[1],
				l = hsl[2];
			m2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
			m1 = l * 2 - m2;
			return [
				this.hueToRGB(m1, m2, h + 0.33333), this.hueToRGB(m1, m2, h), this.hueToRGB(m1, m2, h - 0.33333)
			];
		};

		fb.hueToRGB = function(m1, m2, h) {
			h = (h + 1) % 1;
			if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
			if (h * 2 < 1) return m2;
			if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
			return m1;
		};

		fb.RGBToHSL = function(rgb) {
			var r = rgb[0],
				g = rgb[1],
				b = rgb[2],
				min = Math.min(r, g, b),
				max = Math.max(r, g, b),
				delta = max - min,
				h = 0,
				s = 0,
				l = (min + max) / 2;
			if (l > 0 && l < 1) {
				s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
			}
			if (delta > 0) {
				if (max == r && max != g) h += (g - b) / delta;
				if (max == g && max != b) h += (2 + (b - r) / delta);
				if (max == b && max != r) h += (4 + (r - g) / delta);
				h /= 6;
			}
			return [h, s, l];
		};

		if (!options.callback) {
			options = {
				callback: options
			};
		}
		options = jquery.extend({
			width: 300,
			wheelWidth: (options.width || 300) / 10,
			callback: null
		}, options);

		// Initialize.
		fb.initWidget();

		// Install mousedown handler (the others are set on the document on-demand)
// 		jquery('canvas.farbtastic-overlay', container).mousedown(fb.mousedown);
// 		jquery('canvas.farbtastic-overlay', container).mousemove(fb.mouseghost);
		Gesture.drag('canvas.farbtastic-overlay', function (gevent) {
			var event = gevent.originalEvent
			fb.event = gevent
			if (gevent.START) fb.mousedown(event)
			if (gevent.CHANGE) fb.mousemove(event)
			if (gevent.END) fb.mouseup(event)
		});
		Gesture.on('canvas.farbtastic-overlay', 'mousemove', fb.mouseghost);

		// Set linked elements/callback
		if (options.callback) {
			fb.linkTo(options.callback);
		}
		// Set to gray.
		if (!fb.color) {
			fb.setColor(options.color || '#808080');
		}
	}

})(jQuery);
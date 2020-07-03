window.sketchConfig = {
	"lang": "en",
	"prefix": "logomakr",
	"doc": {
		"title": "LogoMakr",
		"description": "made with http://logomakr.com"
	},
	"palette": {
		"colorPicker": {
			"eyeDropper": true,
			"hexInput": true
		},
		"grid": true,
		"header": "COLORS"
	},
	"style": {
		"setGlobalsFromSelection": false
	},
	"io": {
		"translateX": 10,
		"translateY": 10
	},
	"defaults": {
		"tool": "select",
		"color": "#60b0f4"
	},
	"placement": {
		"maxWidth": 2048,
		"maxHeight": 2048
	},
	"history": {
		"vector": true,
		"limit": false,
		"autoSelect": true
	},
	"ui": {
		"tooltips": true,
		"quickSelect": true
	},
	"theme": {
		"bg": "white",
		"bg-attention": "#FFDD0A",
		"bg-selected": "#4A4A4A"
	},
	"tools": {
		"allTools": {
			"enableLiveCursor": true,
			"flippable": true,
			"movable": true,
			"units": "userSpaceOnUse",
			"useAddByClick": true,
			"useAddByDrag": true,
			"usePointInImageData": true,
			"usePointInPath": false
		},
		"eyedropper": {
			"cssCursor": "crosshair"
		},
		"group": {
			"useKeyboardShortcuts": false
		},
		"regularPolygon": {
			"sides": 6
		},
		"ring": {
			"cutout": 0.98
		},
		"select": {
			"clickToDeselect": false
		},
		"fancyText": {
			"alwaysEditInPlace": true,
			"contextualStyleMenu": true,
			"flippable": false,
			"useAutoHeight": false,
			"useResize": true
		},
		"vectorfill": {
			"cssCursor": "crosshair",
			"usePointInImageData": true
		},
		"zoom": {
			"enabled": false
		}
	},
	"hosts": {
		"https://logomakr.com": {
			"env": "prod",
			"apiPath": "https://logomakr.com/min/plugins-${pkgName}.min.${pkgFormat}",
			"HOST": "https://logomakr.com",
			"MEDIA": "https://logomakr.com/media/",
			"POST": "https://logomakr.com/filesystem/",
			"alias": ["http://web.logomakr.com"],
			"hardlink": ["file://", "about://"]
		},
		"https://test.logomakr.com": {
			"env": "prod",
			"apiPath": "https://test.logomakr.com/min/plugins-${pkgName}.min.${pkgFormat}",
			"HOST": "https://test.logomakr.com",
			"MEDIA": "https://test.logomakr.com/media/",
			"POST": "https://test.logomakr.com/filesystem/",
			"hardlink": ["file://", "about://"]
		},
		"https://enterprise.paintserver.com": {
			"env": "prod",
			"apiPath": "https://enterprise.paintserver.com/logomakr/v2/min/plugins-${pkgName}.min.${pkgFormat}",
			"HOST": "https://enterprise.paintserver.com/logomakr/v2",
			"MEDIA": "https://enterprise.paintserver.com/logomakr/v2/media/",
			"POST": "https://enterprise.paintserver.com/logomakr/v2/filesystem/",
			"hardlink": ["file://", "about://"]
		},
		"localhost": {
			"env": "dev",
			"apiPath": "https://localhost/sketch.io/projects/logomakr/public_html/min/plugins-${pkgName}.min.${pkgFormat}",
			"HOST": "https://localhost/sketch.io/projects/logomakr/src/",
			"MEDIA": "https://localhost/sketch.io/projects/logomakr/src/proxy.php?",
			"POST": "https://localhost/sketch.io/projects/logomakr/src/filesystem/",
			"alias": ["mud.lan", "192.168.1.105"]
		},
		"sketchpad": {
			"env": "dev",
			"apiPath": "https://sketchpad/projects/logomakr/public_html/min/plugins-${pkgName}.min.${pkgFormat}",
			"HOST": "https://sketchpad/projects/logomakr/src/",
			"MEDIA": "https://sketchpad/projects/logomakr/src/proxy.php?",
			"POST": "https://sketchpad/projects/logomakr/src/filesystem/"
		}
	},
	"assets": {
		"font": [{
			"key": "Abel",
			"id": "Abel",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/abel/Abel-Regular.ttf",
					"woff": "font/Simple & Modern/abel/Abel-Regular.woff",
					"woff2": "font/Simple & Modern/abel/Abel-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/abel/Abel-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Adamina",
			"id": "Adamina",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/adamina/Adamina-Regular.ttf",
					"woff": "font/Traditional (Serif)/adamina/Adamina-Regular.woff",
					"woff2": "font/Traditional (Serif)/adamina/Adamina-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/adamina/Adamina-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Aguafina Script",
			"id": "Aguafina Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/aguafinascript/Aguafina-Script-Regular.ttf",
					"woff": "font/Fancy & Cursive/aguafinascript/Aguafina-Script-Regular.woff",
					"woff2": "font/Fancy & Cursive/aguafinascript/Aguafina-Script-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/aguafinascript/AguafinaScript-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Akronim",
			"id": "Akronim",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/akronim/Akronim-Regular.ttf",
					"woff": "font/Fancy & Cursive/akronim/Akronim-Regular.woff",
					"woff2": "font/Fancy & Cursive/akronim/Akronim-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/akronim/Akronim-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Alfa Slab One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Traditional (Serif)/alfa-slab-one/alfa-slab-one-regular.woff2",
					"woff": "font/Traditional (Serif)/alfa-slab-one/alfa-slab-one-regular.woff",
					"ttf": "font/Traditional (Serif)/alfa-slab-one/alfa-slab-one-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/alfa-slab-one/alfa-slab-one-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"author": [
				[{
					"name": "JM Solé",
					"bio": null,
					"imageUrl": null,
					"filename": ["AlfaSlabOne-Regular.ttf"],
					"email": "http://www.jmsole.cl | info@jmsole.cl",
					"copyright": "Copyright 2016 The Alfa Slab One Project Authors (http://www.jmsole.cl | info@jmsole.cl), with Reserved Font Name \"Alfa Slab\"."
				}]
			],
			"title": "Alfa Slab One",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Allan",
			"id": "Allan",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/allan/Allan-Regular.ttf",
					"woff": "font/Handwriting/allan/Allan-Regular.woff",
					"woff2": "font/Handwriting/allan/Allan-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Handwriting/allan/Allan-700.ttf",
					"woff": "font/Handwriting/allan/Allan-700.woff",
					"woff2": "font/Handwriting/allan/Allan-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/allan/Allan-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Handwriting/allan/Allan-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Allerta",
			"id": "Allerta",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/allerta/Allerta-Regular.ttf",
					"woff": "font/Simple & Modern/allerta/Allerta-Regular.woff",
					"woff2": "font/Simple & Modern/allerta/Allerta-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/allerta/Allerta-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Almendra",
			"id": "Almendra",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/almendra/Almendra-Regular.ttf",
					"woff": "font/Traditional (Serif)/almendra/Almendra-Regular.woff",
					"woff2": "font/Traditional (Serif)/almendra/Almendra-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/almendra/Almendra-700.ttf",
					"woff": "font/Traditional (Serif)/almendra/Almendra-700.woff",
					"woff2": "font/Traditional (Serif)/almendra/Almendra-700.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/almendra/Almendra-Italic.ttf",
					"woff": "font/Traditional (Serif)/almendra/Almendra-Italic.woff",
					"woff2": "font/Traditional (Serif)/almendra/Almendra-Italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/almendra/Almendra-700italic.ttf",
					"woff": "font/Traditional (Serif)/almendra/Almendra-700italic.woff",
					"woff2": "font/Traditional (Serif)/almendra/Almendra-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/almendra/Almendra-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/almendra/Almendra-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/almendra/Almendra-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/almendra/Almendra-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Almendra Display",
			"id": "Almendra Display",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/almendradisplay/Almendra-Display-Regular.ttf",
					"woff": "font/Fancy & Cursive/almendradisplay/Almendra-Display-Regular.woff",
					"woff2": "font/Fancy & Cursive/almendradisplay/Almendra-Display-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/almendradisplay/AlmendraDisplay-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Amaranth",
			"id": "Amaranth",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/amaranth/Amaranth-Regular.ttf",
					"woff": "font/Simple & Modern/amaranth/Amaranth-Regular.woff",
					"woff2": "font/Simple & Modern/amaranth/Amaranth-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/amaranth/Amaranth-Italic.ttf",
					"woff": "font/Simple & Modern/amaranth/Amaranth-Italic.woff",
					"woff2": "font/Simple & Modern/amaranth/Amaranth-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/amaranth/Amaranth-700.ttf",
					"woff": "font/Simple & Modern/amaranth/Amaranth-700.woff",
					"woff2": "font/Simple & Modern/amaranth/Amaranth-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/amaranth/Amaranth-700italic.ttf",
					"woff": "font/Simple & Modern/amaranth/Amaranth-700italic.woff",
					"woff2": "font/Simple & Modern/amaranth/Amaranth-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/amaranth/Amaranth-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/amaranth/Amaranth-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/amaranth/Amaranth-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/amaranth/Amaranth-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Anaheim",
			"id": "Anaheim",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/anaheim/Anaheim-Regular.ttf",
					"woff": "font/Simple & Modern/anaheim/Anaheim-Regular.woff",
					"woff2": "font/Simple & Modern/anaheim/Anaheim-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/anaheim/Anaheim-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Andika",
			"id": "Andika",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/andika/Andika-Regular.ttf",
					"woff": "font/Simple & Modern/andika/Andika-Regular.woff",
					"woff2": "font/Simple & Modern/andika/Andika-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/andika/Andika-R.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Antic",
			"id": "Antic",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/antic/Antic-Regular.ttf",
					"woff": "font/Simple & Modern/antic/Antic-Regular.woff",
					"woff2": "font/Simple & Modern/antic/Antic-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/antic/Antic-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Arbutus",
			"id": "Arbutus",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/arbutus/Arbutus-Regular.ttf",
					"woff": "font/Fun & Funky/arbutus/Arbutus-Regular.woff",
					"woff2": "font/Fun & Funky/arbutus/Arbutus-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/arbutus/Arbutus-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Architects Daughter",
			"id": "Architects Daughter",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/architectsdaughter/Architects-Daughter-Regular.ttf",
					"woff": "font/Fun & Funky/architectsdaughter/Architects-Daughter-Regular.woff",
					"woff2": "font/Fun & Funky/architectsdaughter/Architects-Daughter-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/architectsdaughter/ArchitectsDaughter.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Archivo Black",
			"id": "Archivo Black",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/archivoblack/Archivo-Black-Regular.ttf",
					"woff": "font/Simple & Modern/archivoblack/Archivo-Black-Regular.woff",
					"woff2": "font/Simple & Modern/archivoblack/Archivo-Black-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/archivoblack/ArchivoBlack-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Archivo Narrow",
			"id": "Archivo Narrow",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Regular.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Regular.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Italic.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Italic.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500italic.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500italic.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600italic.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600italic.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700italic.ttf",
					"woff": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700italic.woff",
					"woff2": "font/Simple & Modern/archivonarrow/Archivo-Narrow-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/archivonarrow/ArchivoNarrow-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/archivonarrow/ArchivoNarrow-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/archivonarrow/ArchivoNarrow-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/archivonarrow/ArchivoNarrow-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Arial",
			"id": "Arial",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/arial/Arial.woff2",
					"woff": "font/Simple & Modern/arial/Arial.woff",
					"ttf": "font/Simple & Modern/arial/Arial.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/arial/Arial.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Astloch",
			"id": "Astloch",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/astloch/Astloch-Regular.ttf",
					"woff": "font/Fancy & Cursive/astloch/Astloch-Regular.woff",
					"woff2": "font/Fancy & Cursive/astloch/Astloch-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/astloch/Astloch-700.ttf",
					"woff": "font/Fancy & Cursive/astloch/Astloch-700.woff",
					"woff2": "font/Fancy & Cursive/astloch/Astloch-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/astloch/Astloch-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fancy & Cursive/astloch/Astloch-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Atomic Age",
			"id": "Atomic Age",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/atomicage/Atomic-Age-Regular.ttf",
					"woff": "font/Traditional (Serif)/atomicage/Atomic-Age-Regular.woff",
					"woff2": "font/Traditional (Serif)/atomicage/Atomic-Age-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/atomicage/AtomicAge-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Audiowide",
			"id": "Audiowide",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/audiowide/Audiowide-Regular.ttf",
					"woff": "font/Pixel & Monospace/audiowide/Audiowide-Regular.woff",
					"woff2": "font/Pixel & Monospace/audiowide/Audiowide-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/audiowide/Audiowide-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Average Sans",
			"id": "Average Sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/averagesans/Average-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/averagesans/Average-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/averagesans/Average-Sans-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/averagesans/AverageSans-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Averia Sans Libre",
			"id": "Averia Sans Libre",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Regular.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Regular.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Regular.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300italic.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300italic.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-300italic.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Italic.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Italic.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700italic.ttf",
					"woff": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700italic.woff",
					"woff2": "font/Handwriting/averiasanslibre/Averia-Sans-Libre-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Handwriting/averiasanslibre/AveriaSansLibre-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 300", "normal 300", "italic 400", "italic 700", "normal 700"]
		},{
			"key": "Anton",
			"id": "Anton",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/anton/anton-v9.woff",
					"woff2": "font/Designer Picks/anton/anton-v9.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/anton/Anton.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Alegreya-Sc",
			"id": "Alegreya-Sc",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/alegreya-sc/alegreya-sc-v10.woff",
					"woff2": "font/Designer Picks/alegreya-sc/alegreya-sc-v10.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/alegreya-sc/Alegreya+SC.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Amatic-SC",
			"id": "Amatic-SC",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/amatic-sc/amatic-sc-v11.woff",
					"woff2": "font/Designer Picks/amatic-sc/amatic-sc-v11.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/amatic-sc/Amatic+SC.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Arvo",
			"id": "Arvo",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/arvo/arvo-v10.woff",
					"woff2": "font/Designer Picks/arvo/arvo-v10.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/arvo/Arvo.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Abril-Fatface",
			"id": "Abril-Fatface",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/abril-fatface/abril-fatface-v9.woff",
					"woff2": "font/Designer Picks/abril-fatface/abril-fatface-v9.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/abril-fatface/Abril+Fatface.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Bad Script",
			"id": "Bad Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/badscript/Bad-Script-Regular.ttf",
					"woff": "font/Handwriting/badscript/Bad-Script-Regular.woff",
					"woff2": "font/Handwriting/badscript/Bad-Script-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/badscript/BadScript-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Bangers",
			"id": "Bangers",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/bangers/Bangers-Regular.ttf",
					"woff": "font/Fun & Funky/bangers/Bangers-Regular.woff",
					"woff2": "font/Fun & Funky/bangers/Bangers-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/bangers/Bangers.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Berkshire Swash",
			"id": "Berkshire Swash",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/berkshireswash/Berkshire-Swash-Regular.ttf",
					"woff": "font/Traditional (Serif)/berkshireswash/Berkshire-Swash-Regular.woff",
					"woff2": "font/Traditional (Serif)/berkshireswash/Berkshire-Swash-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/berkshireswash/BerkshireSwash-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Bilbo Swash Caps",
			"id": "Bilbo Swash Caps",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/bilboswashcaps/Bilbo-Swash-Caps-Regular.ttf",
					"woff": "font/Fancy & Cursive/bilboswashcaps/Bilbo-Swash-Caps-Regular.woff",
					"woff2": "font/Fancy & Cursive/bilboswashcaps/Bilbo-Swash-Caps-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/bilboswashcaps/BilboSwashCaps-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Bitter",
			"id": "Bitter",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/bitter/Bitter-Regular.ttf",
					"woff": "font/Simple & Modern/bitter/Bitter-Regular.woff",
					"woff2": "font/Simple & Modern/bitter/Bitter-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/bitter/Bitter-Italic.ttf",
					"woff": "font/Simple & Modern/bitter/Bitter-Italic.woff",
					"woff2": "font/Simple & Modern/bitter/Bitter-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/bitter/Bitter-700.ttf",
					"woff": "font/Simple & Modern/bitter/Bitter-700.woff",
					"woff2": "font/Simple & Modern/bitter/Bitter-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/bitter/Bitter-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/bitter/Bitter-Italic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/bitter/Bitter-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "normal 700"]
		}, {
			"key": "Bonbon",
			"id": "Bonbon",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/bonbon/Bonbon-Regular.ttf",
					"woff": "font/Decorative/bonbon/Bonbon-Regular.woff",
					"woff2": "font/Decorative/bonbon/Bonbon-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/bonbon/Bonbon-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Butcherman",
			"id": "Butcherman",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/butcherman/Butcherman-Regular.ttf",
					"woff": "font/Scary & Dark/butcherman/Butcherman-Regular.woff",
					"woff2": "font/Scary & Dark/butcherman/Butcherman-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/butcherman/Butcherman-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Butterfly Kids",
			"id": "Butterfly Kids",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/butterflykids/Butterfly-Kids-Regular.ttf",
					"woff": "font/Fun & Funky/butterflykids/Butterfly-Kids-Regular.woff",
					"woff2": "font/Fun & Funky/butterflykids/Butterfly-Kids-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/butterflykids/ButterflyKids-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Bubblegum-sans",
			"id": "Bubblegum-sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/bubblegum-sans/bubblegum-sans-v7.woff",
					"woff2": "font/Designer Picks/bubblegum-sans/bubblegum-sans-v7.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/bubblegum-sans/Bubblegum Sans.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},  {
			"key": "Caesar Dressing",
			"id": "Caesar Dressing",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/caesardressing/Caesar-Dressing-Regular.ttf",
					"woff": "font/Scary & Dark/caesardressing/Caesar-Dressing-Regular.woff",
					"woff2": "font/Scary & Dark/caesardressing/Caesar-Dressing-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/caesardressing/CaesarDressing-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Cantora One",
			"id": "Cantora One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/cantoraone/Cantora-One-Regular.ttf",
					"woff": "font/Simple & Modern/cantoraone/Cantora-One-Regular.woff",
					"woff2": "font/Simple & Modern/cantoraone/Cantora-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/cantoraone/CantoraOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Capriola",
			"id": "Capriola",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/capriola/Capriola-Regular.ttf",
					"woff": "font/Simple & Modern/capriola/Capriola-Regular.woff",
					"woff2": "font/Simple & Modern/capriola/Capriola-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/capriola/Capriola-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Cardo",
			"id": "Cardo",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/cardo/Cardo-Regular.ttf",
					"woff": "font/Traditional (Serif)/cardo/Cardo-Regular.woff",
					"woff2": "font/Traditional (Serif)/cardo/Cardo-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/cardo/Cardo-Italic.ttf",
					"woff": "font/Traditional (Serif)/cardo/Cardo-Italic.woff",
					"woff2": "font/Traditional (Serif)/cardo/Cardo-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/cardo/Cardo-700.ttf",
					"woff": "font/Traditional (Serif)/cardo/Cardo-700.woff",
					"woff2": "font/Traditional (Serif)/cardo/Cardo-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/cardo/Cardo-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/cardo/Cardo-Italic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/cardo/Cardo-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "normal 700"]
		}, {
			"key": "Carme",
			"id": "Carme",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/carme/Carme-Regular.ttf",
					"woff": "font/Simple & Modern/carme/Carme-Regular.woff",
					"woff2": "font/Simple & Modern/carme/Carme-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/carme/Carme-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Carrois Gothic",
			"id": "Carrois Gothic",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/carroisgothic/Carrois-Gothic-Regular.ttf",
					"woff": "font/Simple & Modern/carroisgothic/Carrois-Gothic-Regular.woff",
					"woff2": "font/Simple & Modern/carroisgothic/Carrois-Gothic-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/carroisgothic/CarroisGothic-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Carter One",
			"id": "Carter One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/carterone/Carter-One-Regular.ttf",
					"woff": "font/Handwriting/carterone/Carter-One-Regular.woff",
					"woff2": "font/Handwriting/carterone/Carter-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/carterone/CarterOne.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Caudex",
			"id": "Caudex",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/caudex/Caudex-Regular.ttf",
					"woff": "font/Traditional (Serif)/caudex/Caudex-Regular.woff",
					"woff2": "font/Traditional (Serif)/caudex/Caudex-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/caudex/Caudex-Italic.ttf",
					"woff": "font/Traditional (Serif)/caudex/Caudex-Italic.woff",
					"woff2": "font/Traditional (Serif)/caudex/Caudex-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/caudex/Caudex-700.ttf",
					"woff": "font/Traditional (Serif)/caudex/Caudex-700.woff",
					"woff2": "font/Traditional (Serif)/caudex/Caudex-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/caudex/Caudex-700italic.ttf",
					"woff": "font/Traditional (Serif)/caudex/Caudex-700italic.woff",
					"woff2": "font/Traditional (Serif)/caudex/Caudex-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/caudex/Caudex-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/caudex/Caudex-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/caudex/Caudex-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/caudex/Caudex-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Ceviche One",
			"id": "Ceviche One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/cevicheone/Ceviche-One-Regular.ttf",
					"woff": "font/Scary & Dark/cevicheone/Ceviche-One-Regular.woff",
					"woff2": "font/Scary & Dark/cevicheone/Ceviche-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/cevicheone/CevicheOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Chela One",
			"id": "Chela One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/chelaone/Chela-One-Regular.ttf",
					"woff": "font/Traditional (Serif)/chelaone/Chela-One-Regular.woff",
					"woff2": "font/Traditional (Serif)/chelaone/Chela-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/chelaone/ChelaOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Chelsea Market",
			"id": "Chelsea Market",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/chelseamarket/Chelsea-Market-Regular.ttf",
					"woff": "font/Fun & Funky/chelseamarket/Chelsea-Market-Regular.woff",
					"woff2": "font/Fun & Funky/chelseamarket/Chelsea-Market-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/chelseamarket/ChelseaMarket-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Cherry Cream Soda",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Decorative/cherry-cream-soda/cherry-cream-soda-regular.woff2",
					"woff": "font/Decorative/cherry-cream-soda/cherry-cream-soda-regular.woff",
					"ttf": "font/Decorative/cherry-cream-soda/cherry-cream-soda-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/cherry-cream-soda/cherry-cream-soda-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"author": [
				[{
					"name": "Font Diner",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/vARaHsmAWPwA4QGaRglvT4Tw8-FCqYq2cutO7y9-spZPVeunSllBzQFASTs",
					"filename": ["CherryCreamSoda-Regular.ttf"],
					"email": "c",
					"copyright": "Copyright 2010 by Font Diner, Inc. All rights reserved."
				}]
			],
			"title": "Cherry Cream Soda",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Chewy",
			"id": "Chewy",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/chewy/Chewy-Regular.ttf",
					"woff": "font/Fun & Funky/chewy/Chewy-Regular.woff",
					"woff2": "font/Fun & Funky/chewy/Chewy-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/chewy/Chewy.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Chivo",
			"id": "Chivo",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/chivo/Chivo-300.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-300.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/chivo/Chivo-300italic.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-300italic.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/chivo/Chivo-Regular.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-Regular.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/chivo/Chivo-Italic.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-Italic.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/chivo/Chivo-700.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-700.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/chivo/Chivo-700italic.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-700italic.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/chivo/Chivo-900.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-900.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/chivo/Chivo-900italic.ttf",
					"woff": "font/Simple & Modern/chivo/Chivo-900italic.woff",
					"woff2": "font/Simple & Modern/chivo/Chivo-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/chivo/Chivo-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/chivo/Chivo-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Simple & Modern/chivo/Chivo-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Simple & Modern/chivo/Chivo-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 900", "normal 900"]
		}, {
			"key": "Cinzel Decorative",
			"id": "Cinzel Decorative",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-Regular.ttf",
					"woff": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-Regular.woff",
					"woff2": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-700.ttf",
					"woff": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-700.woff",
					"woff2": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-700.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-900.ttf",
					"woff": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-900.woff",
					"woff2": "font/Traditional (Serif)/cinzeldecorative/Cinzel-Decorative-900.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/cinzeldecorative/CinzelDecorative-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/cinzeldecorative/CinzelDecorative-Bold.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Traditional (Serif)/cinzeldecorative/CinzelDecorative-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700", "normal 900"]
		}, {
			"key": "Clicker Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Fancy & Cursive/clicker-script/clicker-script-regular.woff2",
					"woff": "font/Fancy & Cursive/clicker-script/clicker-script-regular.woff",
					"ttf": "font/Fancy & Cursive/clicker-script/clicker-script-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/clicker-script/clicker-script-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"author": [
				[{
					"name": "Astigmatic",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/dB25CHTk-wGoefHzSnQTtfWay6TwYiT3-uR11vgwkQamwVF6O-Ni61z8fSk",
					"filename": ["ClickerScript-Regular.ttf"],
					"email": "astigma@astigmatic.com",
					"copyright": "Copyright (c) 2012 by Brian J. Bonislawsky and Jim Lyles for Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name \"Clicker Script\""
				}]
			],
			"title": "Clicker Script",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Codystar",
			"id": "Codystar",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Decorative/codystar/Codystar-300.ttf",
					"woff": "font/Decorative/codystar/Codystar-300.woff",
					"woff2": "font/Decorative/codystar/Codystar-300.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/codystar/Codystar-Regular.ttf",
					"woff": "font/Decorative/codystar/Codystar-Regular.woff",
					"woff2": "font/Decorative/codystar/Codystar-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/codystar/Codystar-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Decorative/codystar/Codystar-Light.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 300"]
		}, {
			"key": "Combo",
			"id": "Combo",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/combo/Combo-Regular.ttf",
					"woff": "font/Traditional (Serif)/combo/Combo-Regular.woff",
					"woff2": "font/Traditional (Serif)/combo/Combo-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/combo/Combo-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Comfortaa",
			"id": "Comfortaa",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/comfortaa/Comfortaa-300.ttf",
					"woff": "font/Simple & Modern/comfortaa/Comfortaa-300.woff",
					"woff2": "font/Simple & Modern/comfortaa/Comfortaa-300.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/comfortaa/Comfortaa-700.ttf",
					"woff": "font/Simple & Modern/comfortaa/Comfortaa-700.woff",
					"woff2": "font/Simple & Modern/comfortaa/Comfortaa-700.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/comfortaa/Comfortaa-Regular.ttf",
					"woff": "font/Simple & Modern/comfortaa/Comfortaa-Regular.woff",
					"woff2": "font/Simple & Modern/comfortaa/Comfortaa-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/comfortaa/Comfortaa-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/comfortaa/Comfortaa-Light.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/comfortaa/Comfortaa-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 300", "normal 700"]
		}, {
			"key": "Coming Soon",
			"id": "Coming Soon",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/comingsoon/Coming-Soon-Regular.ttf",
					"woff": "font/Scary & Dark/comingsoon/Coming-Soon-Regular.woff",
					"woff2": "font/Scary & Dark/comingsoon/Coming-Soon-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/comingsoon/ComingSoon.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Concert One",
			"id": "Concert One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/concertone/Concert-One-Regular.ttf",
					"woff": "font/Simple & Modern/concertone/Concert-One-Regular.woff",
					"woff2": "font/Simple & Modern/concertone/Concert-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/concertone/ConcertOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Convergence",
			"id": "Convergence",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/convergence/Convergence-Regular.ttf",
					"woff": "font/Simple & Modern/convergence/Convergence-Regular.woff",
					"woff2": "font/Simple & Modern/convergence/Convergence-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/convergence/Convergence-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Courgette",
			"id": "Courgette",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/courgette/Courgette-Regular.ttf",
					"woff": "font/Simple & Modern/courgette/Courgette-Regular.woff",
					"woff2": "font/Simple & Modern/courgette/Courgette-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/courgette/Courgette-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Cousine",
			"id": "Cousine",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/cousine/Cousine-Regular.ttf",
					"woff": "font/Pixel & Monospace/cousine/Cousine-Regular.woff",
					"woff2": "font/Pixel & Monospace/cousine/Cousine-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/cousine/Cousine-Italic.ttf",
					"woff": "font/Pixel & Monospace/cousine/Cousine-Italic.woff",
					"woff2": "font/Pixel & Monospace/cousine/Cousine-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/cousine/Cousine-700.ttf",
					"woff": "font/Pixel & Monospace/cousine/Cousine-700.woff",
					"woff2": "font/Pixel & Monospace/cousine/Cousine-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/cousine/Cousine-700italic.ttf",
					"woff": "font/Pixel & Monospace/cousine/Cousine-700italic.woff",
					"woff2": "font/Pixel & Monospace/cousine/Cousine-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/cousine/Cousine-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Pixel & Monospace/cousine/Cousine-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Pixel & Monospace/cousine/Cousine-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Pixel & Monospace/cousine/Cousine-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Covered By Your Grace",
			"id": "Covered By Your Grace",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/coveredbyyourgrace/Covered-By-Your-Grace-Regular.ttf",
					"woff": "font/Handwriting/coveredbyyourgrace/Covered-By-Your-Grace-Regular.woff",
					"woff2": "font/Handwriting/coveredbyyourgrace/Covered-By-Your-Grace-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/coveredbyyourgrace/CoveredByYourGrace.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Crafty Girls",
			"id": "Crafty Girls",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/craftygirls/Crafty-Girls-Regular.ttf",
					"woff": "font/Handwriting/craftygirls/Crafty-Girls-Regular.woff",
					"woff2": "font/Handwriting/craftygirls/Crafty-Girls-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/craftygirls/CraftyGirls.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Creepster",
			"id": "Creepster",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/creepster/Creepster-Regular.ttf",
					"woff": "font/Scary & Dark/creepster/Creepster-Regular.woff",
					"woff2": "font/Scary & Dark/creepster/Creepster-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/creepster/Creepster-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Crushed",
			"id": "Crushed",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/crushed/Crushed-Regular.ttf",
					"woff": "font/Traditional (Serif)/crushed/Crushed-Regular.woff",
					"woff2": "font/Traditional (Serif)/crushed/Crushed-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/crushed/Crushed.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Cutive Mono",
			"id": "Cutive Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/cutivemono/Cutive-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/cutivemono/Cutive-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/cutivemono/Cutive-Mono-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/cutivemono/CutiveMono-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Cormorant",
			"id": "Cormorant",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/cormorant/cormorant-v6.woff",
					"woff2": "font/Designer Picks/cormorant/cormorant-v6.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/cormorant/Cormorant.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Dancing Script",
			"id": "Dancing Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/dancingscript/Dancing-Script-Regular.ttf",
					"woff": "font/Fancy & Cursive/dancingscript/Dancing-Script-Regular.woff",
					"woff2": "font/Fancy & Cursive/dancingscript/Dancing-Script-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/dancingscript/Dancing-Script-700.ttf",
					"woff": "font/Fancy & Cursive/dancingscript/Dancing-Script-700.woff",
					"woff2": "font/Fancy & Cursive/dancingscript/Dancing-Script-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/dancingscript/DancingScript-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fancy & Cursive/dancingscript/DancingScript-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Delius",
			"id": "Delius",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/delius/Delius-Regular.ttf",
					"woff": "font/Handwriting/delius/Delius-Regular.woff",
					"woff2": "font/Handwriting/delius/Delius-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/delius/Delius-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Delius Swash Caps",
			"id": "Delius Swash Caps",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/deliusswashcaps/Delius-Swash-Caps-Regular.ttf",
					"woff": "font/Handwriting/deliusswashcaps/Delius-Swash-Caps-Regular.woff",
					"woff2": "font/Handwriting/deliusswashcaps/Delius-Swash-Caps-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/deliusswashcaps/DeliusSwashCaps-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Delius Unicase",
			"id": "Delius Unicase",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/deliusunicase/Delius-Unicase-Regular.ttf",
					"woff": "font/Fun & Funky/deliusunicase/Delius-Unicase-Regular.woff",
					"woff2": "font/Fun & Funky/deliusunicase/Delius-Unicase-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fun & Funky/deliusunicase/Delius-Unicase-700.ttf",
					"woff": "font/Fun & Funky/deliusunicase/Delius-Unicase-700.woff",
					"woff2": "font/Fun & Funky/deliusunicase/Delius-Unicase-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/deliusunicase/DeliusUnicase-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fun & Funky/deliusunicase/DeliusUnicase-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Denk One",
			"id": "Denk One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/denkone/Denk-One-Regular.ttf",
					"woff": "font/Scary & Dark/denkone/Denk-One-Regular.woff",
					"woff2": "font/Scary & Dark/denkone/Denk-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/denkone/DenkOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Devonshire",
			"id": "Devonshire",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/devonshire/Devonshire-Regular.ttf",
					"woff": "font/Handwriting/devonshire/Devonshire-Regular.woff",
					"woff2": "font/Handwriting/devonshire/Devonshire-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/devonshire/Devonshire-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Diplomata",
			"id": "Diplomata",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/diplomata/Diplomata-Regular.ttf",
					"woff": "font/Decorative/diplomata/Diplomata-Regular.woff",
					"woff2": "font/Decorative/diplomata/Diplomata-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/diplomata/Diplomata-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Doppio One",
			"id": "Doppio One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/doppioone/Doppio-One-Regular.ttf",
					"woff": "font/Simple & Modern/doppioone/Doppio-One-Regular.woff",
					"woff2": "font/Simple & Modern/doppioone/Doppio-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/doppioone/DoppioOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Droid Sans",
			"id": "Droid Sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/droidsans/Droid-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/droidsans/Droid-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/droidsans/Droid-Sans-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/droidsans/Droid-Sans-700.ttf",
					"woff": "font/Simple & Modern/droidsans/Droid-Sans-700.woff",
					"woff2": "font/Simple & Modern/droidsans/Droid-Sans-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/droidsans/DroidSans.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/droidsans/DroidSans-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Eater",
			"id": "Eater",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/eater/Eater-Regular.ttf",
					"woff": "font/Scary & Dark/eater/Eater-Regular.woff",
					"woff2": "font/Scary & Dark/eater/Eater-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/eater/Eater-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Elsie",
			"id": "Elsie",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/elsie/Elsie-Regular.ttf",
					"woff": "font/Traditional (Serif)/elsie/Elsie-Regular.woff",
					"woff2": "font/Traditional (Serif)/elsie/Elsie-Regular.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/elsie/Elsie-900.ttf",
					"woff": "font/Traditional (Serif)/elsie/Elsie-900.woff",
					"woff2": "font/Traditional (Serif)/elsie/Elsie-900.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/elsie/Elsie-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Traditional (Serif)/elsie/Elsie-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 900"]
		}, {
			"key": "Emblema One",
			"id": "Emblema One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/emblemaone/Emblema-One-Regular.ttf",
					"woff": "font/Decorative/emblemaone/Emblema-One-Regular.woff",
					"woff2": "font/Decorative/emblemaone/Emblema-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/emblemaone/EmblemaOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Emilys Candy",
			"id": "Emilys Candy",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/emilyscandy/Emilys-Candy-Regular.ttf",
					"woff": "font/Traditional (Serif)/emilyscandy/Emilys-Candy-Regular.woff",
					"woff2": "font/Traditional (Serif)/emilyscandy/Emilys-Candy-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/emilyscandy/EmilysCandy-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Erica One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Fun & Funky/erica-one/erica-one-regular.woff2",
					"woff": "font/Fun & Funky/erica-one/erica-one-regular.woff",
					"ttf": "font/Fun & Funky/erica-one/erica-one-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/erica-one/erica-one-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"author": [
				[{
					"name": "Miguel Hernandez",
					"bio": "<p>Miguel is a self-taught typeface designer based in Santiago de Chile. After designing commercial and experimental fonts for many years, he is now at work on the Latin American modernist type foundry <a href=\"http://www.alphabets.cl/\" target=\"_blank\">Alphabets By Chileans</a> (A.B.C.).</p>\n",
					"imageUrl": "https://lh3.googleusercontent.com/6vOmbGE_UZPiap-ha2LcNseZONBT6298ZPv7u93QfKRwzCBDagZlaH7RpcM"
				}]
			],
			"title": "Erica One",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Ewert",
			"id": "Ewert",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/ewert/Ewert-Regular.ttf",
					"woff": "font/Fun & Funky/ewert/Ewert-Regular.woff",
					"woff2": "font/Fun & Funky/ewert/Ewert-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/ewert/Ewert-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Eb-Garamond",
			"id": "Eb-Garamond",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/eb-garamond/eb-garamond-v9.woff",
					"woff2": "font/Designer Picks/eb-garamond/eb-garamond-v9.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/eb-garamond/EB+Garamond.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Fascinate",
			"id": "Fascinate",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/fascinate/Fascinate-Regular.ttf",
					"woff": "font/Fun & Funky/fascinate/Fascinate-Regular.woff",
					"woff2": "font/Fun & Funky/fascinate/Fascinate-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/fascinate/Fascinate-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Fascinate Inline",
			"id": "Fascinate Inline",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/fascinateinline/Fascinate-Inline-Regular.ttf",
					"woff": "font/Decorative/fascinateinline/Fascinate-Inline-Regular.woff",
					"woff2": "font/Decorative/fascinateinline/Fascinate-Inline-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/fascinateinline/FascinateInline-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Faster One",
			"id": "Faster One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/fasterone/Faster-One-Regular.ttf",
					"woff": "font/Fun & Funky/fasterone/Faster-One-Regular.woff",
					"woff2": "font/Fun & Funky/fasterone/Faster-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/fasterone/FasterOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Felipa",
			"id": "Felipa",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/felipa/Felipa-Regular.ttf",
					"woff": "font/Scary & Dark/felipa/Felipa-Regular.woff",
					"woff2": "font/Scary & Dark/felipa/Felipa-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/felipa/Felipa-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Flavors",
			"id": "Flavors",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/flavors/Flavors-Regular.ttf",
					"woff": "font/Fun & Funky/flavors/Flavors-Regular.woff",
					"woff2": "font/Fun & Funky/flavors/Flavors-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/flavors/Flavors-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Fontdiner Swanky",
			"id": "Fontdiner Swanky",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/fontdinerswanky/Fontdiner-Swanky-Regular.ttf",
					"woff": "font/Fun & Funky/fontdinerswanky/Fontdiner-Swanky-Regular.woff",
					"woff2": "font/Fun & Funky/fontdinerswanky/Fontdiner-Swanky-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/fontdinerswanky/FontdinerSwanky.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Freckle Face",
			"id": "Freckle Face",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/freckleface/Freckle-Face-Regular.ttf",
					"woff": "font/Fun & Funky/freckleface/Freckle-Face-Regular.woff",
					"woff2": "font/Fun & Funky/freckleface/Freckle-Face-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/freckleface/FreckleFace-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Fredoka One",
			"id": "Fredoka One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/fredokaone/Fredoka-One-Regular.ttf",
					"woff": "font/Simple & Modern/fredokaone/Fredoka-One-Regular.woff",
					"woff2": "font/Simple & Modern/fredokaone/Fredoka-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/fredokaone/FredokaOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Frijole",
			"id": "Frijole",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/frijole/Frijole-Regular.ttf",
					"woff": "font/Scary & Dark/frijole/Frijole-Regular.woff",
					"woff2": "font/Scary & Dark/frijole/Frijole-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/frijole/Frijole-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Fugaz One",
			"id": "Fugaz One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/fugazone/Fugaz-One-Regular.ttf",
					"woff": "font/Decorative/fugazone/Fugaz-One-Regular.woff",
					"woff2": "font/Decorative/fugazone/Fugaz-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/fugazone/FugazOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Fjalla-One",
			"id": "Fjalla-One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/fjalla-one/fjalla-one-v5.woff",
					"woff2": "font/Designer Picks/fjalla-one/fjalla-one-v5.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/fjalla-one/Fjalla+One.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Fira-Sans",
			"id": "Fira-Sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/fira-sans/fira-sans-v8.woff",
					"woff2": "font/Designer Picks/fira-sans/fira-sans-v8.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/fira-sans/Fira+Sans.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Geo",
			"id": "Geo",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/geo/Geo-Regular.ttf",
					"woff": "font/Pixel & Monospace/geo/Geo-Regular.woff",
					"woff2": "font/Pixel & Monospace/geo/Geo-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/geo/Geo-Italic.ttf",
					"woff": "font/Pixel & Monospace/geo/Geo-Italic.woff",
					"woff2": "font/Pixel & Monospace/geo/Geo-Italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/geo/Geo-Oblique.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Geostar",
			"id": "Geostar",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/geostar/Geostar-Regular.ttf",
					"woff": "font/Fun & Funky/geostar/Geostar-Regular.woff",
					"woff2": "font/Fun & Funky/geostar/Geostar-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/geostar/Geostar-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Geostar Fill",
			"id": "Geostar Fill",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/geostarfill/Geostar-Fill-Regular.ttf",
					"woff": "font/Fun & Funky/geostarfill/Geostar-Fill-Regular.woff",
					"woff2": "font/Fun & Funky/geostarfill/Geostar-Fill-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/geostarfill/GeostarFill-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Gilda Display",
			"id": "Gilda Display",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/gildadisplay/Gilda-Display-Regular.ttf",
					"woff": "font/Traditional (Serif)/gildadisplay/Gilda-Display-Regular.woff",
					"woff2": "font/Traditional (Serif)/gildadisplay/Gilda-Display-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/gildadisplay/GildaDisplay-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Gloria Hallelujah",
			"id": "Gloria Hallelujah",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/gloriahallelujah/Gloria-Hallelujah-Regular.ttf",
					"woff": "font/Handwriting/gloriahallelujah/Gloria-Hallelujah-Regular.woff",
					"woff2": "font/Handwriting/gloriahallelujah/Gloria-Hallelujah-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/gloriahallelujah/GloriaHallelujah.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Graduate",
			"id": "Graduate",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/graduate/Graduate-Regular.ttf",
					"woff": "font/Simple & Modern/graduate/Graduate-Regular.woff",
					"woff2": "font/Simple & Modern/graduate/Graduate-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/graduate/Graduate-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Grand Hotel",
			"id": "Grand Hotel",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/grandhotel/Grand-Hotel-Regular.ttf",
					"woff": "font/Fancy & Cursive/grandhotel/Grand-Hotel-Regular.woff",
					"woff2": "font/Fancy & Cursive/grandhotel/Grand-Hotel-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/grandhotel/GrandHotel-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Great Vibes",
			"id": "Great Vibes",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/greatvibes/Great-Vibes-Regular.ttf",
					"woff": "font/Fancy & Cursive/greatvibes/Great-Vibes-Regular.woff",
					"woff2": "font/Fancy & Cursive/greatvibes/Great-Vibes-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/greatvibes/GreatVibes-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Griffy",
			"id": "Griffy",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/griffy/Griffy-Regular.ttf",
					"woff": "font/Fancy & Cursive/griffy/Griffy-Regular.woff",
					"woff2": "font/Fancy & Cursive/griffy/Griffy-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/griffy/Griffy-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Gruppo",
			"id": "Gruppo",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/gruppo/Gruppo-Regular.ttf",
					"woff": "font/Simple & Modern/gruppo/Gruppo-Regular.woff",
					"woff2": "font/Simple & Modern/gruppo/Gruppo-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/gruppo/Gruppo-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Hammersmith One",
			"id": "Hammersmith One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/hammersmithone/Hammersmith-One-Regular.ttf",
					"woff": "font/Traditional (Serif)/hammersmithone/Hammersmith-One-Regular.woff",
					"woff2": "font/Traditional (Serif)/hammersmithone/Hammersmith-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/hammersmithone/HammersmithOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Hanalei",
			"id": "Hanalei",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/hanalei/Hanalei-Regular.ttf",
					"woff": "font/Fun & Funky/hanalei/Hanalei-Regular.woff",
					"woff2": "font/Fun & Funky/hanalei/Hanalei-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/hanalei/Hanalei-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Hanalei Fill",
			"id": "Hanalei Fill",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/hanaleifill/Hanalei-Fill-Regular.ttf",
					"woff": "font/Fun & Funky/hanaleifill/Hanalei-Fill-Regular.woff",
					"woff2": "font/Fun & Funky/hanaleifill/Hanalei-Fill-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/hanaleifill/HanaleiFill-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Handlee",
			"id": "Handlee",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/handlee/Handlee-Regular.ttf",
					"woff": "font/Handwriting/handlee/Handlee-Regular.woff",
					"woff2": "font/Handwriting/handlee/Handlee-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/handlee/Handlee-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Happy Monkey",
			"id": "Happy Monkey",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/happymonkey/Happy-Monkey-Regular.ttf",
					"woff": "font/Handwriting/happymonkey/Happy-Monkey-Regular.woff",
					"woff2": "font/Handwriting/happymonkey/Happy-Monkey-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/happymonkey/HappyMonkey-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Henny Penny",
			"id": "Henny Penny",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/hennypenny/Henny-Penny-Regular.ttf",
					"woff": "font/Fun & Funky/hennypenny/Henny-Penny-Regular.woff",
					"woff2": "font/Fun & Funky/hennypenny/Henny-Penny-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/hennypenny/HennyPenny-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Henny Penny",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Decorative/henny-penny/henny-penny-regular.woff2",
					"woff": "font/Decorative/henny-penny/henny-penny-regular.woff",
					"ttf": "font/Decorative/henny-penny/henny-penny-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/henny-penny/henny-penny-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"author": [
				[{
					"name": "Brownfox",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/vtbzg4w38WfPNubTVNTN0KMbSc_YTtQMH0bnEhSPKm6knhtNKjw93dvG1A"
				}]
			],
			"title": "Henny Penny",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "IM Fell Double Pica",
			"id": "IM Fell Double Pica",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Regular.ttf",
					"woff": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Regular.woff",
					"woff2": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Italic.ttf",
					"woff": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Italic.woff",
					"woff2": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-Italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/imfelldoublepica/IMFeDPrm28P.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "IM Fell Double Pica SC",
			"id": "IM Fell Double Pica SC",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-SC-Regular.ttf",
					"woff": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-SC-Regular.woff",
					"woff2": "font/Scary & Dark/imfelldoublepica/IM-Fell-Double-Pica-SC-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/imfelldoublepica/IMFeDPit28P.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Iceberg",
			"id": "Iceberg",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/iceberg/Iceberg-Regular.ttf",
					"woff": "font/Scary & Dark/iceberg/Iceberg-Regular.woff",
					"woff2": "font/Scary & Dark/iceberg/Iceberg-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/iceberg/Iceberg-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Imprima",
			"id": "Imprima",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/imprima/Imprima-Regular.ttf",
					"woff": "font/Simple & Modern/imprima/Imprima-Regular.woff",
					"woff2": "font/Simple & Modern/imprima/Imprima-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/imprima/Imprima-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Inder",
			"id": "Inder",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/inder/Inder-Regular.ttf",
					"woff": "font/Simple & Modern/inder/Inder-Regular.woff",
					"woff2": "font/Simple & Modern/inder/Inder-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/inder/Inder-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Irish Grover",
			"id": "Irish Grover",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/irishgrover/Irish-Grover-Regular.ttf",
					"woff": "font/Fun & Funky/irishgrover/Irish-Grover-Regular.woff",
					"woff2": "font/Fun & Funky/irishgrover/Irish-Grover-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/irishgrover/IrishGrover.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Istok Web",
			"id": "Istok Web",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/istokweb/Istok-Web-Regular.ttf",
					"woff": "font/Simple & Modern/istokweb/Istok-Web-Regular.woff",
					"woff2": "font/Simple & Modern/istokweb/Istok-Web-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/istokweb/Istok-Web-Italic.ttf",
					"woff": "font/Simple & Modern/istokweb/Istok-Web-Italic.woff",
					"woff2": "font/Simple & Modern/istokweb/Istok-Web-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/istokweb/Istok-Web-700.ttf",
					"woff": "font/Simple & Modern/istokweb/Istok-Web-700.woff",
					"woff2": "font/Simple & Modern/istokweb/Istok-Web-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/istokweb/Istok-Web-700italic.ttf",
					"woff": "font/Simple & Modern/istokweb/Istok-Web-700italic.woff",
					"woff2": "font/Simple & Modern/istokweb/Istok-Web-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/istokweb/IstokWeb-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/istokweb/IstokWeb-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/istokweb/IstokWeb-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/istokweb/IstokWeb-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Jacques Francois Shadow",
			"id": "Jacques Francois Shadow",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/jacquesfrancoisshadow/Jacques-Francois-Shadow-Regular.ttf",
					"woff": "font/Traditional (Serif)/jacquesfrancoisshadow/Jacques-Francois-Shadow-Regular.woff",
					"woff2": "font/Traditional (Serif)/jacquesfrancoisshadow/Jacques-Francois-Shadow-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/jacquesfrancoisshadow/JacquesFrancoisShadow-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Jolly Lodger",
			"id": "Jolly Lodger",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/jollylodger/Jolly-Lodger-Regular.ttf",
					"woff": "font/Scary & Dark/jollylodger/Jolly-Lodger-Regular.woff",
					"woff2": "font/Scary & Dark/jollylodger/Jolly-Lodger-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/jollylodger/JollyLodger-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Josefin Sans",
			"id": "Josefin Sans",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-100.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-100.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-100italic.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-100italic.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-100italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-300.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-300.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-300italic.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-300italic.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-Italic.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-Italic.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-Italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-600.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-600.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-600italic.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-600italic.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-700.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-700.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/josefinsans/Josefin-Sans-700italic.ttf",
					"woff": "font/Simple & Modern/josefinsans/Josefin-Sans-700italic.woff",
					"woff2": "font/Simple & Modern/josefinsans/Josefin-Sans-700italic.woff2"
				}
			},
			"preview": {
				"italic 100": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-ThinItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 100": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-Thin.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-Italic.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/josefinsans/JosefinSans-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["italic 100", "normal 100", "italic 400", "normal 400", "italic 300", "normal 300", "italic 700", "normal 700"]
		}, {
			"key": "Julius Sans One",
			"id": "Julius Sans One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/juliussansone/Julius-Sans-One-Regular.ttf",
					"woff": "font/Simple & Modern/juliussansone/Julius-Sans-One-Regular.woff",
					"woff2": "font/Simple & Modern/juliussansone/Julius-Sans-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/juliussansone/JuliusSansOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Just Me Again Down Here",
			"id": "Just Me Again Down Here",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/justmeagaindownhere/Just-Me-Again-Down-Here-Regular.ttf",
					"woff": "font/Handwriting/justmeagaindownhere/Just-Me-Again-Down-Here-Regular.woff",
					"woff2": "font/Handwriting/justmeagaindownhere/Just-Me-Again-Down-Here-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/justmeagaindownhere/JustMeAgainDownHere.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Karla",
			"id": "Karla",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/karla/Karla-Regular.ttf",
					"woff": "font/Simple & Modern/karla/Karla-Regular.woff",
					"woff2": "font/Simple & Modern/karla/Karla-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/karla/Karla-Italic.ttf",
					"woff": "font/Simple & Modern/karla/Karla-Italic.woff",
					"woff2": "font/Simple & Modern/karla/Karla-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/karla/Karla-700.ttf",
					"woff": "font/Simple & Modern/karla/Karla-700.woff",
					"woff2": "font/Simple & Modern/karla/Karla-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/karla/Karla-700italic.ttf",
					"woff": "font/Simple & Modern/karla/Karla-700italic.woff",
					"woff2": "font/Simple & Modern/karla/Karla-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/karla/Karla-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/karla/Karla-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/karla/Karla-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/karla/Karla-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		},{
			"key": "Kaushan-Script",
			"id": "Kaushan-Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/kaushan-script/kaushan-script-v6.woff",
					"woff2": "font/Designer Picks/kaushan-script/kaushan-script-v6.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/kaushan-script/Kaushan+Script.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Kavoon",
			"id": "Kavoon",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/kavoon/Kavoon-Regular.ttf",
					"woff": "font/Decorative/kavoon/Kavoon-Regular.woff",
					"woff2": "font/Decorative/kavoon/Kavoon-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/kavoon/Kavoon-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Kite One",
			"id": "Kite One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/kiteone/Kite-One-Regular.ttf",
					"woff": "font/Simple & Modern/kiteone/Kite-One-Regular.woff",
					"woff2": "font/Simple & Modern/kiteone/Kite-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/kiteone/KiteOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Knewave",
			"id": "Knewave",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/knewave/Knewave-Regular.ttf",
					"woff": "font/Fun & Funky/knewave/Knewave-Regular.woff",
					"woff2": "font/Fun & Funky/knewave/Knewave-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/knewave/Knewave-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Kotta One",
			"id": "Kotta One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/kottaone/Kotta-One-Regular.ttf",
					"woff": "font/Traditional (Serif)/kottaone/Kotta-One-Regular.woff",
					"woff2": "font/Traditional (Serif)/kottaone/Kotta-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/kottaone/KottaOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Krona One",
			"id": "Krona One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/kronaone/Krona-One-Regular.ttf",
					"woff": "font/Simple & Modern/kronaone/Krona-One-Regular.woff",
					"woff2": "font/Simple & Modern/kronaone/Krona-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/kronaone/KronaOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lancelot",
			"id": "Lancelot",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/lancelot/Lancelot-Regular.ttf",
					"woff": "font/Traditional (Serif)/lancelot/Lancelot-Regular.woff",
					"woff2": "font/Traditional (Serif)/lancelot/Lancelot-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/lancelot/Lancelot-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lato",
			"id": "Lato",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/lato/Lato-100.ttf",
					"woff": "font/Simple & Modern/lato/Lato-100.woff",
					"woff2": "font/Simple & Modern/lato/Lato-100.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/lato/Lato-300.ttf",
					"woff": "font/Simple & Modern/lato/Lato-300.woff",
					"woff2": "font/Simple & Modern/lato/Lato-300.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/lato/Lato-100italic.ttf",
					"woff": "font/Simple & Modern/lato/Lato-100italic.woff",
					"woff2": "font/Simple & Modern/lato/Lato-100italic.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/lato/Lato-300italic.ttf",
					"woff": "font/Simple & Modern/lato/Lato-300italic.woff",
					"woff2": "font/Simple & Modern/lato/Lato-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/lato/Lato-Regular.ttf",
					"woff": "font/Simple & Modern/lato/Lato-Regular.woff",
					"woff2": "font/Simple & Modern/lato/Lato-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/lato/Lato-Italic.ttf",
					"woff": "font/Simple & Modern/lato/Lato-Italic.woff",
					"woff2": "font/Simple & Modern/lato/Lato-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/lato/Lato-700.ttf",
					"woff": "font/Simple & Modern/lato/Lato-700.woff",
					"woff2": "font/Simple & Modern/lato/Lato-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/lato/Lato-700italic.ttf",
					"woff": "font/Simple & Modern/lato/Lato-700italic.woff",
					"woff2": "font/Simple & Modern/lato/Lato-700italic.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/lato/Lato-900italic.ttf",
					"woff": "font/Simple & Modern/lato/Lato-900italic.woff",
					"woff2": "font/Simple & Modern/lato/Lato-900italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/lato/Lato-900.ttf",
					"woff": "font/Simple & Modern/lato/Lato-900.woff",
					"woff2": "font/Simple & Modern/lato/Lato-900.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/lato/Lato-Hairline.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/lato/Lato-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/lato/Lato-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/lato/Lato-HairlineItalic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/lato/Lato-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/lato/Lato-Bold.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Simple & Modern/lato/Lato-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Simple & Modern/lato/Lato-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 300", "normal 300", "italic 400", "italic 700", "normal 700", "italic 900", "normal 900"]
		}, {
			"key": "League Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Fancy & Cursive/league-script/league-script-regular.woff2",
					"woff": "font/Fancy & Cursive/league-script/league-script-regular.woff",
					"ttf": "font/Fancy & Cursive/league-script/league-script-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/league-script/league-script-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"author": [
				[{
					"name": "Haley Fiege",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/w55r9ONh_c07l05ZUYgi_vsMhwOWb6OblLfL019Zd-646FinVcbAQvqFhO8"
				}]
			],
			"title": "League Script",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lekton",
			"id": "Lekton",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/lekton/Lekton-Regular.ttf",
					"woff": "font/Pixel & Monospace/lekton/Lekton-Regular.woff",
					"woff2": "font/Pixel & Monospace/lekton/Lekton-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/lekton/Lekton-Italic.ttf",
					"woff": "font/Pixel & Monospace/lekton/Lekton-Italic.woff",
					"woff2": "font/Pixel & Monospace/lekton/Lekton-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/lekton/Lekton-700.ttf",
					"woff": "font/Pixel & Monospace/lekton/Lekton-700.woff",
					"woff2": "font/Pixel & Monospace/lekton/Lekton-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/lekton/Lekton-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Pixel & Monospace/lekton/Lekton-Italic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Pixel & Monospace/lekton/Lekton-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "normal 700"]
		}, {
			"key": "Lemon",
			"id": "Lemon",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/lemon/Lemon-Regular.ttf",
					"woff": "font/Handwriting/lemon/Lemon-Regular.woff",
					"woff2": "font/Handwriting/lemon/Lemon-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/lemon/Lemon-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Life Savers",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Traditional (Serif)/life-savers/life-savers-regular.woff2",
					"woff": "font/Traditional (Serif)/life-savers/life-savers-regular.woff",
					"ttf": "font/Traditional (Serif)/life-savers/life-savers-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/life-savers/life-savers-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"author": [
				[{
					"name": "Impallari Type",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/iSUD5nw1B1oGvNQX5f-Gn_OOGyHywp4EF-T1CJBLRTyxqlwpKPi70m7gA5b-",
					"filename": ["LifeSavers-Regular.ttf", "LifeSavers-Bold.ttf"],
					"email": "www.ikern.com|mail@iginomarini.com",
					"copyright": "Copyright (c) 2012, Pablo Impallari (www.impallari.com|impallari@gmail.com), Copyright (c) 2012, Rodrigo Fuenzalida (www.rfuenzalida.com|hello@rfuenzalida.com),  Copyright (c) 2012, Igino Marini. (www.ikern.com|mail@iginomarini.com), with Reserved Font Name Life Savers."
				}]
			],
			"title": "Life Savers",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lily Script One",
			"id": "Lily Script One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/lilyscriptone/Lily-Script-One-Regular.ttf",
					"woff": "font/Fancy & Cursive/lilyscriptone/Lily-Script-One-Regular.woff",
					"woff2": "font/Fancy & Cursive/lilyscriptone/Lily-Script-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/lilyscriptone/LilyScriptOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Limelight",
			"id": "Limelight",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/limelight/Limelight-Regular.ttf",
					"woff": "font/Decorative/limelight/Limelight-Regular.woff",
					"woff2": "font/Decorative/limelight/Limelight-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/limelight/Limelight-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lobster",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Decorative/lobster/lobster-regular.woff2",
					"woff": "font/Decorative/lobster/lobster-regular.woff",
					"ttf": "font/Decorative/lobster/lobster-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/lobster/lobster-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"author": [
				[{
					"name": "Impallari Type",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/iSUD5nw1B1oGvNQX5f-Gn_OOGyHywp4EF-T1CJBLRTyxqlwpKPi70m7gA5b-",
					"filename": ["Lobster-Regular.ttf"],
					"email": "https://github.com/impallari/The-Lobster-Font",
					"copyright": "Copyright 2010 The Lobster Project Authors (https://github.com/impallari/The-Lobster-Font), with Reserved Font Name \"Lobster\"."
				}, {
					"name": "Cyreal",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/N9vClPBi3N3ZpVqoSIdXSTd79hPwDcYCY2YxbF0hwNHDEpcqTxxdNEpDaw",
					"filename": ["Lobster-Regular.ttf"]
				}]
			],
			"title": "Lobster",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lobster Two",
			"id": "Lobster Two",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Regular.ttf",
					"woff": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Regular.woff",
					"woff2": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Italic.ttf",
					"woff": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Italic.woff",
					"woff2": "font/Fancy & Cursive/lobstertwo/Lobster-Two-Italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700italic.ttf",
					"woff": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700italic.woff",
					"woff2": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700.ttf",
					"woff": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700.woff",
					"woff2": "font/Fancy & Cursive/lobstertwo/Lobster-Two-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/lobstertwo/LobsterTwo-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Fancy & Cursive/lobstertwo/LobsterTwo-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Fancy & Cursive/lobstertwo/LobsterTwo-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fancy & Cursive/lobstertwo/LobsterTwo-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Londrina Outline",
			"id": "Londrina Outline",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/londrinaoutline/Londrina-Outline-Regular.ttf",
					"woff": "font/Decorative/londrinaoutline/Londrina-Outline-Regular.woff",
					"woff2": "font/Decorative/londrinaoutline/Londrina-Outline-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/londrinaoutline/LondrinaOutline-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Londrina Shadow",
			"id": "Londrina Shadow",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/3D/londrinashadow/Londrina-Shadow-Regular.ttf",
					"woff": "font/3D/londrinashadow/Londrina-Shadow-Regular.woff",
					"woff2": "font/3D/londrinashadow/Londrina-Shadow-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/3D/londrinashadow/LondrinaShadow-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["3D"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Lora",
			"id": "Lora",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/lora/Lora-Regular.ttf",
					"woff": "font/Traditional (Serif)/lora/Lora-Regular.woff",
					"woff2": "font/Traditional (Serif)/lora/Lora-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/lora/Lora-700.ttf",
					"woff": "font/Traditional (Serif)/lora/Lora-700.woff",
					"woff2": "font/Traditional (Serif)/lora/Lora-700.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/lora/Lora-Italic.ttf",
					"woff": "font/Traditional (Serif)/lora/Lora-Italic.woff",
					"woff2": "font/Traditional (Serif)/lora/Lora-Italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/lora/Lora-700italic.ttf",
					"woff": "font/Traditional (Serif)/lora/Lora-700italic.woff",
					"woff2": "font/Traditional (Serif)/lora/Lora-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/lora/Lora-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/lora/Lora-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/lora/Lora-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/lora/Lora-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Luckiest Guy",
			"id": "Luckiest Guy",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/luckiestguy/Luckiest-Guy-Regular.ttf",
					"woff": "font/Fun & Funky/luckiestguy/Luckiest-Guy-Regular.woff",
					"woff2": "font/Fun & Funky/luckiestguy/Luckiest-Guy-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/luckiestguy/LuckiestGuy.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Lilita-One",
			"id": "Lilita-One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/lilita-one/lilita-one-v5.woff",
					"woff2": "font/Designer Picks/lilita-one/lilita-one-v5.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/lilita-one/Lilita+One.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Macondo Swash Caps",
			"id": "Macondo Swash Caps",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/macondoswashcaps/Macondo-Swash-Caps-Regular.ttf",
					"woff": "font/Decorative/macondoswashcaps/Macondo-Swash-Caps-Regular.woff",
					"woff2": "font/Decorative/macondoswashcaps/Macondo-Swash-Caps-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/macondoswashcaps/MacondoSwashCaps-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Magra",
			"id": "Magra",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/magra/Magra-Regular.ttf",
					"woff": "font/Simple & Modern/magra/Magra-Regular.woff",
					"woff2": "font/Simple & Modern/magra/Magra-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/magra/Magra-700.ttf",
					"woff": "font/Simple & Modern/magra/Magra-700.woff",
					"woff2": "font/Simple & Modern/magra/Magra-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/magra/Magra-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/magra/Magra-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Marcellus",
			"id": "Marcellus",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/marcellus/Marcellus-Regular.ttf",
					"woff": "font/Traditional (Serif)/marcellus/Marcellus-Regular.woff",
					"woff2": "font/Traditional (Serif)/marcellus/Marcellus-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/marcellus/Marcellus-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Marcellus SC",
			"id": "Marcellus SC",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/marcellussc/Marcellus-SC-Regular.ttf",
					"woff": "font/Traditional (Serif)/marcellussc/Marcellus-SC-Regular.woff",
					"woff2": "font/Traditional (Serif)/marcellussc/Marcellus-SC-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/marcellussc/MarcellusSC-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Margarine",
			"id": "Margarine",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/margarine/Margarine-Regular.ttf",
					"woff": "font/Handwriting/margarine/Margarine-Regular.woff",
					"woff2": "font/Handwriting/margarine/Margarine-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/margarine/Margarine-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Marko One",
			"id": "Marko One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/markoone/Marko-One-Regular.ttf",
					"woff": "font/Traditional (Serif)/markoone/Marko-One-Regular.woff",
					"woff2": "font/Traditional (Serif)/markoone/Marko-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/markoone/MarkoOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Maven Pro",
			"id": "Maven Pro",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/mavenpro/Maven-Pro-Regular.ttf",
					"woff": "font/Simple & Modern/mavenpro/Maven-Pro-Regular.woff",
					"woff2": "font/Simple & Modern/mavenpro/Maven-Pro-Regular.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/mavenpro/Maven-Pro-500.ttf",
					"woff": "font/Simple & Modern/mavenpro/Maven-Pro-500.woff",
					"woff2": "font/Simple & Modern/mavenpro/Maven-Pro-500.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/mavenpro/Maven-Pro-700.ttf",
					"woff": "font/Simple & Modern/mavenpro/Maven-Pro-700.woff",
					"woff2": "font/Simple & Modern/mavenpro/Maven-Pro-700.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/mavenpro/Maven-Pro-900.ttf",
					"woff": "font/Simple & Modern/mavenpro/Maven-Pro-900.woff",
					"woff2": "font/Simple & Modern/mavenpro/Maven-Pro-900.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/mavenpro/MavenPro-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/mavenpro/MavenPro-Medium.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/mavenpro/MavenPro-Bold.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Simple & Modern/mavenpro/MavenPro-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 500", "normal 700", "normal 900"]
		}, {
			"key": "McLaren",
			"id": "McLaren",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/mclaren/McLaren-Regular.ttf",
					"woff": "font/Handwriting/mclaren/McLaren-Regular.woff",
					"woff2": "font/Handwriting/mclaren/McLaren-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/mclaren/McLaren-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Meddon",
			"id": "Meddon",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/meddon/Meddon-Regular.ttf",
					"woff": "font/Fancy & Cursive/meddon/Meddon-Regular.woff",
					"woff2": "font/Fancy & Cursive/meddon/Meddon-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/meddon/Meddon.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Megrim",
			"id": "Megrim",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/megrim/Megrim-Regular.ttf",
					"woff": "font/Decorative/megrim/Megrim-Regular.woff",
					"woff2": "font/Decorative/megrim/Megrim-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/megrim/Megrim.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Merienda",
			"id": "Merienda",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/merienda/Merienda-Regular.ttf",
					"woff": "font/Traditional (Serif)/merienda/Merienda-Regular.woff",
					"woff2": "font/Traditional (Serif)/merienda/Merienda-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/merienda/Merienda-700.ttf",
					"woff": "font/Traditional (Serif)/merienda/Merienda-700.woff",
					"woff2": "font/Traditional (Serif)/merienda/Merienda-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/merienda/Merienda-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/merienda/Merienda-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Merriweather Sans",
			"id": "Merriweather Sans",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300italic.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300italic.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Italic.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Italic.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700italic.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700italic.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800italic.ttf",
					"woff": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800italic.woff",
					"woff2": "font/Simple & Modern/merriweathersans/Merriweather-Sans-800italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/merriweathersans/MerriweatherSans-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/merriweathersans/MerriweatherSans-Light.svg",
					"width": 150,
					"height": 18
				},
				"normal 800": {
					"url": "thumb/font/Simple & Modern/merriweathersans/MerriweatherSans-ExtraBold.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/merriweathersans/MerriweatherSans-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 300", "normal 800", "normal 700"]
		}, {
			"key": "Metal Mania",
			"id": "Metal Mania",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/metalmania/Metal-Mania-Regular.ttf",
					"woff": "font/Scary & Dark/metalmania/Metal-Mania-Regular.woff",
					"woff2": "font/Scary & Dark/metalmania/Metal-Mania-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/metalmania/MetalMania-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Metamorphous",
			"id": "Metamorphous",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/metamorphous/Metamorphous-Regular.ttf",
					"woff": "font/Scary & Dark/metamorphous/Metamorphous-Regular.woff",
					"woff2": "font/Scary & Dark/metamorphous/Metamorphous-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/metamorphous/Metamorphous-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Metrophobic",
			"id": "Metrophobic",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/metrophobic/Metrophobic-Regular.ttf",
					"woff": "font/Simple & Modern/metrophobic/Metrophobic-Regular.woff",
					"woff2": "font/Simple & Modern/metrophobic/Metrophobic-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/metrophobic/Metrophobic.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Michroma",
			"id": "Michroma",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/michroma/Michroma-Regular.ttf",
					"woff": "font/Simple & Modern/michroma/Michroma-Regular.woff",
					"woff2": "font/Simple & Modern/michroma/Michroma-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/michroma/Michroma.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Miltonian",
			"id": "Miltonian",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/miltonian/Miltonian-Regular.ttf",
					"woff": "font/Handwriting/miltonian/Miltonian-Regular.woff",
					"woff2": "font/Handwriting/miltonian/Miltonian-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/miltonian/Miltonian-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Miniver",
			"id": "Miniver",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/miniver/Miniver-Regular.ttf",
					"woff": "font/Fancy & Cursive/miniver/Miniver-Regular.woff",
					"woff2": "font/Fancy & Cursive/miniver/Miniver-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/miniver/Miniver-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Monofett",
			"id": "Monofett",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/monofett/Monofett-Regular.ttf",
					"woff": "font/Pixel & Monospace/monofett/Monofett-Regular.woff",
					"woff2": "font/Pixel & Monospace/monofett/Monofett-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/monofett/Monofett.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Monoton",
			"id": "Monoton",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Decorative/monoton/Monoton-Regular.ttf",
					"woff": "font/Decorative/monoton/Monoton-Regular.woff",
					"woff2": "font/Decorative/monoton/Monoton-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Decorative/monoton/Monoton-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Decorative"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Montserrat",
			"id": "Montserrat",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-100.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-100.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-100.woff2"
				},
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-200.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-200.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-200.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-100italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-100italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-100italic.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-200italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-200italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-300.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-300.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-300.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-Regular.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-Regular.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-Regular.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-300italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-300italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-300italic.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-Italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-Italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-500.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-500.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-500italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-500italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-600.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-600.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-600italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-600italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-700.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-700.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-700italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-700italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-800.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-800.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-800italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-800italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-900.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-900.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserrat/Montserrat-900italic.ttf",
					"woff": "font/Simple & Modern/montserrat/Montserrat-900italic.woff",
					"woff2": "font/Simple & Modern/montserrat/Montserrat-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/montserrat/Montserrat-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/montserrat/Montserrat-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Montserrat Alternates",
			"id": "Montserrat Alternates",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-100italic.woff2"
				},
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Regular.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Regular.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Regular.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-Italic.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900italic.ttf",
					"woff": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900italic.woff",
					"woff2": "font/Simple & Modern/montserratalternates/Montserrat-Alternates-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/montserratalternates/MontserratAlternates-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/montserratalternates/MontserratAlternates-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Montserrat Subrayada",
			"id": "Montserrat Subrayada",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-Regular.ttf",
					"woff": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-Regular.woff",
					"woff2": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-700.ttf",
					"woff": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-700.woff",
					"woff2": "font/Simple & Modern/montserratsubrayada/Montserrat-Subrayada-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/montserratsubrayada/MontserratSubrayada-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/montserratsubrayada/MontserratSubrayada-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Mountains of Christmas",
			"id": "Mountains of Christmas",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-Regular.ttf",
					"woff": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-Regular.woff",
					"woff2": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-700.ttf",
					"woff": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-700.woff",
					"woff2": "font/Fun & Funky/mountainsofchristmas/Mountains-of-Christmas-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/mountainsofchristmas/MountainsofChristmas-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fun & Funky/mountainsofchristmas/MountainsofChristmas-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Muli",
			"id": "Muli",
			"type": ["font"],
			"value": {
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-200.ttf",
					"woff": "font/Simple & Modern/muli/Muli-200.woff",
					"woff2": "font/Simple & Modern/muli/Muli-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-200italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-200italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-300.ttf",
					"woff": "font/Simple & Modern/muli/Muli-300.woff",
					"woff2": "font/Simple & Modern/muli/Muli-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-300italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-300italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-Regular.ttf",
					"woff": "font/Simple & Modern/muli/Muli-Regular.woff",
					"woff2": "font/Simple & Modern/muli/Muli-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-Italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-Italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-Italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-600.ttf",
					"woff": "font/Simple & Modern/muli/Muli-600.woff",
					"woff2": "font/Simple & Modern/muli/Muli-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-600italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-600italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-700.ttf",
					"woff": "font/Simple & Modern/muli/Muli-700.woff",
					"woff2": "font/Simple & Modern/muli/Muli-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-700italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-700italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-800.ttf",
					"woff": "font/Simple & Modern/muli/Muli-800.woff",
					"woff2": "font/Simple & Modern/muli/Muli-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-800italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-800italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/muli/Muli-900.ttf",
					"woff": "font/Simple & Modern/muli/Muli-900.woff",
					"woff2": "font/Simple & Modern/muli/Muli-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/muli/Muli-900italic.ttf",
					"woff": "font/Simple & Modern/muli/Muli-900italic.woff",
					"woff2": "font/Simple & Modern/muli/Muli-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/muli/Muli-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/muli/Muli-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/muli/Muli-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/muli/Muli-Italic.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 300", "normal 300", "italic 400"]
		}, {
			"key": "Mystery Quest",
			"id": "Mystery Quest",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/mysteryquest/Mystery-Quest-Regular.ttf",
					"woff": "font/Fancy & Cursive/mysteryquest/Mystery-Quest-Regular.woff",
					"woff2": "font/Fancy & Cursive/mysteryquest/Mystery-Quest-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/mysteryquest/MysteryQuest-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "New Rocker",
			"id": "New Rocker",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/newrocker/New-Rocker-Regular.ttf",
					"woff": "font/Scary & Dark/newrocker/New-Rocker-Regular.woff",
					"woff2": "font/Scary & Dark/newrocker/New-Rocker-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/newrocker/NewRocker-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "News Cycle",
			"id": "News Cycle",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/newscycle/News-Cycle-Regular.ttf",
					"woff": "font/Simple & Modern/newscycle/News-Cycle-Regular.woff",
					"woff2": "font/Simple & Modern/newscycle/News-Cycle-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/newscycle/News-Cycle-700.ttf",
					"woff": "font/Simple & Modern/newscycle/News-Cycle-700.woff",
					"woff2": "font/Simple & Modern/newscycle/News-Cycle-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/newscycle/NewsCycle-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/newscycle/NewsCycle-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Nosifer",
			"id": "Nosifer",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/nosifer/Nosifer-Regular.ttf",
					"woff": "font/Scary & Dark/nosifer/Nosifer-Regular.woff",
					"woff2": "font/Scary & Dark/nosifer/Nosifer-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/nosifer/Nosifer-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Nova Cut",
			"id": "Nova Cut",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/novacut/Nova-Cut-Regular.ttf",
					"woff": "font/Traditional (Serif)/novacut/Nova-Cut-Regular.woff",
					"woff2": "font/Traditional (Serif)/novacut/Nova-Cut-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/novacut/NovaCut.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Nova Mono",
			"id": "Nova Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/novamono/Nova-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/novamono/Nova-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/novamono/Nova-Mono-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/novamono/NovaMono.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Neuton",
			"id": "Neuton",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/neuton/neuton-v10.woff",
					"woff2": "font/Designer Picks/neuton/neuton-v10.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/neuton/Neuton.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Offside",
			"id": "Offside",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/offside/Offside-Regular.ttf",
					"woff": "font/Simple & Modern/offside/Offside-Regular.woff",
					"woff2": "font/Simple & Modern/offside/Offside-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/offside/Offside-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Nunito",
			"id": "Nunito",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/nunito/nunito-v9.woff",
					"woff2": "font/Designer Picks/nunito/nunito-v9.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/nunito/Nunito.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Oleo Script",
			"id": "Oleo Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/oleoscript/Oleo-Script-Regular.ttf",
					"woff": "font/Fancy & Cursive/oleoscript/Oleo-Script-Regular.woff",
					"woff2": "font/Fancy & Cursive/oleoscript/Oleo-Script-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/oleoscript/Oleo-Script-700.ttf",
					"woff": "font/Fancy & Cursive/oleoscript/Oleo-Script-700.woff",
					"woff2": "font/Fancy & Cursive/oleoscript/Oleo-Script-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/oleoscript/OleoScript-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fancy & Cursive/oleoscript/OleoScript-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Open Sans Regular",
			"id": "Open Sans Regular",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-300.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-300.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-300italic.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-300italic.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-Italic.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-Italic.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-Italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-600.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-600.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-600italic.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-600italic.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-700.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-700.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-700italic.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-700italic.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-800.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-800.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-800italic.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-800italic.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-800italic.woff2"
				}
			},
			"preview": {
				"italic 600": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-SemiboldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 600": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Semibold.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 800": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-ExtraBoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 800": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-ExtraBold.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["italic 600", "normal 600", "normal 400", "italic 300", "normal 300", "italic 400", "italic 800", "normal 800", "italic 700", "normal 700"]
		}, {
			"key": "Open Sans Light",
			"id": "Open Sans Light",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": 300,
					"style": "normal",
					"ttf": "font/Simple & Modern/opensans/Open-Sans-300.ttf",
					"woff": "font/Simple & Modern/opensans/Open-Sans-300.woff",
					"woff2": "font/Simple & Modern/opensans/Open-Sans-300.woff2"
				}
			},
			"preview": {
				"normal 300": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-Light.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 300",
			"variants": ["normal 300"]
		}, {
			"key": "Open Sans Extra Bold",
			"id": "Open Sans Extra Bold",
			"type": ["font"],
			"value": {
				"normal 800": {
					"style": "normal",
					"weight": 800,
					"woff2": "font/Simple & Modern/opensans/OpenSans-ExtraBold.woff2",
					"woff": "font/Simple & Modern/opensans/OpenSans-ExtraBold.woff",
					"ttf": "font/Simple & Modern/opensans/OpenSans-ExtraBold.ttf"
				}
			},
			"preview": {
				"normal 800": {
					"url": "thumb/font/Simple & Modern/opensans/OpenSans-ExtraBold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 800",
			"variants": ["normal 800"]
		}, {
			"key": "Old Standard TT",
			"id": "Old Standard TT",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/old-standard-tt/old-standard-tt-v10.woff",
					"woff2": "font/Designer Picks/old-standard-tt/old-standard-tt-v10.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/old-standard-tt/old-standard-tt-v10.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Oswald",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/oswald/Oswald-Regular.woff2",
					"woff": "font/Simple & Modern/oswald/Oswald-Regular.woff",
					"ttf": "font/Simple & Modern/oswald/Oswald-Regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/oswald/Oswald-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"author": [
				[{
					"name": "Vernon Adams",
					"bio": "<p>Vernon practiced typeface design from 2007 to 2014. A lifelong artist, during this time he eagerly explored designing type for the cloud-based era. His work spans all genres, from lively script faces to workhorse text families and operating system UI. Vernon graduated with an MA in Typeface Design from the University of Reading and lives in California. His designs are mostly published as open source Google Fonts and his favorite projects include Oxygen Mono, Monda, and Bowlby One. Follow his story at <a href=\"http://sansoxygen.com/\" target=\"_blank\">www.sansoxygen.com</a>.</p>\n<p><a href=\"https://github.com/vernnobile\" target=\"_blank\">Github</a> | <a href=\"https://www.instagram.com/explore/tags/sansoxygen/\" target=\"_blank\">Instagram</a></p>\n",
					"imageUrl": "https://lh3.googleusercontent.com/PPz3vY4bIHZg-3LvvXP3F4WbtesyOBbfZZNIQ270-76RjLzj6QiJm54A9_Xg",
					"filename": ["Oswald-ExtraLight.ttf", "Oswald-Light.ttf", "Oswald-Regular.ttf", "Oswald-Medium.ttf", "Oswald-SemiBold.ttf", "Oswald-Bold.ttf"],
					"email": "https://github.com/googlefonts/OswaldFont",
					"copyright": "Copyright 2016 The Oswald Project Authors (https://github.com/googlefonts/OswaldFont)"
				}, {
					"name": "Kalapi Gajjar",
					"bio": null,
					"imageUrl": null,
					"filename": ["Oswald-ExtraLight.ttf", "Oswald-Light.ttf", "Oswald-Regular.ttf", "Oswald-Medium.ttf", "Oswald-SemiBold.ttf", "Oswald-Bold.ttf"]
				}, {
					"name": "Cyreal",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/N9vClPBi3N3ZpVqoSIdXSTd79hPwDcYCY2YxbF0hwNHDEpcqTxxdNEpDaw",
					"filename": ["Oswald-ExtraLight.ttf", "Oswald-Light.ttf", "Oswald-Regular.ttf", "Oswald-Medium.ttf", "Oswald-SemiBold.ttf", "Oswald-Bold.ttf"]
				}]
			],
			"title": "Oswald",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Overlock SC",
			"id": "Overlock SC",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/overlocksc/Overlock-SC-Regular.ttf",
					"woff": "font/Simple & Modern/overlocksc/Overlock-SC-Regular.woff",
					"woff2": "font/Simple & Modern/overlocksc/Overlock-SC-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/overlocksc/OverlockSC-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Oxygen Mono",
			"id": "Oxygen Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/oxygenmono/Oxygen-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/oxygenmono/Oxygen-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/oxygenmono/Oxygen-Mono-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/oxygenmono/OxygenMono-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "PT Mono",
			"id": "PT Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/ptmono/PT-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/ptmono/PT-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/ptmono/PT-Mono-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/ptmono/PTM55FT.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "PT Sans",
			"id": "PT Sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/ptsanscaption/PT-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/ptsanscaption/PT-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/ptsanscaption/PT-Sans-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/ptsanscaption/PT-Sans-Italic.ttf",
					"woff": "font/Simple & Modern/ptsanscaption/PT-Sans-Italic.woff",
					"woff2": "font/Simple & Modern/ptsanscaption/PT-Sans-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/ptsanscaption/PT-Sans-700.ttf",
					"woff": "font/Simple & Modern/ptsanscaption/PT-Sans-700.woff",
					"woff2": "font/Simple & Modern/ptsanscaption/PT-Sans-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/ptsanscaption/PT-Sans-700italic.ttf",
					"woff": "font/Simple & Modern/ptsanscaption/PT-Sans-700italic.woff",
					"woff2": "font/Simple & Modern/ptsanscaption/PT-Sans-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/ptsanscaption/PT_Sans-Caption-Web-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Pacifico",
			"id": "Pacifico",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/pacifico/Pacifico-Regular.ttf",
					"woff": "font/Fancy & Cursive/pacifico/Pacifico-Regular.woff",
					"woff2": "font/Fancy & Cursive/pacifico/Pacifico-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/pacifico/Pacifico.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Passion One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/passion-one/passion-one-regular.woff2",
					"woff": "font/Simple & Modern/passion-one/passion-one-regular.woff",
					"ttf": "font/Simple & Modern/passion-one/passion-one-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/passion-one/passion-one-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"author": [
				[{
					"name": "Fontstage",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/9arhRIjSVE2EyQ6AFRLZesTBCtdSFcVxvb4NbyrIWA9tC8FF4haoqTAb3O8",
					"filename": ["PassionOne-Regular.ttf", "PassionOne-Bold.ttf", "PassionOne-Black.ttf"],
					"email": "info@fontstage.com",
					"copyright": "Copyright (c) 2011 Fontstage (info@fontstage.com), with Reserved Font Name \"Passion\""
				}]
			],
			"title": "Passion One",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Petit Formal Script",
			"id": "Petit Formal Script",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/petitformalscript/Petit-Formal-Script-Regular.ttf",
					"woff": "font/Fancy & Cursive/petitformalscript/Petit-Formal-Script-Regular.woff",
					"woff2": "font/Fancy & Cursive/petitformalscript/Petit-Formal-Script-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/petitformalscript/PetitFormalScript-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Philosopher",
			"id": "Philosopher",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/philosopher/Philosopher-Regular.ttf",
					"woff": "font/Traditional (Serif)/philosopher/Philosopher-Regular.woff",
					"woff2": "font/Traditional (Serif)/philosopher/Philosopher-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/philosopher/Philosopher-Italic.ttf",
					"woff": "font/Traditional (Serif)/philosopher/Philosopher-Italic.woff",
					"woff2": "font/Traditional (Serif)/philosopher/Philosopher-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/philosopher/Philosopher-700.ttf",
					"woff": "font/Traditional (Serif)/philosopher/Philosopher-700.woff",
					"woff2": "font/Traditional (Serif)/philosopher/Philosopher-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/philosopher/Philosopher-700italic.ttf",
					"woff": "font/Traditional (Serif)/philosopher/Philosopher-700italic.woff",
					"woff2": "font/Traditional (Serif)/philosopher/Philosopher-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/philosopher/Philosopher-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/philosopher/Philosopher-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/philosopher/Philosopher-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/philosopher/Philosopher-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Pirata One",
			"id": "Pirata One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/pirataone/Pirata-One-Regular.ttf",
					"woff": "font/Scary & Dark/pirataone/Pirata-One-Regular.woff",
					"woff2": "font/Scary & Dark/pirataone/Pirata-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/pirataone/PirataOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Playball",
			"id": "Playball",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/playball/Playball-Regular.ttf",
					"woff": "font/Fancy & Cursive/playball/Playball-Regular.woff",
					"woff2": "font/Fancy & Cursive/playball/Playball-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/playball/Playball-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Playfair Display",
			"id": "Playfair Display",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Regular.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Regular.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-Italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplay/Playfair-Display-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-Bold.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplay/PlayfairDisplay-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700", "italic 900", "normal 900"]
		}, {
			"key": "Playfair Display SC",
			"id": "Playfair Display SC",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Regular.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Regular.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900italic.ttf",
					"woff": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900italic.woff",
					"woff2": "font/Traditional (Serif)/playfairdisplaysc/Playfair-Display-SC-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-Bold.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Traditional (Serif)/playfairdisplaysc/PlayfairDisplaySC-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700", "italic 900", "normal 900"]
		}, {
			"key": "Poiret One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/poiret-one/poiret-one-regular.woff2",
					"woff": "font/Simple & Modern/poiret-one/poiret-one-regular.woff",
					"ttf": "font/Simple & Modern/poiret-one/poiret-one-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/poiret-one/poiret-one-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"author": [
				[{
					"name": "Denis Masharov",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/SImQYhM00F8TQDsGl6NZ78dP7I6C2opoPwREtb9CJkTOktsR_A-1jzO8i7o",
					"filename": ["PoiretOne-Regular.ttf"],
					"email": "denis.masharov@gmail.com",
					"copyright": "Copyright (c) 2011, Denis Masharov (denis.masharov@gmail.com)"
				}]
			],
			"title": "Poiret One",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Poly",
			"id": "Poly",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/poly/Poly-Regular.ttf",
					"woff": "font/Traditional (Serif)/poly/Poly-Regular.woff",
					"woff2": "font/Traditional (Serif)/poly/Poly-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/poly/Poly-Italic.ttf",
					"woff": "font/Traditional (Serif)/poly/Poly-Italic.woff",
					"woff2": "font/Traditional (Serif)/poly/Poly-Italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/poly/Poly-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/poly/Poly-Italic.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400"]
		}, {
			"key": "Poppins",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/poppins/poppins-regular.woff2",
					"woff": "font/Simple & Modern/poppins/poppins-regular.woff",
					"ttf": "font/Simple & Modern/poppins/poppins-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/poppins/poppins-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"author": [
				[{
					"name": "Indian Type Foundry",
					"bio": "<p><a href=\"http://www.indiantypefoundry.com/\" target=\"_blank\">Indian Type Foundry</a> (ITF) creates retail and custom multilingual fonts for print and digital media. Started in 2009 by Satya Rajpurohit and Peter Bil’ak, ITF works with designers from across the world. ITF fonts are used by clients ranging from tech giants like Apple, Google, and Sony, to various international brands.</p>\n<p><a href=\"http://github.com/itfoundry\" target=\"_blank\">Github</a> | <a href=\"https://twitter.com/itfoundry\" target=\"_blank\">Twitter</a></p>\n",
					"imageUrl": "https://lh3.googleusercontent.com/HSnoeY6FyQyd6EFmIpms55KH5EjGRqCzLAKillb2DqEYsW1wjy0IEyCmrK2r",
					"filename": ["Poppins-Thin.ttf", "Poppins-ThinItalic.ttf", "Poppins-ExtraLight.ttf", "Poppins-ExtraLightItalic.ttf", "Poppins-Light.ttf", "Poppins-LightItalic.ttf", "Poppins-Regular.ttf", "Poppins-Italic.ttf", "Poppins-Medium.ttf", "Poppins-MediumItalic.ttf", "Poppins-SemiBold.ttf", "Poppins-SemiBoldItalic.ttf", "Poppins-Bold.ttf", "Poppins-BoldItalic.ttf", "Poppins-ExtraBold.ttf", "Poppins-ExtraBoldItalic.ttf", "Poppins-Black.ttf", "Poppins-BlackItalic.ttf"],
					"email": "info@indiantypefoundry.com",
					"copyright": "Copyright 2014-2017 Indian Type Foundry (info@indiantypefoundry.com)"
				}]
			],
			"title": "Poppins",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Princess Sofia",
			"id": "Princess Sofia",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff2": "font/Fancy & Cursive/princess-sofia/princess-sofia-regular.woff2",
					"woff": "font/Fancy & Cursive/princess-sofia/princess-sofia-regular.woff",
					"ttf": "font/Fancy & Cursive/princess-sofia/princess-sofia-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/princess-sofia/princess-sofia-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Proxima Nova Bold",
			"id": "Proxima Nova Bold",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/proxima-nova/Proxima Nova Bold.woff2",
					"woff": "font/Simple & Modern/proxima-nova/Proxima Nova Bold.woff",
					"ttf": "font/Simple & Modern/proxima-nova/Proxima Nova Bold.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/proxima-nova/Proxima Nova Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Proxima Nova Bold Italic",
			"id": "Proxima Nova Bold Italic",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/proxima-nova/Proxima Nova Bold Italic.woff2",
					"woff": "font/Simple & Modern/proxima-nova/Proxima Nova Bold Italic.woff",
					"ttf": "font/Simple & Modern/proxima-nova/Proxima Nova Bold Italic.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/proxima-nova/Proxima Nova Bold Italic.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Proxima Nova Regular",
			"id": "Proxima Nova Regular",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/proxima-nova/Proxima Nova Regular.woff2",
					"woff": "font/Simple & Modern/proxima-nova/Proxima Nova Regular.woff",
					"ttf": "font/Simple & Modern/proxima-nova/Proxima Nova Regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/proxima-nova/Proxima Nova Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Proxima Nova Regular Italic",
			"id": "Proxima Nova Regular Italic",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/proxima-nova/Proxima Nova Regular Italic.woff2",
					"woff": "font/Simple & Modern/proxima-nova/Proxima Nova Regular Italic.woff",
					"ttf": "font/Simple & Modern/proxima-nova/Proxima Nova Regular Italic.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/proxima-nova/Proxima Nova Regular Italic.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Quattrocento Sans",
			"id": "Quattrocento Sans",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Regular.ttf",
					"woff": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Regular.woff",
					"woff2": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Italic.ttf",
					"woff": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Italic.woff",
					"woff2": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700.ttf",
					"woff": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700.woff",
					"woff2": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700italic.ttf",
					"woff": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700italic.woff",
					"woff2": "font/Simple & Modern/quattrocentosans/Quattrocento-Sans-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/quattrocentosans/QuattrocentoSans-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/quattrocentosans/QuattrocentoSans-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/quattrocentosans/QuattrocentoSans-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/quattrocentosans/QuattrocentoSans-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Questrial",
			"id": "Questrial",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/questrial/Questrial-Regular.ttf",
					"woff": "font/Simple & Modern/questrial/Questrial-Regular.woff",
					"woff2": "font/Simple & Modern/questrial/Questrial-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/questrial/Questrial-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Quicksand",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/quicksand/quicksand-regular.woff2",
					"woff": "font/Simple & Modern/quicksand/quicksand-regular.woff",
					"ttf": "font/Simple & Modern/quicksand/quicksand-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/quicksand/quicksand-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"author": [
				[{
					"name": "Andrew Paglinawan",
					"bio": null,
					"imageUrl": null,
					"filename": ["Quicksand-Light.ttf", "Quicksand-Regular.ttf", "Quicksand-Medium.ttf", "Quicksand-Bold.ttf"],
					"email": "https://github.com/andrew-paglinawan/QuicksandFamily",
					"copyright": "Copyright 2011 The Quicksand Project Authors (https://github.com/andrew-paglinawan/QuicksandFamily), with Reserved Font Name Quicksand."
				}]
			],
			"title": "Quicksand",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Raleway",
			"id": "Raleway",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-100.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-100italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100italic.woff2"
				},
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-200.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-200italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-300.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-300italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-Regular.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Regular.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-Italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-500.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-500italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-600.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-600italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-700.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-700italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-800.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-800italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-900.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-900italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900italic.woff2"
				}
			},
			"preview": {
				"normal 100": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Thin.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Medium.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Light.svg",
					"width": 150,
					"height": 18
				},
				"normal 200": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraLight.svg",
					"width": 150,
					"height": 18
				},
				"normal 800": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraBold.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 100", "normal 400", "normal 500", "normal 300", "normal 200", "normal 800", "normal 700"]
		}, {
			"key": "Raleway Dots",
			"id": "Raleway Dots",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/ralewaydots/Raleway-Dots-Regular.ttf",
					"woff": "font/Simple & Modern/ralewaydots/Raleway-Dots-Regular.woff",
					"woff2": "font/Simple & Modern/ralewaydots/Raleway-Dots-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/ralewaydots/RalewayDots-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Raleway Thin",
			"id": "Raleway Thin",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-100.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-100italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100italic.woff2"
				},
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-200.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-200italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-300.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-300italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-Regular.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Regular.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-Italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-500.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-500italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-600.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-600italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-700.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-700italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-800.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-800italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-900.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-900italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900italic.woff2"
				}
			},
			"preview": {
				"normal 100": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Thin.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Medium.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Light.svg",
					"width": 150,
					"height": 18
				},
				"normal 200": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraLight.svg",
					"width": 150,
					"height": 18
				},
				"normal 800": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraBold.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 100",
			"variants": ["normal 100", "normal 400", "normal 500", "normal 300", "normal 200", "normal 800", "normal 700"]
		}, {
			"key": "Raleway Thin",
			"id": "Raleway Thin",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-100.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-100italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-100italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-100italic.woff2"
				},
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-200.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-200italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-200italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-300.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-300italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-300italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-Regular.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Regular.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-Italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-Italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-500.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-500italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-500italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-500italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-600.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-600italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-600italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-700.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-700italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-700italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-700italic.woff2"
				},
				"normal 800": {
					"weight": "800",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-800.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800.woff2"
				},
				"italic 800": {
					"weight": "800",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-800italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-800italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-800italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/raleway/Raleway-900.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/raleway/Raleway-900italic.ttf",
					"woff": "font/Simple & Modern/raleway/Raleway-900italic.woff",
					"woff2": "font/Simple & Modern/raleway/Raleway-900italic.woff2"
				}
			},
			"preview": {
				"normal 100": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Thin.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Medium.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Light.svg",
					"width": 150,
					"height": 18
				},
				"normal 200": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraLight.svg",
					"width": 150,
					"height": 18
				},
				"normal 800": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-ExtraBold.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/raleway/Raleway-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 700",
			"variants": ["normal 100", "normal 400", "normal 500", "normal 300", "normal 200", "normal 800", "normal 700"]
		}, {
			"key": "Ranchers",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Fun & Funky/ranchers/ranchers-regular.woff2",
					"woff": "font/Fun & Funky/ranchers/ranchers-regular.woff",
					"ttf": "font/Fun & Funky/ranchers/ranchers-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/ranchers/ranchers-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"author": [
				[{
					"name": "Impallari Type",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/iSUD5nw1B1oGvNQX5f-Gn_OOGyHywp4EF-T1CJBLRTyxqlwpKPi70m7gA5b-",
					"filename": ["Ranchers-Regular.ttf"],
					"email": "gbrenda1987@gmail.com",
					"copyright": "Copyright (c) 2012, Pablo Impallari (www.impallari.com|impallari@gmail.com), Brenda Gallo. (gbrenda1987@gmail.com), with Reserved Font Name Ranchers."
				}]
			],
			"title": "Ranchers",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Ribeye",
			"id": "Ribeye",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/ribeye/Ribeye-Regular.ttf",
					"woff": "font/Fun & Funky/ribeye/Ribeye-Regular.woff",
					"woff2": "font/Fun & Funky/ribeye/Ribeye-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/ribeye/Ribeye-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Roboto",
			"id": "Roboto",
			"type": ["font"],
			"value": {
				"normal 100": {
					"weight": "100",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-100.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-100.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-100.woff2"
				},
				"italic 100": {
					"weight": "100",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-100italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-100italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-100italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-300.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-300.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-300italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-300italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-Regular.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-Regular.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-Italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-Italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-Italic.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-500.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-500.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-500italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-500italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-500italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-700.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-700.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-700italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-700italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/roboto/Roboto-900.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-900.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/roboto/Roboto-900italic.ttf",
					"woff": "font/Simple & Modern/roboto/Roboto-900italic.woff",
					"woff2": "font/Simple & Modern/roboto/Roboto-900italic.woff2"
				}
			},
			"preview": {
				"italic 100": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-ThinItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 100": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Thin.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 500": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-MediumItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Medium.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Bold.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Simple & Modern/roboto/Roboto-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern", "Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["italic 100", "normal 100", "normal 400", "italic 500", "normal 500", "italic 300", "normal 300", "italic 400", "italic 700", "normal 700", "italic 900", "normal 900"]
		}, {
			"key": "Rock Salt",
			"id": "Rock Salt",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/rocksalt/Rock-Salt-Regular.ttf",
					"woff": "font/Handwriting/rocksalt/Rock-Salt-Regular.woff",
					"woff2": "font/Handwriting/rocksalt/Rock-Salt-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/rocksalt/RockSalt.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Rufina",
			"id": "Rufina",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/rufina/Rufina-Regular.ttf",
					"woff": "font/Traditional (Serif)/rufina/Rufina-Regular.woff",
					"woff2": "font/Traditional (Serif)/rufina/Rufina-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/rufina/Rufina-700.ttf",
					"woff": "font/Traditional (Serif)/rufina/Rufina-700.woff",
					"woff2": "font/Traditional (Serif)/rufina/Rufina-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/rufina/Rufina-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/rufina/Rufina-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Rum Raisin",
			"id": "Rum Raisin",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/rumraisin/Rum-Raisin-Regular.ttf",
					"woff": "font/Fun & Funky/rumraisin/Rum-Raisin-Regular.woff",
					"woff2": "font/Fun & Funky/rumraisin/Rum-Raisin-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/rumraisin/RumRaisin-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Ruslan Display",
			"id": "Ruslan Display",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/ruslandisplay/Ruslan-Display-Regular.ttf",
					"woff": "font/Fun & Funky/ruslandisplay/Ruslan-Display-Regular.woff",
					"woff2": "font/Fun & Funky/ruslandisplay/Ruslan-Display-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/ruslandisplay/RuslanDisplay.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Rye",
			"id": "Rye",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/rye/Rye-Regular.ttf",
					"woff": "font/Traditional (Serif)/rye/Rye-Regular.woff",
					"woff2": "font/Traditional (Serif)/rye/Rye-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/rye/Rye-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Rubik",
			"id": "Rubik",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/rubik/rubik-v7.woff",
					"woff2": "font/Designer Picks/rubik/rubik-v7.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/rubik/Rubik.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Righteous",
			"id": "Righteous",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/righteous/righteous-v6.woff",
					"woff2": "font/Designer Picks/righteous/righteous-v6.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/righteous/Righteous.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Roboto-Slab",
			"id": "Roboto-Slab",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/roboto-slab/roboto-slab-v7.woff",
					"woff2": "font/Designer Picks/roboto-slab/roboto-slab-v7.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/roboto-slab/Roboto+Slab.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Sacramento",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Fancy & Cursive/sacramento/sacramento-regular.woff2",
					"woff": "font/Fancy & Cursive/sacramento/sacramento-regular.woff",
					"ttf": "font/Fancy & Cursive/sacramento/sacramento-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/sacramento/sacramento-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"author": [
				[{
					"name": "Astigmatic",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/dB25CHTk-wGoefHzSnQTtfWay6TwYiT3-uR11vgwkQamwVF6O-Ni61z8fSk",
					"filename": ["Sacramento-Regular.ttf"],
					"email": "astigma@astigmatic.com",
					"copyright": "Copyright (c) 2012 by Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name 'Sacramento'"
				}]
			],
			"title": "Sacramento",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Sansita One",
			"id": "Sansita One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Simple & Modern/sansitaone/SansitaOne.woff2",
					"woff": "font/Simple & Modern/sansitaone/SansitaOne.woff",
					"ttf": "font/Simple & Modern/sansitaone/SansitaOne.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/sansitaone/SansitaOne.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Sarina",
			"id": "Sarina",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/sarina/Sarina-Regular.ttf",
					"woff": "font/Handwriting/sarina/Sarina-Regular.woff",
					"woff2": "font/Handwriting/sarina/Sarina-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/sarina/Sarina-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Scada",
			"id": "Scada",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/scada/Scada-Regular.ttf",
					"woff": "font/Simple & Modern/scada/Scada-Regular.woff",
					"woff2": "font/Simple & Modern/scada/Scada-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/scada/Scada-Italic.ttf",
					"woff": "font/Simple & Modern/scada/Scada-Italic.woff",
					"woff2": "font/Simple & Modern/scada/Scada-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/scada/Scada-700.ttf",
					"woff": "font/Simple & Modern/scada/Scada-700.woff",
					"woff2": "font/Simple & Modern/scada/Scada-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/scada/Scada-700italic.ttf",
					"woff": "font/Simple & Modern/scada/Scada-700italic.woff",
					"woff2": "font/Simple & Modern/scada/Scada-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/scada/Scada-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/scada/Scada-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/scada/Scada-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/scada/Scada-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Sevillana",
			"id": "Sevillana",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/sevillana/Sevillana-Regular.ttf",
					"woff": "font/Fancy & Cursive/sevillana/Sevillana-Regular.woff",
					"woff2": "font/Fancy & Cursive/sevillana/Sevillana-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/sevillana/Sevillana-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Share Tech Mono",
			"id": "Share Tech Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/sharetechmono/src/Share-Tech-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/sharetechmono/src/Share-Tech-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/sharetechmono/src/Share-Tech-Mono-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/sharetechmono/src/ShareTechMono-Regularo.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Shojumaru",
			"id": "Shojumaru",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/shojumaru/Shojumaru-Regular.ttf",
					"woff": "font/Fun & Funky/shojumaru/Shojumaru-Regular.woff",
					"woff2": "font/Fun & Funky/shojumaru/Shojumaru-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/shojumaru/Shojumaru-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Short Stack",
			"id": "Short Stack",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/shortstack/Short-Stack-Regular.ttf",
					"woff": "font/Fun & Funky/shortstack/Short-Stack-Regular.woff",
					"woff2": "font/Fun & Funky/shortstack/Short-Stack-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/shortstack/ShortStack-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Sintony",
			"id": "Sintony",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/sintony/Sintony-Regular.ttf",
					"woff": "font/Simple & Modern/sintony/Sintony-Regular.woff",
					"woff2": "font/Simple & Modern/sintony/Sintony-Regular.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/sintony/Sintony-700.ttf",
					"woff": "font/Simple & Modern/sintony/Sintony-700.woff",
					"woff2": "font/Simple & Modern/sintony/Sintony-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/sintony/Sintony-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/sintony/Sintony-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 700"]
		}, {
			"key": "Six Caps",
			"id": "Six Caps",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/sixcaps/Six-Caps-Regular.ttf",
					"woff": "font/Scary & Dark/sixcaps/Six-Caps-Regular.woff",
					"woff2": "font/Scary & Dark/sixcaps/Six-Caps-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/sixcaps/SixCaps.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Slackey",
			"id": "Slackey",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/slackey/Slackey-Regular.ttf",
					"woff": "font/Fun & Funky/slackey/Slackey-Regular.woff",
					"woff2": "font/Fun & Funky/slackey/Slackey-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/slackey/Slackey.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Smokum",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Traditional (Serif)/smokum/smokum-regular.woff2",
					"woff": "font/Traditional (Serif)/smokum/smokum-regular.woff",
					"ttf": "font/Traditional (Serif)/smokum/smokum-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/smokum/smokum-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"author": [
				[{
					"name": "Astigmatic",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/dB25CHTk-wGoefHzSnQTtfWay6TwYiT3-uR11vgwkQamwVF6O-Ni61z8fSk"
				}]
			],
			"title": "Smokum",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Snowburst One",
			"id": "Snowburst One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fun & Funky/snowburstone/Snowburst-One-Regular.ttf",
					"woff": "font/Fun & Funky/snowburstone/Snowburst-One-Regular.woff",
					"woff2": "font/Fun & Funky/snowburstone/Snowburst-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fun & Funky/snowburstone/SnowburstOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fun & Funky"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Source Sans Pro",
			"id": "Source Sans Pro",
			"type": ["font"],
			"value": {
				"normal 200": {
					"weight": "200",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200.woff2"
				},
				"italic 200": {
					"weight": "200",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-200italic.woff2"
				},
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-300italic.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Regular.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Regular.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-Italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-600italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900italic.ttf",
					"woff": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900italic.woff",
					"woff2": "font/Simple & Modern/sourcesanspro/Source-Sans-Pro-900italic.woff2"
				}
			},
			"preview": {
				"italic 600": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-SemiboldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 600": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Semibold.svg",
					"width": 150,
					"height": 18
				},
				"normal 400": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 200": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-ExtraLightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 200": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-ExtraLight.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Bold.svg",
					"width": 150,
					"height": 18
				},
				"italic 900": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-BlackItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 900": {
					"url": "thumb/font/Simple & Modern/sourcesanspro/SourceSansPro-Black.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["italic 600", "normal 600", "normal 400", "italic 300", "normal 300", "italic 400", "italic 200", "normal 200", "italic 700", "normal 700", "italic 900", "normal 900"]
		}, {
			"key": "Spinnaker",
			"id": "Spinnaker",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/spinnaker/Spinnaker-Regular.ttf",
					"woff": "font/Simple & Modern/spinnaker/Spinnaker-Regular.woff",
					"woff2": "font/Simple & Modern/spinnaker/Spinnaker-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/spinnaker/Spinnaker-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Spirax",
			"id": "Spirax",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/spirax/Spirax-Regular.ttf",
					"woff": "font/Fancy & Cursive/spirax/Spirax-Regular.woff",
					"woff2": "font/Fancy & Cursive/spirax/Spirax-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/spirax/Spirax-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Stint Ultra Expanded",
			"id": "Stint Ultra Expanded",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/stintultraexpanded/Stint-Ultra-Expanded-Regular.ttf",
					"woff": "font/Traditional (Serif)/stintultraexpanded/Stint-Ultra-Expanded-Regular.woff",
					"woff2": "font/Traditional (Serif)/stintultraexpanded/Stint-Ultra-Expanded-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/stintultraexpanded/StintUltraExpanded-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Stoke",
			"id": "Stoke",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/stoke/Stoke-300.ttf",
					"woff": "font/Traditional (Serif)/stoke/Stoke-300.woff",
					"woff2": "font/Traditional (Serif)/stoke/Stoke-300.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/stoke/Stoke-Regular.ttf",
					"woff": "font/Traditional (Serif)/stoke/Stoke-Regular.woff",
					"woff2": "font/Traditional (Serif)/stoke/Stoke-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/stoke/Stoke-Regular.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Traditional (Serif)/stoke/Stoke-Light.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "normal 300"]
		}, {
			"key": "Strait",
			"id": "Strait",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/strait/Strait-Regular.ttf",
					"woff": "font/Simple & Modern/strait/Strait-Regular.woff",
					"woff2": "font/Simple & Modern/strait/Strait-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/strait/Strait-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Supermercado One",
			"id": "Supermercado One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/supermercadoone/Supermercado-One-Regular.ttf",
					"woff": "font/Simple & Modern/supermercadoone/Supermercado-One-Regular.woff",
					"woff2": "font/Simple & Modern/supermercadoone/Supermercado-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/supermercadoone/SupermercadoOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Spectral",
			"id": "Spectral",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/spectral/spectral-v5.woff",
					"woff2": "font/Designer Picks/spectral/spectral-v5.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/spectral/Spectral.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		},{
			"key": "Tauri",
			"id": "Tauri",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/tauri/Tauri-Regular.ttf",
					"woff": "font/Simple & Modern/tauri/Tauri-Regular.woff",
					"woff2": "font/Simple & Modern/tauri/Tauri-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/tauri/Tauri-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Telex",
			"id": "Telex",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/telex/Telex-Regular.ttf",
					"woff": "font/Simple & Modern/telex/Telex-Regular.woff",
					"woff2": "font/Simple & Modern/telex/Telex-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/telex/Telex-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "The Girl Next Door",
			"id": "The Girl Next Door",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/thegirlnextdoor/The-Girl-Next-Door-Regular.ttf",
					"woff": "font/Handwriting/thegirlnextdoor/The-Girl-Next-Door-Regular.woff",
					"woff2": "font/Handwriting/thegirlnextdoor/The-Girl-Next-Door-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/thegirlnextdoor/TheGirlNextDoor.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Trade Winds",
			"id": "Trade Winds",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/tradewinds/Trade-Winds-Regular.ttf",
					"woff": "font/Scary & Dark/tradewinds/Trade-Winds-Regular.woff",
					"woff2": "font/Scary & Dark/tradewinds/Trade-Winds-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/tradewinds/TradeWinds-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Trochut",
			"id": "Trochut",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/trochut/Trochut-Regular.ttf",
					"woff": "font/Fancy & Cursive/trochut/Trochut-Regular.woff",
					"woff2": "font/Fancy & Cursive/trochut/Trochut-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Fancy & Cursive/trochut/Trochut-Italic.ttf",
					"woff": "font/Fancy & Cursive/trochut/Trochut-Italic.woff",
					"woff2": "font/Fancy & Cursive/trochut/Trochut-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/trochut/Trochut-700.ttf",
					"woff": "font/Fancy & Cursive/trochut/Trochut-700.woff",
					"woff2": "font/Fancy & Cursive/trochut/Trochut-700.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/trochut/Trochut-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Fancy & Cursive/trochut/Trochut-Italic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Fancy & Cursive/trochut/Trochut-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "normal 700"]
		}, {
			"key": "Ubuntu",
			"id": "Ubuntu",
			"type": ["font"],
			"value": {
				"normal 300": {
					"weight": "300",
					"style": "normal",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-300.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-300.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-300.woff2"
				},
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-Regular.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-Regular.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-Regular.woff2"
				},
				"italic 300": {
					"weight": "300",
					"style": "italic",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-300italic.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-300italic.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-300italic.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-Italic.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-Italic.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-700.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-700.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-700.woff2"
				},
				"normal 500": {
					"weight": "500",
					"style": "normal",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-500.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-500.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-500.woff2"
				},
				"italic 500": {
					"weight": "500",
					"style": "italic",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-500italic.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-500italic.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-500italic.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Simple & Modern/ubuntu/Ubuntu-700italic.ttf",
					"woff": "font/Simple & Modern/ubuntu/Ubuntu-700italic.woff",
					"woff2": "font/Simple & Modern/ubuntu/Ubuntu-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 500": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-MediumItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 500": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-Medium.svg",
					"width": 150,
					"height": 18
				},
				"italic 300": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-LightItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 300": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-Light.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Simple & Modern/ubuntu/Ubuntu-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 500", "normal 500", "italic 300", "normal 300", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Ubuntu Mono",
			"id": "Ubuntu Mono",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Regular.ttf",
					"woff": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Regular.woff",
					"woff2": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Italic.ttf",
					"woff": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Italic.woff",
					"woff2": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-Italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700.ttf",
					"woff": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700.woff",
					"woff2": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700italic.ttf",
					"woff": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700italic.woff",
					"woff2": "font/Pixel & Monospace/ubuntumono/Ubuntu-Mono-700italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/ubuntumono/UbuntuMono-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Pixel & Monospace/ubuntumono/UbuntuMono-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Pixel & Monospace/ubuntumono/UbuntuMono-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Pixel & Monospace/ubuntumono/UbuntuMono-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		}, {
			"key": "Uncial Antiqua",
			"id": "Uncial Antiqua",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/uncialantiqua/Uncial-Antiqua-Regular.ttf",
					"woff": "font/Scary & Dark/uncialantiqua/Uncial-Antiqua-Regular.woff",
					"woff2": "font/Scary & Dark/uncialantiqua/Uncial-Antiqua-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/uncialantiqua/UncialAntiqua-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Underdog",
			"id": "Underdog",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/underdog/Underdog-Regular.ttf",
					"woff": "font/Scary & Dark/underdog/Underdog-Regular.woff",
					"woff2": "font/Scary & Dark/underdog/Underdog-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/underdog/Underdog-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "UnifrakturCook",
			"id": "UnifrakturCook",
			"type": ["font"],
			"value": {
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Scary & Dark/unifrakturcook/UnifrakturCook-700.ttf",
					"woff": "font/Scary & Dark/unifrakturcook/UnifrakturCook-700.woff",
					"woff2": "font/Scary & Dark/unifrakturcook/UnifrakturCook-700.woff2"
				}
			},
			"preview": {
				"normal 700": {
					"url": "thumb/font/Scary & Dark/unifrakturcook/UnifrakturCook-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 700",
			"variants": ["normal 700"]
		}, {
			"key": "UnifrakturMaguntia",
			"id": "UnifrakturMaguntia",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Scary & Dark/unifrakturmaguntia/UnifrakturMaguntia-Regular.ttf",
					"woff": "font/Scary & Dark/unifrakturmaguntia/UnifrakturMaguntia-Regular.woff",
					"woff2": "font/Scary & Dark/unifrakturmaguntia/UnifrakturMaguntia-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Scary & Dark/unifrakturmaguntia/UnifrakturMaguntia-Book.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Scary & Dark"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "VT323",
			"id": "VT323",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Pixel & Monospace/vt323/VT323-Regular.ttf",
					"woff": "font/Pixel & Monospace/vt323/VT323-Regular.woff",
					"woff2": "font/Pixel & Monospace/vt323/VT323-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Pixel & Monospace/vt323/VT323-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Pixel & Monospace"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Vampiro One",
			"id": "Vampiro One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Handwriting/vampiroone/Vampiro-One-Regular.ttf",
					"woff": "font/Handwriting/vampiroone/Vampiro-One-Regular.woff",
					"woff2": "font/Handwriting/vampiroone/Vampiro-One-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Handwriting/vampiroone/VampiroOne-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Handwriting"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Varela Round",
			"id": "Varela Round",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Simple & Modern/varelaround/Varela-Round-Regular.ttf",
					"woff": "font/Simple & Modern/varelaround/Varela-Round-Regular.woff",
					"woff2": "font/Simple & Modern/varelaround/Varela-Round-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Simple & Modern/varelaround/VarelaRound-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Simple & Modern"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Vast Shadow",
			"type": ["font"],
			"value": {
				"normal 400": {
					"style": "normal",
					"weight": 400,
					"woff2": "font/Traditional (Serif)/vast-shadow/vast-shadow-regular.woff2",
					"woff": "font/Traditional (Serif)/vast-shadow/vast-shadow-regular.woff",
					"ttf": "font/Traditional (Serif)/vast-shadow/vast-shadow-regular.ttf"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/vast-shadow/vast-shadow-regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"author": [
				[{
					"name": "Nicole Fally",
					"bio": null,
					"imageUrl": "https://lh3.googleusercontent.com/d28PDMvKI9YPRy2t3PD4NiZ2BwRZ7HEDkOmhpmlmgBoW8mKqS4rwkuMHuXI3",
					"filename": ["VastShadow-Regular.ttf"],
					"email": "c",
					"copyright": "Copyright 2010 by Sorkin Type Co with Reserved Font Name Vast and Vast Shadow. This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL"
				}]
			],
			"title": "Vast Shadow",
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Vollkorn",
			"id": "Vollkorn",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-Regular.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-Regular.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-Regular.woff2"
				},
				"italic 400": {
					"weight": "400",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-Italic.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-Italic.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-Italic.woff2"
				},
				"normal 600": {
					"weight": "600",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-600.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-600.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-600.woff2"
				},
				"italic 600": {
					"weight": "600",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-600italic.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-600italic.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-600italic.woff2"
				},
				"normal 700": {
					"weight": "700",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-700.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-700.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-700.woff2"
				},
				"italic 700": {
					"weight": "700",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-700italic.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-700italic.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-700italic.woff2"
				},
				"normal 900": {
					"weight": "900",
					"style": "normal",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-900.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-900.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-900.woff2"
				},
				"italic 900": {
					"weight": "900",
					"style": "italic",
					"ttf": "font/Traditional (Serif)/vollkorn/Vollkorn-900italic.ttf",
					"woff": "font/Traditional (Serif)/vollkorn/Vollkorn-900italic.woff",
					"woff2": "font/Traditional (Serif)/vollkorn/Vollkorn-900italic.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Traditional (Serif)/vollkorn/Vollkorn-Regular.svg",
					"width": 150,
					"height": 18
				},
				"italic 400": {
					"url": "thumb/font/Traditional (Serif)/vollkorn/Vollkorn-Italic.svg",
					"width": 150,
					"height": 18
				},
				"italic 700": {
					"url": "thumb/font/Traditional (Serif)/vollkorn/Vollkorn-BoldItalic.svg",
					"width": 150,
					"height": 18
				},
				"normal 700": {
					"url": "thumb/font/Traditional (Serif)/vollkorn/Vollkorn-Bold.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Traditional (Serif)"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400", "italic 400", "italic 700", "normal 700"]
		},{
			"key": "Wire-One",
			"id": "Wire-One",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"woff": "font/Designer Picks/wire-one/wire-one-v9.woff",
					"woff2": "font/Designer Picks/wire-one/wire-one-v5.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Designer Picks/wire-one/Wire+One.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Designer Picks"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}, {
			"key": "Yellowtail",
			"id": "Yellowtail",
			"type": ["font"],
			"value": {
				"normal 400": {
					"weight": "400",
					"style": "normal",
					"ttf": "font/Fancy & Cursive/yellowtail/Yellowtail-Regular.ttf",
					"woff": "font/Fancy & Cursive/yellowtail/Yellowtail-Regular.woff",
					"woff2": "font/Fancy & Cursive/yellowtail/Yellowtail-Regular.woff2"
				}
			},
			"preview": {
				"normal 400": {
					"url": "thumb/font/Fancy & Cursive/yellowtail/Yellowtail-Regular.svg",
					"width": 150,
					"height": 18
				}
			},
			"tags": ["Fancy & Cursive"],
			"defaultVariant": "normal 400",
			"variants": ["normal 400"]
		}]
	}
}
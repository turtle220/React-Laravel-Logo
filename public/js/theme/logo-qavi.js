var init = function(){
    $.get( "https://logomakr.com/search/popup/index.php", function( data ) {
        $( "body" ).append( data );
      });



    // $('body').append('<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" width="100%" height="100%"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="9.20863 119.894 482.183 29.4063"><rect id="svgEditorBackground" x="9.300000190734863" y="119.89399719238281" width="482" height="29.406299591064453" style="fill:none;stroke:none;"/><path d="M9.3,127.3c49.3,-3,150.7,-7.599999999999994,199.7,-7.400000000000006c121.89999999999998,0.4000000000000057,189.89999999999998,0.4000000000000057,282.3,7.200000000000003c-111.19999999999999,2.5,-310.1,3.5,-421.3,11.900000000000006c82.6,-2.9000000000000057,254.2,-1,335.9,1.3000000000000114c-56,1.4000000000000057,-137.2,-0.30000000000001137,-197.1,9" id="e6_freepath"/></svg><canvas width="600px" height="200px" id="search-marker" class="ui-slider" style="position:fixed;top: -62px;left: 141px;z-index: 9;"></canvas>');
//     var cvs = document.getElementById("search-marker");
//     cvs.width = 300;
//     cvs.height = 300;
//     var ctx = cvs.getContext("2d");
    
//     // ctx.strokeStyle="black";
//     // ctx.lineWidth=3;
//     // ctx.fillStyle="black";
//     ctx.moveTo(0,0);
//     dpi = window.devicePixelRatio;

//     function drawLine(x1,y1,x2,y2,ratio) {
//         //ctx.fillRect(0,0,300,300);
//         x2 = x1 + Math.round(ratio * (x2-x1));
//         y2 = y1 + Math.round(ratio * (y2-y1));
//         //x1 = x1 + Math.round((ratio-0.1) * (x2-x1));
//         //y1 = y1 + Math.round((ratio-0.1) * (y2-y1));
//         ctx.moveTo(x1,y1);
//         ctx.quadraticCurveTo(250,-20,x2,y2);
//         ctx.stroke();
//     }

//     function fix_dpi() {
//         //create a style object that returns width and height
//           let style = {
//             height() {
//               return +getComputedStyle(cvs).getPropertyValue('height').slice(0,-2);
//             },
//             width() {
//               return +getComputedStyle(cvs).getPropertyValue('width').slice(0,-2);
//             }
//           }
//         //set the correct attributes for a crystal clear image!
//         cvs.setAttribute('width', style.width() );
//         cvs.setAttribute('height', style.height() );ctx.lineWidth=3;
//         }

//     function animate(ratio) {
//         ratio = ratio || 0;
//         if(ratio<1) {
//             fix_dpi()
//             drawLine(0,0,250,20,ratio);
        
//             requestAnimationFrame(function() {
//             animate(ratio + 0.05);
//             });
//         }else if(ratio<2){
//             fix_dpi()
//             ctx.moveTo(0,0);
//             ctx.lineTo(250,20);
//             drawLine(250,20,50,40,ratio-1);
        
//             requestAnimationFrame(function() {
//             animate(ratio + 0.05);
//             });
//         }else if(ratio<3){
//             fix_dpi()
//             ctx.moveTo(0,0);
//             ctx.lineTo(250,20);
//             ctx.lineTo(50,40);
//             drawLine(50,40,125,50,ratio-2);
        
//             requestAnimationFrame(function() {
//             animate(ratio + 0.05);
//             });
//         }
//     }

// animate();


// var distancePerPoint = 10;
// var drawFPS          = 300;

// var orig = document.querySelector('#e6_freepath'), points, timer,
//     canvas = document.querySelector('#search-marker'),
//     ctx=canvas.getContext('2d');

// canvas.addEventListener('click',function(){$('#search-marker').remove()},false);
// //canvas.addEventListener('mouseout', stopDrawingPath, false);

// function startDrawingPath(){
// 	points = [];
// 	ctx.lineWidth = 10;
// 	ctx.strokeStyle = '#80ccc7';
// 	timer = setInterval(buildPath,1000/drawFPS);
// }

// function buildPath(){
// 	var nextPoint = points.length * distancePerPoint;
// 	var pathLength = orig.getTotalLength();
// 	if (nextPoint <= pathLength){
// 		points.push(orig.getPointAtLength(nextPoint));
// 		redrawCanvas();
// 	}
// }

// function redrawCanvas(){
//     clearCanvas();
//     ctx.lineWidth = 3;
// 	ctx.beginPath();
// 	ctx.moveTo(points[0].x,points[0].y);
// 	for (var i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
// 	ctx.stroke();
// }

// function clearCanvas(){
// 	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
// }

// function stopDrawingPath(){
// 	clearInterval(timer);
// 	clearCanvas();
// }


// setTimeout(() => {

//     startDrawingPath();
//     setTimeout(()=>{
//         stopDrawingPath()
//         // setTimeout(()=>{
//         //     startDrawingPath()
//         //     setTimeout(()=>{
//         //         stopDrawingPath()
//         //         $('#search-marker').remove()
//         //     },12000)
//         // },3000)
//     },7000)


// }, 2000);
}

var check = function(){
    if($('#logo').length == 0 || $('.sk-contents').css("display") != "block"){
        setTimeout(() => {check();}, 1000);
    } else {
        if($(window).width() > 800)
            init();
    }
}

$(function(){
    setTimeout(() => {check();}, 1000);
})
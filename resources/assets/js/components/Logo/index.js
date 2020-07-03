import React from 'react';
import { withRouter } from 'react-router-dom';

class Logo extends React.Component{
    constructor(props){
        super(props);
    }

    __setEllipse(color, width){
        let logoSVG = document.getElementById("logo-svg");
        let circle = logoSVG.querySelector("circle");
        let paths = logoSVG.querySelectorAll("path");
        paths.forEach((path)=>{
            path.style.stroke = color;
            path.style.strokeWidth = width;
        });
        circle.style.fill = color;
    }
    __setBackground(color){
        let logoSVG = document.getElementById("logo-svg");
        let rect = logoSVG.querySelector("rect");
        rect.style.fill = color;
    }
    componentWillUpdate(nextProps,nextState){
        Object.assign(this.props.svgColorObj,nextProps.svgColorObj);
        let { strokeColor, strokeWidth, bgColor } = this.props.svgColorObj;
        this.__setEllipse(strokeColor, strokeWidth);
        this.__setBackground(bgColor);
        this.__downloadSVG();
        this.__downlaodImage();
    }

    componentDidMount(){
        let { strokeColor, strokeWidth, bgColor } = this.props.svgColorObj;
        this.__setEllipse(strokeColor, strokeWidth);
        this.__setBackground(bgColor);
        this.__downloadSVG();
        this.__downlaodImage();
        
    }

    __downloadSVG(){
        let logoSVG = document.getElementById("logo-svg");
        let svgData = logoSVG.outerHTML;
        let svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
        let svgUrl = URL.createObjectURL(svgBlob);
        let downloadLink = document.getElementById("downloadLink");
        downloadLink.href = svgUrl;
        downloadLink.download = "react-logo.svg";
    }

    __downlaodImage() {
        let svg = document.getElementById("logo-svg");
        var svgSize = svg.getBoundingClientRect();
        var svgData = new XMLSerializer().serializeToString(svg);

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");

        var img = document.createElement("img");

        var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;

        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            var imgsrc = canvas.toDataURL("image/png");
            let a = document.getElementById("downloadLinkForImage");
            a.href = imgsrc;
            a.download = "react-logo.png";
        };
    }

    render(){
        return(
            <div style={{width:300}}>
                <div className="svg-container" style={{position:'relative', width: 300, height:300}}>
                    <svg style={{position:'absolute', zIndex:0, left:0, right:0, top:0, botton:0}} id="logo-svg" version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 600 600" enable-background="new 0 0 600 600">
                        <rect fill='white' width="600" height="600"/>
                        <circle cx="299.529" cy="299.628" r="50.167"/>
                        <path fill="none" d="M299.529,197.628 c67.356,0,129.928,9.665,177.107,25.907c56.844,19.569,91.794,49.233,91.794,76.093c0,27.991-37.041,59.503-98.083,79.728 c-46.151,15.291-106.879,23.272-170.818,23.272c-65.554 0-127.63-7.492-174.29-23.441c-59.046-20.182-94.611-52.103-94.611-79.559 c0-26.642,33.37-56.076,89.415-75.616C167.398,207.503,231.515,197.628,299.529,197.628z"/>
                        <path fill="none" d="M210.736,248.922 c33.649-58.348,73.281-107.724,110.92-140.48c45.35-39.466,88.507-54.923,111.775-41.505 c24.248,13.983,33.042,61.814,20.067,124.796c-9.81,47.618-33.234,104.212-65.176,159.601 c-32.749,56.788-70.25,106.819-107.377,139.272c-46.981,41.068-92.4,55.929-116.185,42.213 c-23.079-13.31-31.906-56.921-20.834-115.233C153.281,368.316,176.758,307.841,210.736,248.922z"/>
                        <path fill="none" d="M210.821,351.482 c-33.746-58.292-56.731-117.287-66.312-166.255c-11.544-58.999-3.382-104.109,19.864-117.566 c24.224-14.024,70.055,2.244,118.14,44.94c36.356,32.28,73.688,80.837,105.723,136.173c32.844,56.733,57.461,114.209,67.036,162.582 c12.117,61.213,2.309,107.984-21.453,121.74c-23.057,13.348-65.249-0.784-110.239-39.499 C285.567,460.886,244.898,410.344,210.821,351.482z"/>
                    </svg>
                    
                    <span style={{ position:'absolute',transform: 'translate(-50%, 0)', top:'65%', color: 'white', fontWeight:'bold', fontSize: 40, zIndex: 1}}>{this.props.logoName}</span>
                    <span style={{position:'absolute',transform: 'translate(-50%, 0)',top:'80%', color: '#E0C030', fontSize: 30, zIndex: 1}}>{this.props.businessName}</span>
                </div>   
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize:16}}>
                    <a id="downloadLink" className="downloadLink button" style={{backgroundColor:'black', borderRadius:4, padding:'5px !important'  ,  color: '#FFFFFF'}}>Download SVG</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a id="downloadLinkForImage" className="downloadLink button" style={{backgroundColor:'black', borderRadius:4, padding:'5px !important', color: 'white'}}>Download Image</a>
                </div>
            </div>
        )
    }

};

export default Logo;
function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

__$styleInject("body,html{height:100%}.zuk-hex-wrapper{margin-top:6%}.zuk-hex-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 auto;overflow:hidden;font-size:15px;list-style-type:none}.zuk-hex-item{position:relative;visibility:hidden;outline:1px solid transparent}.zuk-hex-item:after{content:\"\";display:block;padding-bottom:86.602%}.zuk-hex-container{width:96%;padding-bottom:110.851%;margin:0 2%;overflow:hidden;visibility:hidden;-webkit-transform:rotate(-60deg) skewY(30deg);transform:rotate(-60deg) skewY(30deg)}.zuk-hex-container,.zuk-hex-container *{position:absolute;outline:1px solid transparent}.zuk-hex-container *{visibility:visible}.zuk-hex-a{display:block;width:100%;height:100%;text-align:center;color:#000;overflow:hidden;-webkit-transform:skewY(-30deg) rotate(60deg);transform:skewY(-30deg) rotate(60deg)}.zuk-hex-item img{left:-100%;right:-100%;width:auto;height:100%;margin:0 auto;-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)}.zuk-hex-item h1,.zuk-hex-item p{width:100%;padding:5%;box-sizing:border-box;background-color:#ff0;font-weight:300;transition:opacity .3s ease-out,-webkit-transform .2s ease-out;transition:transform .2s ease-out,opacity .3s ease-out;transition:transform .2s ease-out,opacity .3s ease-out,-webkit-transform .2s ease-out}.zuk-hex-item h1{bottom:50%;padding-top:50%;font-size:1.5em;z-index:1;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.zuk-hex-item h1:after{content:\"\";position:absolute;bottom:0;left:45%;width:10%;text-align:center;border-bottom:1px solid #fff}.zuk-hex-item p{top:50%;padding-bottom:50%;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.zuk-hex-a:focus h1,.zuk-hex-a:focus p,.zuk-hex-a:hover h1,.zuk-hex-a:hover p{-webkit-transform:translateZ(0);transform:translateZ(0)}@media (min-width:1201px){.zuk-hex-list{padding-bottom:4.4%}.zuk-hex-item{width:20%}.zuk-hex-item:nth-child(9n+6){margin-left:10%}}@media (max-width:1200px) and (min-width:901px){.zuk-hex-list{padding-bottom:5.5%}.zuk-hex-item{width:25%}.zuk-hex-item:nth-child(7n+5){margin-left:12.5%}}@media (max-width:900px) and (min-width:601px){.zuk-hex-list{padding-bottom:7.4%}.zuk-hex-item{width:33.333%}.zuk-hex-item:nth-child(5n+4){margin-left:16.666%}}@media (max-width:600px){.zuk-hex-list{padding-bottom:11.2%}.zuk-hex-item{width:50%}.zuk-hex-item:nth-child(3n+3){margin-left:25%}}@media (max-width:400px){.zuk-hex-list{font-size:13px}}", undefined);

__$styleInject(".zuk-hex-wrapper{margin-top:6%}.zuk-hex-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 auto;overflow:hidden;font-size:15px;list-style-type:none}.zuk-hex-item{position:relative;visibility:hidden;outline:1px solid transparent}.zuk-hex-item:after{content:\"\";display:block;padding-bottom:86.602%}.zuk-hex-container{width:96%;padding-bottom:110.851%;margin:0 2%;overflow:hidden;visibility:hidden;-webkit-transform:rotate(-60deg) skewY(30deg);transform:rotate(-60deg) skewY(30deg)}.zuk-hex-container,.zuk-hex-container *{position:absolute;outline:1px solid transparent}.zuk-hex-container *{visibility:visible}.zuk-hex-a{display:block;width:100%;height:100%;text-align:center;color:#000;overflow:hidden;-webkit-transform:skewY(-30deg) rotate(60deg);transform:skewY(-30deg) rotate(60deg)}.zuk-hex-item img{left:-100%;right:-100%;width:auto;height:100%;margin:0 auto;-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)}.zuk-hex-item h1,.zuk-hex-item p{width:100%;padding:5%;box-sizing:border-box;background-color:#ff0;font-weight:300;transition:opacity .3s ease-out,-webkit-transform .2s ease-out;transition:transform .2s ease-out,opacity .3s ease-out;transition:transform .2s ease-out,opacity .3s ease-out,-webkit-transform .2s ease-out}.zuk-hex-item h1{bottom:50%;padding-top:50%;font-size:1.5em;z-index:1;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.zuk-hex-item h1:after{content:\"\";position:absolute;bottom:0;left:45%;width:10%;text-align:center;border-bottom:1px solid #fff}.zuk-hex-item p{top:50%;padding-bottom:50%;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.zuk-hex-a:focus h1,.zuk-hex-a:focus p,.zuk-hex-a:hover h1,.zuk-hex-a:hover p{-webkit-transform:translateZ(0);transform:translateZ(0)}@media (min-width:1201px){.zuk-hex-list{padding-bottom:4.4%}.zuk-hex-item{width:20%}.zuk-hex-item:nth-child(9n+6){margin-left:10%}}@media (max-width:1200px) and (min-width:901px){.zuk-hex-list{padding-bottom:5.5%}.zuk-hex-item{width:25%}.zuk-hex-item:nth-child(7n+5){margin-left:12.5%}}@media (max-width:900px) and (min-width:601px){.zuk-hex-list{padding-bottom:7.4%}.zuk-hex-item{width:33.333%}.zuk-hex-item:nth-child(5n+4){margin-left:16.666%}}@media (max-width:600px){.zuk-hex-list{padding-bottom:11.2%}.zuk-hex-item{width:50%}.zuk-hex-item:nth-child(3n+3){margin-left:25%}}@media (max-width:400px){.zuk-hex-list{font-size:13px}}", undefined);

var Loader = function Loader() {
  console.log('hello world');
};

// Import styles (automatically injected into <head>).
var main = {
  DfsLoader: Loader
};

export default main;

import { TweenLite, CSSPlugin, Power4 } from "greensock";
function beginPartFive(){
	var tl = new TimelineMax({delay:.5}),
    svgRoot = document.getElementById("part5Svg");
TweenMax.set(svgRoot,{attr:{viewBox:"250 0 250 250"}});
tl.to(svgRoot, 1.5, {attr:{ viewBox:"0 0 1000 1000"}})
  .to(svgRoot, 1.2, {attr:{ viewBox:"500 500 250 250"}},"+=.5")
  .to(svgRoot, 1, {attr:{ viewBox:"750 500 250 250"},ease:Power2.easeInOut},"+=.5")
  .to(svgRoot, 1, {attr:{ viewBox:"0 0 1000 1000"},ease:Power1.easeOut},"+=.5");
}
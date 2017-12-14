
function beginPartFive(){
	transitionSecondPart();
	
	
	setTimeout(function(){
		animateWindows();
		changeMainBackground();
		animateSun();
		animateMoon();
		
	}, 12000);
	
	
}
function transitionSecondPart(){
	$("#actualCitySVG").css("transition-delay","2s");
	$("#actualCitySVG").css("transition-duration","10s");
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	
	
	widthTranslate = width/30.3;
	heightTranslate = height/37.7;
	
	$("#actualCitySVG").css("width",(100)+"vw");
	$("#actualCitySVG").css("height",(100)+"vh");
	
	$("#actualCitySVG").css("transform","translatex(+"+widthTranslate+"px) translatey(+"+heightTranslate+"px)");
	
	
	
}

function animateWindows(){
	setTimeout(function(){
		 
		$(".lightIsOn").removeClass("lightIsOn");
		 
	}, 1500);
	
	

}

function changeMainBackground(){
	$("#svgEditorBackground2").addClass("animated");
	$("#moon_arc3").addClass("animated");
	
}
function animateSun(){
	$("#sun2").addClass("animated");
}

function animateMoon(){
	$("#moon2").addClass("animated");
}


$(function() {
   setTimeout(beginPartFive, 1000);
})
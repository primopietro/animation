
function startStory(){
	var pop = new Audio('pop.mp3');
	pop.play();
	changeMainBackground();
	animateSun();
	animateMoon();
	animateWindows();
	
	setTimeout(function(){
		transitionSecondPart();
	}, 300);
	
	
}
function transitionSecondPart(){
	$("#actualCitySVG").css("transition-delay","2s");
	$("#actualCitySVG").css("transition-duration","15s");
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	
	
	widthTranslate = width*36;
	heightTranslate = height*52;
	
	$("#actualCitySVG").css("width",(width*100)+"px");
	$("#actualCitySVG").css("height",(height*100)+"px");
	
	$("#actualCitySVG").css("transform","translatex(-"+widthTranslate+"px) translatey(-"+heightTranslate+"px)");
	
	introduceSecondPart();
	
}
function introduceSecondPart(){
	setTimeout(function(){
		window.location = "part2.html";
	}, 11000);
}

function animateWindows(){
	setTimeout(function(){
		 
		 
		/*var x = 0;
		
		for(var i=0;i<Math.floor((Math.random() * 27) + 13);++i){
			
			
			x = Math.floor((Math.random() * 60) + 1);
			
			
			$("[href='#window']").each(function(index){
				if(x == index){
					$(this).addClass("lightIsOn");
				}
			
			});
				
			
		}

		
		$("[href='#window']").each(function(index){
			if(index == 9){
				  $(this).addClass("lightIsOn");
			}
		
		});*/
		$(".lightIsOff").toggleClass('lightIsOff lightIsOn');
		 
	}, 800);
	
	

}

function changeMainBackground(){
	$("#svgEditorBackground").addClass("animated");
	$("#moon_arc2").addClass("animated");
	
}
function animateSun(){
	$("#sun").addClass("animated");
}

function animateMoon(){
	$("#moon").removeClass("notAnimated");
}


$(function() {
   setTimeout(startStory, 1000);
})
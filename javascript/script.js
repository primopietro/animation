
function startStory(){
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
	$("#actualCitySVG").css("transition-duration","10s");
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	
	
	widthTranslate = width*30.3;
	heightTranslate = height*37.7;
	
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
		 
		 
		var x = 0;
		
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
		
		});
		 
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
function beginPartTree(){
	var audio = new Audio('zapzap.mp3');
	audio.play();
	convoOne();
	
}
function convoOne(){
	setTimeout(function(){
		toggleAnimateThing("second_dude");
		var voice2 = new Audio('voice2.mp3');
		voice2.play();
        $('#e3_circle').css("fill-opacity","1");
		$('#e3_circle').css("fill","white");
    },450);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e2_circle').css("fill-opacity","1");
		$('#e2_circle').css("fill","white");
    },900);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#textOne').css("fill-opacity","1");
	},1350);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e1_ellipse').css("fill-opacity","1");
		$('#e1_ellipse').css("fill","white");
  	},1400);
	setTimeout(function(){
		goToPartFour();
  	},2000);
	
}
function toggleAnimateThing(anID){
	setTimeout(function(){
      $("#"+anID).attr("transform","translate(0,120)");
    },200);
	setTimeout(function(){
       $("#"+anID).attr("transform","translate(0,100)");
    },500);
	setTimeout(function(){
       $("#"+anID).attr("transform","translate(0,120)");
	},700);
	
	
}

function goToPartFour(){
	setTimeout(function(){
		window.location = "part4.html";
	}, 11000);
}


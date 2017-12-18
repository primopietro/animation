function beginPartTwo(){
	convoOne();
	
}
function convoOne(){
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e3_circle').css("fill-opacity","1");
		$('#e3_circle').css("fill","white");
    },450);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e2_circle').css("fill-opacity","1");
		$('#e2_circle').css("fill","white");
    },900);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#textOne').css("fill-opacity","1");
	},1350);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e1_ellipse').css("fill-opacity","1");
		$('#e1_ellipse').css("fill","white");
  	},1400);
	setTimeout(function(){
		convoTwo();
	},3500);
	
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
function convoTwo(){
	
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e4_circle').css("fill-opacity","1");
		$('#e4_circle').css("fill","white");
    },450);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#textTwo').css("fill-opacity","1");
	},900);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e2_ellipse').css("fill-opacity","1");
		$('#e2_ellipse').css("fill","white");
  	},950);
	setTimeout(function(){
		goToPartThree();
	},2000);
	
	
}
function goToPartThree(){
	setTimeout(function(){
		window.location = "part3.html";
	}, 11000);
}


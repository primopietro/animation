function beginPartFour(){
	convoOne();
	
}
function convoOne(){
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e3_circle').css("fill-opacity","1");
		$('#e3_circle').css("fill","white");
    },200);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e2_circle').css("fill-opacity","1");
		$('#e2_circle').css("fill","white");
    },500);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#textOne').css("fill-opacity","1");
	},1300);
	setTimeout(function(){
		toggleAnimateThing("first_dude");
        $('#e1_ellipse').css("fill-opacity","1");
		$('#e1_ellipse').css("fill","white");
  	},1800);
	setTimeout(function(){
		convoTwo();
	},3000);
	
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
    },200);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#textTwo').css("fill-opacity","1");
	},700);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e2_ellipse').css("fill-opacity","1");
		$('#e2_ellipse').css("fill","white");
  	},1300);
	setTimeout(function(){
		goToPartFive();
	},2000);
	
	
}
function goToPartFive(){
	setTimeout(function(){
		window.location = "part5.html";
	}, 11000);
}


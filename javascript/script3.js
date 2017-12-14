function beginPartTree(){
	convoOne();
	
}
function convoOne(){
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e3_circle').css("fill-opacity","1");
		$('#e3_circle').css("fill","white");
    },200);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e2_circle').css("fill-opacity","1");
		$('#e2_circle').css("fill","white");
    },500);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#textOne').css("fill-opacity","1");
	},1300);
	setTimeout(function(){
		toggleAnimateThing("second_dude");
        $('#e1_ellipse').css("fill-opacity","1");
		$('#e1_ellipse').css("fill","white");
  	},1800);
	setTimeout(function(){
		goToPartFour();
  	},2500);
	
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


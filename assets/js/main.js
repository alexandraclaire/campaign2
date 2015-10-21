	var Animation = function() {
		$(".items:eq(0)").delay(1000).animate({
			opacity:1
		}, "slow", function(){
			$(this).find("p").css("background-color", "#B5C3D5");
		});
		$(".items:eq(1)").delay(2000).animate({
			opacity:1
		}, "slow", function(){
			$(this).find("p").css("background-color", "#B5C3D5");
		});
		$(".items:eq(2)").delay(3000).animate({
			opacity:1
		}, "slow", function(){
			$(this).find("p").css("background-color", "#B5C3D5");
		});
		$(".items:eq(3)").delay(4000).animate({
			opacity:1
		}, "slow", function(){
			$(this).find("p").css("background-color", "#B5C3D5");
		});
		$(".items:eq(4)").delay(4000).animate({
			opacity:1
		}, "slow", function(){
			$(this).find("p").css("background-color", "#B5C3D5");
		});

		$("#wantmore").click(){
			thirdAnimation();
		};	
	};
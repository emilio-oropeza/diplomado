$(document).ready(function(){
	$("#desde_video").videoCover({
		"video": "https://www.youtube.com/watch?v=EWUEMG9s9ls",
		"loop": false,
		"control":true,
	});

	$("#que").waypoint(function(direction){
		if(direction == "down"){
			$(".navbar-inverse .navbar-nav > li > a").removeClass("height_100");
			$(".navbar-brand").removeClass("height_100");
			$("#diplo_navbar").height("60px");
			$("body").css({"padding-top":"60px"});
		}else{
			$(".navbar-inverse .navbar-nav > li > a").addClass("height_100");
			$(".navbar-brand").addClass("height_100");
			if($(window).width() > 767){
				$("#diplo_navbar").height("100px");
				$("body").css({"padding-top":"100px"});
			}
		}
	},{offset:'bottom-in-view'});
});

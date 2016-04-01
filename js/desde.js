$(document).ready(function(){
	$("#desde_video").videoCover({
		"video": "https://www.youtube.com/watch?v=EWUEMG9s9ls",
		"loop": false,
		"control":true,
	});

	$("#portada").waypoint(function(direction){
		if(direction == "down"){
			$(".navbar-inverse .navbar-nav > li > a").animate({
				"padding-top":"20px",
				"padding-bottom": "20px"
			}, 500);
			$(".navbar-brand").animate({
				"padding-top":"20px"
			}, 500);
			$("#diplo_navbar").animate({
				"height":"60px"
			}, 500);
			$("body").animate({
				"padding-top": "60px"
			}, 500);
		}else{
			if($(window).width() > 767){
				$(".navbar-inverse .navbar-nav > li > a").animate({
					"padding-top":"40px",
					"padding-bottom": "40px"
				}, 500);
				$(".navbar-brand").animate({
					"padding-top":"40px"
				}, 500);
				$("#diplo_navbar").animate({
					"height":"100px"
				}, 500);
				$("body").animate({
					"padding-top": "100px"
				}, 500);
			}
		}
	},{offset:'0%'});
	$(window).resize(function(){
		if($(window).width() <= 767){
			$(".navbar-inverse .navbar-nav > li > a").css({
				"padding-top":"20px",
				"padding-bottom": "20px"
			});
			$(".navbar-brand").css({
				"padding-top":"20px"
			});
			$("#diplo_navbar").css({
				"height":"60px"
			});
			$("body").css({
				"padding-top": "60px"
			});
		}else{
			$(".navbar-inverse .navbar-nav > li > a").css({
				"padding-top":"40px",
				"padding-bottom": "40px"
			});
			$(".navbar-brand").css({
				"padding-top":"40px"
			});
			$("#diplo_navbar").css({
				"height":"100px"
			});
			$("body").css({
				"padding-top": "100px"
			});
		}
	});




});


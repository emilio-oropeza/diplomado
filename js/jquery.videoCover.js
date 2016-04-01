
(function($){
	$.fn.videoCover = function(options){
		return this.each(function() {
			var element = $(this);						
			if (element.data('videoCover')) return;
			var myplugin = new VideoCover(this, options);
			element.data('videoCover', myplugin);
			element.data('videoCover').methods.init();			
		});
	};
	
	var VideoCover = function(target, options ){
		var componentObj = {
			height: (options.height != undefined)?options.height:$(target).height(),
			color: (options.color != undefined)?options.color:null,
			video: options.video,
			loop: (options.loop != undefined)?options.loop:true,
			scale: (options.scale != undefined)?options.scale:2,
			control: (options.control != undefined)?options.control:false,
			video_id: null,
			videoType: null,			
			content: null,
			frameTag: null,
			methods:{
				init:function(){
					if(componentObj.video != undefined && componentObj.video.length > 0){
						componentObj.methods.setVideoType();
						if(componentObj.videoType != null){
							componentObj.methods.setVideo();
							componentObj.methods.resize();
							$(window).resize(function(){
								componentObj.methods.resize();
							});
						}else{
							console.log("url no valida");
						}
					}else{
						console.log("url del video vacio");
					}
				},
				setVideoType: function(){
					if(componentObj.video.indexOf("youtube") > -1){
						componentObj.videoType = "youtube";
						var youtubeArr = componentObj.video.split("=")[1];
						componentObj.video_id = youtubeArr.split("&")[0];
					}else if(componentObj.video.indexOf("vimeo") > -1){
						componentObj.videoType = "vimeo";						
						componentObj.video_id = componentObj.video.split("/")[3];
					}
				},
				setVideo: function(){
					var frame = null;
					
					if(componentObj.videoType === "vimeo"){
						var loop = (componentObj.loop)?"&loop=1":"";
						frame = '<iframe class="vimeo" src="//player.vimeo.com/video/'+ componentObj.video_id
						+'?autoplay=1'+loop+'&title=0&byline=0&portrait=0" frameborder="0" '
						+'webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
					}else if(componentObj.videoType === "youtube"){
						var loop = (componentObj.loop)?"&playlist="+componentObj.video_id:"";
						frame = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+
						componentObj.video_id+'?autoplay=1&loop=1'+loop
						+'" frameborder="0" allowfullscreen volume="0"></iframe>';
					}
					componentObj.content = $("<div class='video_content' />").appendTo(target);					
					componentObj.frameTag = $(frame).appendTo(componentObj.content);					
					$(componentObj.frameTag).css({
						"width":"100%",
						"height": (componentObj.control)?"100%":"110%",
						"position": "absolute",
						"top": "0px",
						"left": "0px",
						"bottom": "0px",
						"right": "0px",
						"margin": "auto",
						"z-index": "1"
					});
					if(!componentObj.control){
						var noControl = $("<div />").appendTo(componentObj.content);
						$(noControl).css({
							"width": "100%",
							"height": "100%",
							"position": "absolute",
							"z-index": "2",
							"background-color":"transparent"
						});
					}
				},
				resize: function(){
					$(componentObj.content).css({
						"position": "relative",
						"margin": "auto",
						"overflow": "hidden",
						"width": $(window).width(),
						"height":$(window).width() / componentObj.scale
					});
				}
			}
		};
		return componentObj;
	};	
})(jQuery);
//<iframe class="vimeo" src="//player.vimeo.com/video/158264002?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
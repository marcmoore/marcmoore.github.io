var animating = false;

$(".start").bind("click", function(){
	if(animating) return false;
	animating = true;

	var popup = $(".map");
	var start = $(".startContainer");
	popup.animate({opacity: 1}, {
		step: function(now, mx) {
			var opacity = 1 - now;
			var scale = 1 - (1 - now) * 0.2;
			var bottom = now * -120 + "px";
			
			popup.css({'transform': 'scale('+scale+')'});
			popup.css({'opacity': opacity});
			start.css({'bottom': bottom});
		},
		duration: 800,
		complete: function(){
			animating = false;
		},
		easing: 'easeInOutBack'
	});
})

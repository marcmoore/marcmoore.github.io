var schools = {
	"schoolLSE" : {
		"img" : "assets/images/lse.png",
		"qanda" : [
			{
				"q" : "当初大学给你的 conditional offer 的条件是？",
				"a" : "平时成绩85%以上和IELTS达到7.5分."
			},{
				"q" : "选择这所大学的主要原因，如何评价自己的大学？",
				"a" : "因为是英国最知名的大学之一，进入LSE读书是我一直以来的梦想。"
			},{
				"q" : "认为大学最强的三个专业是哪些？",
				"a" : "我觉得LSE的专业都不错，其中经济，政治，社会学和国际关系都很卓越。"
			}
		]
	}
};

$(document).ready(function(){
	$('body').jpreLoader({
		showSplas: false,
		autoClose: true,
		showPercentage: true,
		closeBtnText: ""
	}, function() {	//callback function
		$(".pageLoading").fadeOut(300);
	});
	var animating = false;
	
	var sectionHide = function (hideThis){
		if(animating) return false;
		animating = true;
		
		$(hideThis).animate({opacity: 0}, {
			duration: 1000,
			complete: function(){
				animating = false;
				$(hideThis).css({"z-index": -100});
			},
			easing: 'easeInOutBack'
		});
	};
	
	var sectionShow = function (showThis){
		if(animating) return false;
		animating = true;
		
		$(showThis).css({"z-index": 1000});
		$(showThis).animate({opacity: 1}, {
			step: function(now, mx) {
				var opacity = 1 - now;
				var scale = 1 - (1 - now) * 0.2;
				$(showThis).css({"opacity": opacity});
				$(showThis).css({"transform": "scale("+scale+")"});
			},
			duration: 800,
			complete: function(){
				animating = false;
			},
			easing: "easeInOutBack"
		});
	};
	
	$(".logo").on("click", function(){
		sectionHide(".splashScreen");
	});
	
	$(".schools").on("click", function(){
		var whichSchool = $(this).attr("name");
		$(".schoolIntro img").attr("src", schools[whichSchool].img);
		
		var qandaContent = "";
		$(schools[whichSchool].qanda).each(function(){
			qandaContent = qandaContent + "<li>" + this.q + "</li>" + "<li>" + this.a + "</li>";
		});
		
		$(".qanda").html(qandaContent);
		
		sectionShow(".schoolIntro");
	});
	
	$(".closeBtn").on("click", function(){
		sectionHide(".schoolIntro");
	});
	
	$(".start").on("click", function(){
		if(animating) return false;
		animating = true;
	
		var popup = $(".map");
		var start = $(".startContainer");
		popup.animate({opacity: 1}, {
			step: function(now, mx) {
				var opacity = 1 - now;
				var scale = 1 - (1 - now) * 0.2;
				var bottom = now * -120 + "px";
				
				popup.css({"transform": "scale("+scale+")"});
				popup.css({"opacity": opacity});
				start.css({"bottom": bottom});
			},
			duration: 800,
			complete: function(){
				animating = false;
			},
			easing: "easeInOutBack"
		});
	});
});

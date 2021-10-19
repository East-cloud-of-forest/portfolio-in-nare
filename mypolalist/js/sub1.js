$(function(){
	//가운데 정렬 함수 선언
	jQuery.fn.center = function(){
	this.css({
	'position': 'absolute',
	'left': '50%',
	'top': '50%'
	});
	this.css({
	'margin-left': -this.outerWidth() / 2 + 'px',
	'margin-top': -this.outerHeight() / 2 + 'px'
	});
	
	};
	jQuery.fn.topcenter = function(){
	this.css({
	'position': 'absolute',
	'top': '50%'
	});
	this.css({
	'margin-top': -this.outerHeight() / 2 + 'px'
	});
	};
	
	jQuery.fn.leftcenter = function(){
	this.css({
	'position': 'absolute',
	'left': '50%',
	});
	this.css({
	'margin-left': -this.outerWidth() / 2 + 'px',
	});
	};
	
	//가운데 정렬
	$(".nav").leftcenter();
	
	//아이콘 호버
	var hover = true;
	
	$(".bannericon> li div").hover(function(){
		if(hover) $(this).toggleClass("scale");
	});
	$(".bannericon> li div").click(function(){
		var i = $(this).parent().index() + 2;
		
		$(this).addClass("focus");
		$(".bannericon> li div").not(this).removeClass("focus");
		
		$(".main_banner> li:nth-child("+ i+ ")").addClass("banner_focus");
		$(".main_banner> li").not(".main_banner> li:nth-child("+ i+ ")").removeClass("banner_focus");
		
		console.log(i+1);
	});
});
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
});
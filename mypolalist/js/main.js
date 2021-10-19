	//가운데 정렬 함수 선언
$(document).ready(function (){
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
	$(".main_scroll li:nth-child(1) .box").center();
	$(".main_scroll li p").center();
	$(".main_scroll> li:nth-child(4) div:nth-child(1)").center();
	$(".nav").leftcenter();
	$(".banner").leftcenter();
	$(".main_scroll li:nth-child(1) .box h2").topcenter();
	$(".page3").center();
	$(".pg5").center();
});


$(function(){
	//마우스 휠 작동시 가로 스크롤
	var d = false;
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
			delta = E.detail * -40;
		}else{
			delta = E.wheelDelta;
		};
		//페이지
		var a = parseInt($(".main_scroll").css("left"));
		var b = $(".main_scroll > li").width();
		var c = $('.main_scroll > li').length;
		//인덱스
		var a1 = parseInt($(".on").css("right"));
		var b1 = $(".index > li").width();
		var c1 = $('.index > li').length;
		//스크롤아이콘
		var s1 = parseInt($(".scroll").css("top"));
		var s2 = $(".scroll").height();
		var c1 = $('.index > li').length;
			
		if(delta < 0 && a > (c-1)*-b && !d){
			d = true;
			$('.main_scroll').stop().animate({
			"left": a += -b
			},400,function(){
				d = false;
			});
			$('.on').stop().animate({
			"right": a1 += -b1
			},400,function(){
				d = false;
			});
			$('.scroll').stop().animate({
			"top": s1 += s2
			},400,function(){
				d = false;
			});
		};
		if(delta > 0 && a < 0 && !d){
			d = true;
			$('.main_scroll').stop().animate({
			"left": a += b
			},400,function(){
				d = false;
			});
			d = true;
			$('.on').stop().animate({
			"right": a1 += b1
			},400,function(){
				d = false;
			});
			$('.scroll').stop().animate({
			"top": s1 += -s2
			},400,function(){
				d = false;
			});
		};
	});
	//페이지 인덱스 클릭
	$(".index > li > div").click(function(){
		
		var a = parseInt($(".main_scroll").css("left"));
		var b = $(".main_scroll > li").width();
		var c = $('.main_scroll > li').length;
		var e = $(this).parent().index();
		
		var a1 = parseInt($(".on").css("right"));
		var b1 = $(".index > li").width();
		var c1 = $('.index > li').length;
		
		var s1 = parseInt($(".scrolllocation").css("top"));
		var s2 = $(".scroll").height();
		var c1 = $('.index > li').length;
		
		if(e > 0 && a <= 0 && a >= (c-1)*-b && !d){
			d = true;
			$('.main_scroll').stop().animate({
			"left": (-b*e)+b
			},400,function(){
				d = false;
			});
			d = true;
			$('.on').stop().animate({
			"right": (-b1*e)+(b1*(c1-1))
			},400,function(){
				d = false;
			});
			$('.scroll').stop().animate({
			"top": s1 + (s2*(e-1))
			},400,function(){
				d = false;
			});
		};
	});

	
	//키보드 방향키 스크롤 금지
	window.addEventListener("keydown", function(e) {
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
	
});
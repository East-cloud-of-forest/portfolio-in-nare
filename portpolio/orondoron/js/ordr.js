$("document").ready(function(){
	$(window).scroll(function(){
		var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다. 
		
		if (position >= 1){
		$('.top').addClass('v0')
		$('.header2').addClass('v1')
		}else{
		$('.top').removeClass('v0')
		$('.header2').removeClass('v1')
		}
	});
});

$(".hanCK ul li").click(function(){
	
	var a =$(this).index() + 1;
	
	$(".hanCK ul li:nth-child("+a+")").addClass("hanCK_on");
	$(".hanCK ul li").not(".hanCK ul li:nth-child("+a+")").removeClass("hanCK_on");
	
	$(".hanCK ul li:nth-child("+a+") p").addClass("hanCK_onp");
	$(".hanCK ul li p").not(".hanCK ul li:nth-child("+a+") p").removeClass("hanCK_onp");
	
	$(".hanCK ul li:nth-child("+a+") div").addClass("hanCK_ont");
	$(".hanCK ul li div").not(".hanCK ul li:nth-child("+a+") div").removeClass("hanCK_ont");
});


$("document").ready(function(){
	var windowWidth = $( window ).width();
		if(windowWidth < 699) {
			$(".top2> a:nth-child(3)").click(function(){
				$(".header").addClass("l")
			});
			$(".top_menuX").click(function(){
				$(".header").removeClass("l")
			});
			$(".top ul li a").click(function(){
				$(".header").removeClass("l")
			});

			
			$(".hanCK ul li:nth-child(1) div").addClass("hanCK_ont");
			$(".hanCK ul li div").not(".hanCK ul li:nth-child(1) div").removeClass("hanCK_ont");
			$(".hanCK ul li:nth-child(1) p").addClass("hanCK_onp");
			$(".hanCK ul li p").not(".hanCK ul li:nth-child(1) p").removeClass("hanCK_onp");
		}else{
			$(".header").removeClass("l")
		}
});


$(window).resize(function(){
	var windowWidth = $( window ).width();
		if(windowWidth < 699) {
			$(".top2> a:nth-child(3)").click(function(){
				$(".header").addClass("l")
			});
			$(".top_menuX").click(function(){
				$(".header").removeClass("l")
			});
			
			$(".hanCK ul li:nth-child(1) div").addClass("hanCK_ont");
			$(".hanCK ul li div").not(".hanCK ul li:nth-child(1) div").removeClass("hanCK_ont");
			$(".hanCK ul li:nth-child(1) p").addClass("hanCK_onp");
			$(".hanCK ul li p").not(".hanCK ul li:nth-child(1) p").removeClass("hanCK_onp");
		}else{
			$(".header").removeClass("l")
		}
});



var delta = 300; var timer = null; $( window ).on( 'resize', function( ) { clearTimeout( timer ); timer = setTimeout( resizeDone, delta ); } ); function resizeDone( ) {
	var windowWidth = $( window ).width();
		if(windowWidth < 699) {
			location.reload();
		}else{
			location.reload();
		}
}


		  $('a').click(function () {
			$('html, body').animate({
			  scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
			return false;
		  });
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
	
	//탭
	$(".chart_nav ul li a").click(function(){
		
		var i = $(this).parent().index()+1;
	
		$(this).siblings().addClass("active");
		$(".chart_nav ul li a").not(this).siblings().removeClass("active");
		
		$("li:nth-child("+i+") .chart").addClass("active");
		$(".chart").not("li:nth-child("+i+") .chart").removeClass("active");
		
		$(".albuminfo> div").removeClass("active");
		
		console.log(i);
	});
	
	
	//엘범인포
	$(".charttable td:nth-child(1)").click(function(){
		
		var i = $(this).parent().index()+1;
		
		$(".albuminfo> div:nth-child("+i+")").addClass("active");
		$(".albuminfo> div").not(".albuminfo> div:nth-child("+i+")").removeClass("active");
		
		console.log(i);
	});
	$(".charttable tr:nth-child(-n+3) td:nth-child(2)").click(function(){
		
		var i = $(this).parent().index()+1;
		
		$(".albuminfo> div:nth-child("+i+")").addClass("active");
		$(".albuminfo> div").not(".albuminfo> div:nth-child("+i+")").removeClass("active");

		console.log(i);
	});
	
	
	// 오늘 날짜 넣기
    todayIs();
 
    function todayIs() {
        var today = new Date();
        var days = new Date();
        var weeks = new Date();
        var month = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;  //January is 0!
        var yyyy = today.getFullYear();
		var ww = getWeekNo(today);

        if(dd<10){
            dd = '0'+dd
        }
        if(mm<10){
            mm = '0'+mm
        }
        if(ww<10){
            ww = '0'+ww
        }
 
        today = yyyy + ' ' + mm + ' ' + dd + ' ';
        //alert(today);
        document.getElementById("date").innerHTML = today;
        //$('#date').text(today);
		
        days = yyyy + ' 년 ' + mm + ' 월 ' + dd + ' 일 ';
        //alert(today);
        document.getElementById("datedays").innerHTML = days;
        //$('#date').text(today);
		
        weeks = yyyy + ' 년 ' + mm + ' 월 ' + ww + ' 주차 ';
        //alert(today);
        document.getElementById("dateweeks").innerHTML = weeks;
        //$('#date').text(today);
		
        month = yyyy + ' 년 ' + mm + ' 월 '
        //alert(today);
        document.getElementById("datemonth").innerHTML = month;
        //$('#date').text(today);
    }
	
	
	
	
//v_date_str : 2016-01-01
//현재달의 몇번째 주인지, 1~5번째 주, 숫자반환
function getWeekNo(v_date_str) {
	var date = new Date();

	
	if(v_date_str){
		date = new Date(v_date_str);
	}
	return Math.ceil(date.getDate() / 7);
}




	
	
	
});
function _movePage(_num){
	$('.wrapper').fadeOut();
	$(".current").removeClass("current");
	$("#page"+_num).addClass("current");
	$('#wrap'+_num).fadeIn();
}
function _aniText2(_num){
	$('#page2Start').hide();
	$('.wrap2_text').fadeOut();
	$('#text'+_num).fadeIn();
}

function _runAni2(){
	window['timer_2'] = 0;
	_aniText2(window['timer_2']);
	window['ani_2'] = setInterval(function(){
		if (window['timer_2'] < 1){
			
			window['timer_2'] +=1;
			_aniText2(window['timer_2']);
		} else {
			clearInterval(window['ani_2']);
			$('#page2Start').fadeIn();
		}
	}, 3000);
}

function _aniText3(_num){
	$('#page3Start').hide();
	$('.wrap3_text').fadeOut();
	$('#3text'+_num).fadeIn();
}

function _runAni3(){
	window['timer_3'] = 0;
	_aniText3(window['timer_3']);
	window['ani_3'] = setInterval(function(){
		if (window['timer_3'] < 1){
			
			window['timer_3'] +=1;
			_aniText3(window['timer_3']);
		} else {
			clearInterval(window['ani_3']);
			$('#page3Start').fadeIn();
		}
	}, 3000);
}

function _aniText4(_num){
	$('#page4Start').hide();
	$('.wrap4_text').fadeOut();
	$('#4text'+_num).fadeIn();
}

function _runAni4(){
	window['timer_4'] = 0;
	_aniText4(window['timer_4']);
	window['ani_4'] = setInterval(function(){
		if (window['timer_4'] < 1){
			
			window['timer_4'] +=1;
			_aniText4(window['timer_4']);
		} else {
			clearInterval(window['ani_4']);
			$('#page4Start').fadeIn();
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["2017", "2018", "2019"],
					datasets: [{
						label: 'Year',
						data: [12, 19, 15],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					}
				}
			});
		}
	}, 4000);
}

var timer = null;

$('#page1Start').click(function(){
	_movePage(2);
	_runAni2();
});

$('#page2Start').click(function(){
	_movePage(3);
	_runAni3();
});

$(document).ready(function ()
{	

	_movePage(1);
	$('#page1').click(function(){
		_movePage(1);
	});
	
	$('#page2').click(function(){
		_movePage(2);
		_runAni2();
	});
	
	$('#page3').click(function(){
		_movePage(3);
		_runAni3();
	});
	
	$('#page4').click(function(){
		_movePage(4);
		_runAni4();
	});
	
	$('#page5').click(function(){
		_movePage(5);
	});
	
	setTimeout(function(){
		$('#wrapLoading').fadeOut();
	},500);

});


var ctx = document.getElementById("Chart1").getContext('2d');


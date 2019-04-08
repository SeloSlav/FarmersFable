Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.defaultFontSize = 16;
var _chart = {
	chart_0 : {},
	chart_1 : {},
	chart_2 : {},
	chart_3 : {},
	chart_4 : {},
	chart_5 : {},
	chart_6 : {},
	chart_7 : {},
};

_chart.chart_0.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4','Year 5'],
		datasets: [{
		lineTension: 0,
		label: 'Bill',
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_0.show = function(){
	var _chart_0 = document.getElementById('chart_0_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_0');
	
	_chart_0.style.width = _placeHolder_1.style.width;
	_chart_0.style.height = _placeHolder_1.style.height;
	_chart_0.style.top = _placeHolder_1.style.top;
	_chart_0.style.left = _placeHolder_1.style.left;
	_chart_0.style.zIndex = "999";
	var ctx = document.getElementById('chart_0').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_0.style.display = 'block';
	_chart.chart_0.chart = new Chart(ctx, _chart.chart_0.config);
}

_chart.chart_0.update = function(_value){
	if ( _chart.chart_0.config.data.datasets[0].data.length < 5) {
		_chart.chart_0.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_0.config.data.datasets[0].data.push(_value);
		_chart.chart_0.config.data.labels.push("Year "+(parseInt(_chart.chart_0.config.data.datasets[0].data.length)));
	}
	_chart.chart_0.chart.update();
}

_chart.chart_0.reset = function(_value){
	_chart.chart_0.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
	_chart.chart_0.config.data.datasets[0].data = [];
	_chart.chart_0.chart.update();
}

_chart.chart_0.hide = function(_value){
	var _chart_0 = document.getElementById('chart_0_container');
	_chart_0.style.display = 'none';
}
//

_chart.chart_1.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'],
		datasets: [{
		lineTension: 0,
		label: 'Bill',
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_1.show = function(){
	var _chart_1 = document.getElementById('chart_1_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_1');
	
	_chart_1.style.width = _placeHolder_1.style.width;
	_chart_1.style.height = _placeHolder_1.style.height;
	_chart_1.style.top = _placeHolder_1.style.top;
	_chart_1.style.left = _placeHolder_1.style.left;
	_chart_1.style.zIndex = "999";
	var ctx = document.getElementById('chart_1').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_1.style.display = 'block';
	_chart.chart_1.chart = new Chart(ctx, _chart.chart_1.config);
}

_chart.chart_1.update = function(_value){
	if ( _chart.chart_1.config.data.datasets[0].data.length < 5) {
		_chart.chart_1.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_1.config.data.datasets[0].data.push(_value);
		_chart.chart_1.config.data.labels.push("Year "+(parseInt(_chart.chart_1.config.data.datasets[0].data.length)));
	}
	_chart.chart_1.chart.update();
}

_chart.chart_1.reset = function(){
	_chart.chart_1.config.data.datasets[0].data = [];
	_chart.chart_1.chart.update();
	_chart.chart_1.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
}

_chart.chart_1.hide = function(_value){
	var _chart_1 = document.getElementById('chart_1_container');
	_chart_1.style.display = 'none';
}
//
_chart.chart_2.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4','Year 5'],
		datasets: [{
			lineTension: 0,
			label: 'Bill',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(54, 162, 235)",
			borderColor: "rgb(54, 162, 235)",
		},
		{
			label: 'Ann',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgb(255, 99, 132)",
		},
		{
			label: 'Pool',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(0,0,0)",
			borderColor: "rgb(0,0,0)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_2.show = function(){
	var _chart_2 = document.getElementById('chart_2_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_2');
	
	_chart_2.style.width = _placeHolder_1.style.width;
	_chart_2.style.height = _placeHolder_1.style.height;
	_chart_2.style.top = _placeHolder_1.style.top;
	_chart_2.style.left = _placeHolder_1.style.left;
	_chart_2.style.zIndex = "999";
	var ctx = document.getElementById('chart_2').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_2.style.display = 'block';
	_chart.chart_2.chart = new Chart(ctx, _chart.chart_2.config);
}

_chart.chart_2.update_0 = function(_value){
	if ( _chart.chart_2.config.data.datasets[0].data.length < 5) {
		_chart.chart_2.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_2.config.data.datasets[0].data.push(_value);
		_chart.chart_2.config.data.labels.push("Year "+(parseInt(_chart.chart_2.config.data.datasets[0].data.length)));
	}
	_chart.chart_2.chart.update();
}

_chart.chart_2.update_1 = function(_value){
	_chart.chart_2.config.data.datasets[1].data.push(_value);
	_chart.chart_2.chart.update();
}

_chart.chart_2.update_2 = function(_value){
	_chart.chart_2.config.data.datasets[2].data.push(_value);
	_chart.chart_2.chart.update();
}

_chart.chart_2.reset = function(_value){
	_chart.chart_2.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
	_chart.chart_2.config.data.datasets[0].data = [];
	_chart.chart_2.config.data.datasets[1].data = [];
	_chart.chart_2.chart.update();
}

_chart.chart_2.hide = function(_value){
	var _chart_2 = document.getElementById('chart_2_container');
	_chart_2.style.display = 'none';
}
//
_chart.chart_3.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4','Year 5'],
		datasets: [{
			lineTension: 0,
			label: 'Bill',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(54, 162, 235)",
			borderColor: "rgb(54, 162, 235)",
		},
		{
			label: 'Ann',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgb(255, 99, 132)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Not Sharing'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_3.show = function(){
	var _chart_3 = document.getElementById('chart_3_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_3');
	
	_chart_3.style.width = _placeHolder_1.style.width;
	_chart_3.style.height = _placeHolder_1.style.height;
	_chart_3.style.top = _placeHolder_1.style.top;
	_chart_3.style.left = _placeHolder_1.style.left;
	_chart_3.style.zIndex = "999";
	var ctx = document.getElementById('chart_3').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_3.style.display = 'block';
	_chart.chart_3.chart = new Chart(ctx, _chart.chart_3.config);
}

_chart.chart_3.update_0 = function(_value){
	if ( _chart.chart_3.config.data.datasets[0].data.length < 5) {
		_chart.chart_3.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_3.config.data.datasets[0].data.push(_value);
		_chart.chart_3.config.data.labels.push("Year "+(parseInt(_chart.chart_3.config.data.datasets[0].data.length)));
	}
	_chart.chart_3.chart.update();
}

_chart.chart_3.update_1 = function(_value){
	_chart.chart_3.config.data.datasets[1].data.push(_value);
	_chart.chart_3.chart.update();
}

_chart.chart_3.reset = function(_value){
	_chart.chart_3.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
	_chart.chart_3.config.data.datasets[0].data = [];
	_chart.chart_3.chart.update();
}

_chart.chart_3.hide = function(_value){
	var _chart_3 = document.getElementById('chart_3_container');
	_chart_3.style.display = 'none';
}
//
_chart.chart_4.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4','Year 5'],
		datasets: [{
			lineTension: 0,
			label: 'Bill & Ann',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(54, 162, 235)",
			borderColor: "rgb(54, 162, 235)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'With Sharing'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_4.show = function(){
	var _chart_4 = document.getElementById('chart_4_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_4');
	
	_chart_4.style.width = _placeHolder_1.style.width;
	_chart_4.style.height = _placeHolder_1.style.height;
	_chart_4.style.top = _placeHolder_1.style.top;
	_chart_4.style.left = _placeHolder_1.style.left;
	_chart_4.style.zIndex = "999";
	var ctx = document.getElementById('chart_4').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_4.style.display = 'block';
	_chart.chart_4.chart = new Chart(ctx, _chart.chart_4.config);
}

_chart.chart_4.update = function(_value){
	if ( _chart.chart_4.config.data.datasets[0].data.length < 5) {
		_chart.chart_4.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_4.config.data.datasets[0].data.push(_value);
		_chart.chart_4.config.data.labels.push("Year "+(parseInt(_chart.chart_4.config.data.datasets[0].data.length)));
	}
	_chart.chart_4.chart.update();
}

_chart.chart_4.reset = function(_value){
	_chart.chart_4.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
	_chart.chart_4.config.data.datasets[0].data = [];
	_chart.chart_4.chart.update();
}

_chart.chart_4.hide = function(_value){
	var _chart_4 = document.getElementById('chart_4_container');
	_chart_4.style.display = 'none';
}
//
_chart.chart_5.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
		datasets: [{
		lineTension: 0,
		label: 'Bill 10 Years',
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_5.show = function(){
	var _chart_5 = document.getElementById('chart_5_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_5');
	
	_chart_5.style.width = _placeHolder_1.style.width;
	_chart_5.style.height = _placeHolder_1.style.height;
	_chart_5.style.top = _placeHolder_1.style.top;
	_chart_5.style.left = _placeHolder_1.style.left;
	_chart_5.style.zIndex = "999";
	var ctx = document.getElementById('chart_5').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_5.style.display = 'block';
	_chart.chart_5.chart = new Chart(ctx, _chart.chart_5.config);
}

_chart.chart_5.update = function(_value){
	if ( _chart.chart_5.config.data.datasets[0].data.length < 5) {
		_chart.chart_5.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_5.config.data.datasets[0].data.push(_value);
		_chart.chart_5.config.data.labels.push("Year "+(parseInt(_chart.chart_5.config.data.datasets[0].data.length)));
	}
	_chart.chart_5.chart.update();
}

_chart.chart_5.reset = function(_value){
	_chart.chart_5.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5'];
	_chart.chart_5.config.data.datasets[0].data = [];
	_chart.chart_5.chart.update();
}

_chart.chart_5.hide = function(_value){
	var _chart_5 = document.getElementById('chart_5_container');
	_chart_5.style.display = 'none';
}
//
_chart.chart_6.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
		datasets: [{
		lineTension: 0,
		label: 'Bill',
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_6.show = function(){
	var _chart_6 = document.getElementById('chart_6_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_6');
	
	_chart_6.style.width = _placeHolder_1.style.width;
	_chart_6.style.height = _placeHolder_1.style.height;
	_chart_6.style.top = _placeHolder_1.style.top;
	_chart_6.style.left = _placeHolder_1.style.left;
	_chart_6.style.zIndex = "999";
	var ctx = document.getElementById('chart_6').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_6.style.display = 'block';
	_chart.chart_6.chart = new Chart(ctx, _chart.chart_6.config);
}

_chart.chart_6.update = function(_value){
	if ( _chart.chart_6.config.data.datasets[0].data.length < 5) {
		_chart.chart_6.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_6.config.data.datasets[0].data.push(_value);
		_chart.chart_6.config.data.labels.push("Year "+(parseInt(_chart.chart_6.config.data.datasets[0].data.length)));
	}
	_chart.chart_6.chart.update();
}

_chart.chart_6.reset = function(_value){
	_chart.chart_6.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
	_chart.chart_6.config.data.datasets[0].data = [];
	_chart.chart_6.chart.update();
}

_chart.chart_6.hide = function(_value){
	var _chart_6 = document.getElementById('chart_6_container');
	_chart_6.style.display = 'none';
}
//
//
_chart.chart_7.config = {
	type: 'line',
	data: {
		labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5' ,'Year 6' ,'Year 7' ,'Year 8' ,'Year 9' ,'Year 10' ],
		datasets: [{
			label: 'Bill',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(54, 162, 235)",
			borderColor: "rgb(54, 162, 235)",
		},
		{
			label: 'Ann',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgb(255, 99, 132)",
		},
		{
			label: 'Mike',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(230, 230, 250)",
			borderColor: "rgb(230, 230, 250)",
		},
		{
			label: 'John',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(34,139,34)",
			borderColor: "rgb(34,139,34)",
		},
		{
			label: 'Pool',
			lineTension: 0,
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(0,0,0)",
			borderColor: "rgb(0,0,0)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: false,
			text: 'Not Sharing'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: 0,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000000))
							return parseFloat(label/1000).toFixed(2)+" K Kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M Kg";
						else return parseFloat(label).toFixed(1) + " Kg";
					}
				}
			}]
		}
	}
};
_chart.chart_7.show = function(){
	var _chart_7 = document.getElementById('chart_7_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_7');
	
	_chart_7.style.width = _placeHolder_1.style.width;
	_chart_7.style.height = _placeHolder_1.style.height;
	_chart_7.style.top = _placeHolder_1.style.top;
	_chart_7.style.left = _placeHolder_1.style.left;
	_chart_7.style.zIndex = "999";
	var ctx = document.getElementById('chart_7').getContext('2d');
	ctx.canvas.width = $('#placeHolder_1').width();
	ctx.canvas.height = $('#placeHolder_1').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_7.style.display = 'block';
	_chart.chart_7.chart = new Chart(ctx, _chart.chart_7.config);
}

_chart.chart_7.update_0 = function(_value){
	if ( _chart.chart_7.config.data.datasets[0].data.length < 10) {
		_chart.chart_7.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_7.config.data.datasets[0].data.push(_value);
		_chart.chart_7.config.data.labels.push("Year "+(parseInt(_chart.chart_7.config.data.datasets[0].data.length)));
	}
	_chart.chart_7.chart.update();
}

_chart.chart_7.update_1 = function(_value){
	_chart.chart_7.config.data.datasets[1].data.push(_value);
	_chart.chart_7.chart.update();
}

_chart.chart_7.update_2 = function(_value){
	_chart.chart_7.config.data.datasets[2].data.push(_value);
	_chart.chart_7.chart.update();
}

_chart.chart_7.update_3 = function(_value){
	_chart.chart_7.config.data.datasets[3].data.push(_value);
	_chart.chart_7.chart.update();
}

_chart.chart_7.update_4 = function(_value){
	_chart.chart_7.config.data.datasets[4].data.push(_value);
	_chart.chart_7.chart.update();
}

_chart.chart_7.reset = function(_value){
	_chart.chart_7.config.data.labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4' , 'Year 5' ,'Year 6' ,'Year 7' ,'Year 8' ,'Year 9' ,'Year 10' ];
	_chart.chart_7.config.data.datasets[0].data = [];
	_chart.chart_7.config.data.datasets[1].data = [];
	_chart.chart_7.config.data.datasets[2].data = [];
	_chart.chart_7.config.data.datasets[3].data = [];
	_chart.chart_7.config.data.datasets[4].data = [];
	_chart.chart_7.chart.update();
}

_chart.chart_7.hide = function(_value){
	var _chart_7 = document.getElementById('chart_7_container');
	_chart_7.style.display = 'none';
}

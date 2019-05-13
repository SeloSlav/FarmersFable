Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.defaultFontSize = 16;
var _chart = {
	chart_0 : {},
	chart_1 : {},
	chart_2 : {},
	chart_3 : {},
	chart_4 : {},
};

_chart.chart_0.config = {
	type: 'line',
	data: {
		labels: ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4','Harvest 5'],
		datasets: [{
		lineTension: 0,
		label: 'Bill',
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		backgroundColor: "rgb(4, 0, 255)",
		borderColor: "rgb(4, 0, 255)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			enabled: false,
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
					min: 0.01,
					callback: function(label, index, labels) {
						console.log(label);
						
						if ((label >= 1000) && (label < 1000000))
							return parseFloat(label/1000).toFixed(2)+" K kg";
						else if ((label > 1000000) && (label < 1000000000))
							return parseFloat(label/1000000).toFixed(2)+" M kg";
						else if ((label > 1000000000) && (label < 1000000000000))
							return parseFloat(label/1000000000).toFixed(2)+" B kg";
						else if ((label > 1000000000000) && (label < 1000000000000000))
							return parseFloat(label/1000000000000).toFixed(2)+" T kg";
						else return parseFloat(label).toFixed(1) + " kg";
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
		_chart.chart_0.config.data.labels.push("Harvest "+(parseInt(_chart.chart_0.config.data.datasets[0].data.length)));
	}
	_chart.chart_0.chart.update();
}

_chart.chart_0.reset = function(_value){
	_chart.chart_0.config.data.labels = ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'];
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
		labels: ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'],
		datasets: [{
		lineTension: 0,
		label: 'Bill',	
		data: [],
		fill: false,
		fillColor : "rgba(0, 0, 0, 1)",
		strokeColor : "rgba(0, 0, 0, 1)",
		backgroundColor: "rgb(4, 0, 255)",
		borderColor: "rgb(4, 0, 255)",
		}]
	},
	options: {
		responsive: true,
		tooltips: {
			enabled: false,
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
				},
				stepSize: 10,
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: -2,
					beginAtZero: false,
					stepSize: 1,
					callback: function(label, index, labels) {
						if ((label > index) && (label < index + 1))
							return Math.pow(10,parseFloat(label/index).toFixed(2)) + " kg";
						else return Math.pow(10,parseFloat(label).toFixed(1)) + " kg";
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
		_chart.chart_1.config.data.labels.push("Harvest "+(parseInt(_chart.chart_1.config.data.datasets[0].data.length)));
	}
	_chart.chart_1.chart.update();
}

_chart.chart_1.reset = function(){
	_chart.chart_1.config.data.datasets[0].data = [];
	_chart.chart_1.chart.update();
	_chart.chart_1.config.data.labels = ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'];
}

_chart.chart_1.hide = function(_value){
	var _chart_1 = document.getElementById('chart_1_container');
	_chart_1.style.display = 'none';
}
//
_chart.chart_2.config = {
	type: 'line',
	data: {
		labels: ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4','Harvest 5'],
		datasets: [{
			lineTension: 0,
			label: 'Ann',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 0, 0)",
			borderColor: "rgb(255, 0, 0)",
		},{
			lineTension: 0,
			label: 'Bill',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(4, 0, 255)",
			borderColor: "rgb(4, 0, 255)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: ''
		},
		tooltips: {
			enabled: false,
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
				},
				stepSize: 10,
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: -2,
					beginAtZero: false,
					stepSize: 1,
					callback: function(label, index, labels) {
						if ((label > index) && (label < index + 1))
							return Math.pow(10,parseFloat(label/index).toFixed(2)) + " kg";
						else return Math.pow(10,parseFloat(label).toFixed(1)) + " kg";
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
		_chart.chart_2.config.data.labels.push("Harvest "+(parseInt(_chart.chart_2.config.data.datasets[0].data.length)));
	}
	_chart.chart_2.chart.update();
}

_chart.chart_2.update_1 = function(_value){
	_chart.chart_2.config.data.datasets[1].data.push(_value);
	_chart.chart_2.chart.update();
}

_chart.chart_2.reset = function(_value){
	_chart.chart_2.config.data.labels = ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'];
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
		labels: ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4','Harvest 5'],
		datasets: [{
			lineTension: 0,
			label: 'Ann',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 0, 0)",
			borderColor: "rgb(255, 0, 0)",
		},
		{
			lineTension: 0,
			label: 'Bill',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(4, 0, 255)",
			borderColor: "rgb(4, 0, 255)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: ''
		},
		tooltips: {
			enabled: false,
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
				},
				stepSize: 10,
			}],
			yAxes: [{
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: -2,
					beginAtZero: false,
					stepSize: 1,
					callback: function(label, index, labels) {
						if ((label > index) && (label < index + 1))
							return Math.pow(10,parseFloat(label/index).toFixed(2)) + " kg";
						else return Math.pow(10,parseFloat(label).toFixed(1)) + " kg";
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
		_chart.chart_3.config.data.labels.push("Harvest "+(parseInt(_chart.chart_3.config.data.datasets[0].data.length)));
	}
	_chart.chart_3.chart.update();
}

_chart.chart_3.update_1 = function(_value){
	_chart.chart_3.config.data.datasets[1].data.push(_value);
	_chart.chart_3.chart.update();
}

_chart.chart_3.reset = function(_value){
	_chart.chart_3.config.data.labels = ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'];
	_chart.chart_3.config.data.datasets[0].data = [];
	_chart.chart_3.config.data.datasets[1].data = [];
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
		labels: ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5' ],
		datasets: [{
			lineTension: 0,
			label: 'Ann (Alone)',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(249, 117, 117)",
			borderColor: "rgb(249, 117, 117)",
		},
		{
			lineTension: 0,
			label: 'Bill (Alone)',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(116, 119, 249)",
			borderColor: "rgb(116, 119, 249)",
		},
		{
			lineTension: 0,
			label: 'Ann (Cooperating)',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(148,0,211)",
			borderColor: "rgb(148,0,211)",
		},
		{
			lineTension: 0,
			label: 'Bill (Cooperating)',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(148,0,211)",
			borderColor: "rgb(148,0,211)",
		},
		{
			lineTension: 0,
			data: [10,15,10.5,7.35,11.025,16.5375,11.5763,17.3644,26.0466,18.2326,12.7628,8.934,6.2538,4.3776,6.5665,9.8497,6.8948,4.8264,3.3784,2.3649,1.6554,2.4832,3.7247,2.6073,1.8251,2.7377,1.9164,2.8746,2.0122,3.0183,4.5274,3.1692,2.2184,3.3277,4.9915,3.4941,5.2411,7.8616,5.5031,3.8522,2.6965,4.0448,2.8314,1.982,2.9729,2.0811,1.4567,2.1851,3.2777,2.2944,1.6061,2.4091,3.6136,5.4204,8.1306,12.196,8.5372,5.976,8.964,13.446,9.4122,14.1183,9.8828,6.918,10.377,7.2639,5.0847,7.6271,11.4406,17.1609,25.7414,38.6121,27.0285,18.9199,28.3799,19.8659,29.7989,44.6983,31.2888,46.9333,70.3999,105.5998,158.3997,110.8798,77.6159,116.4238,81.4967,57.0477,39.9334,59.9001,89.8501,62.8951,44.0265,30.8186,21.573,15.1011,10.5708,7.3995,5.1797,7.7695],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(249, 117, 117)",
			borderColor: "rgb(249, 117, 117)",
		},
		{
			lineTension: 0,
			data: [10,15,10.5,15.75,11.025,16.5375,24.8063,17.3644,12.1551,18.2326,12.7628,8.934,6.2538,4.3776,3.0644,4.5965,3.2176,2.2523,3.3784,5.0677,7.6015,11.4023,7.9816,5.5871,3.911,2.7377,4.1065,2.8746,2.0122,1.4085,2.1128,1.479,1.0353,0.7247,0.5073,0.7609,0.5326,0.799,0.5593,0.3915,0.5872,0.8809,0.6166,0.4316,0.6474,0.9712,1.4567,1.0197,1.5296,2.2944,3.4415,5.1623,3.6136,2.5295,1.7707,1.2395,0.8676,1.3014,1.9522,2.9282,4.3924,3.0747,2.1523,1.5066,2.2599,1.5819,2.3729,1.661,2.4915,3.7373,5.6059,3.9241,5.8862,8.8293,6.1805,4.3264,3.0285,4.5427,3.1799,2.2259,3.3389,5.0083,3.5058,5.2587,7.8881,11.8321,8.2825,5.7977,8.6966,13.0449,19.5674,13.6971,20.5457,14.382,21.573,32.3595,48.5393,33.9775,50.9662,35.6764],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(116, 119, 249)",
			borderColor: "rgb(116, 119, 249)",
		},
		{
			lineTension: 0,
			data: [10,15,10.5,11.55,12.705,19.0575,20.9633,23.0596,25.3655,27.9021,19.5315,13.672,9.5704,6.6993,7.3692,11.0538,7.7377,5.4164,5.958,6.5538,7.2092,10.8138,11.8952,8.3266,5.8286,6.4115,7.0526,7.7579,5.4305,5.9736,8.9604,6.2723,4.3906,4.8297,5.3126,5.8439,6.4283,9.6424,6.7497,4.7248,5.1973,7.7959,5.4571,3.82,5.73,6.303,6.9333,7.6266,11.4399,12.5839,13.8423,20.7634,22.8397,25.1237,27.6361,30.3997,21.2798,23.4078,35.1116,52.6675,57.9342,63.7276,44.6093,31.2265,46.8398,32.7879,36.0666,39.6733,59.51,89.265,133.8974,147.2872,162.0159,178.2175,196.0392,137.2275,150.9502,226.4253,158.4977,174.3475,261.5212,392.2818,431.51,474.661,522.1271,783.1907,548.2335,383.7634,422.1398,633.2097,949.8145,664.8702,731.3572,511.95,563.145,619.4595,681.4055,476.9838,524.6822,577.1504],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(148,0,211)",
			borderColor: "rgb(148,0,211)",
		},
		{
			lineTension: 0,
			data: [10,15,10.5,11.55,12.705,19.0575,20.9633,23.0596,25.3655,27.9021,19.5315,13.672,9.5704,6.6993,7.3692,11.0538,7.7377,5.4164,5.958,6.5538,7.2092,10.8138,11.8952,8.3266,5.8286,6.4115,7.0526,7.7579,5.4305,5.9736,8.9604,6.2723,4.3906,4.8297,5.3126,5.8439,6.4283,9.6424,6.7497,4.7248,5.1973,7.7959,5.4571,3.82,5.73,6.303,6.9333,7.6266,11.4399,12.5839,13.8423,20.7634,22.8397,25.1237,27.6361,30.3997,21.2798,23.4078,35.1116,52.6675,57.9342,63.7276,44.6093,31.2265,46.8398,32.7879,36.0666,39.6733,59.51,89.265,133.8974,147.2872,162.0159,178.2175,196.0392,137.2275,150.9502,226.4253,158.4977,174.3475,261.5212,392.2818,431.51,474.661,522.1271,783.1907,548.2335,383.7634,422.1398,633.2097,949.8145,664.8702,731.3572,511.95,563.145,619.4595,681.4055,476.9838,524.6822,577.1504],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(148,0,211)",
			borderColor: "rgb(148,0,211)",
		}]
	},
	options: {
		responsive: true,
		title: {
			display: false,
			text: ''
		},
		tooltips: {
			enabled: false,
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				min: 0,
				display: true,
				scaleLabel: {
					display: true
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				scaleLabel: { labelString: [] },
				ticks: {
					min: -2,
					beginAtZero: false,
					stepSize: 1,
					callback: function(label, index, labels) {
						if ((label > index) && (label < index + 1))
							return Math.pow(10,parseFloat(label/index).toFixed(2)) + " kg";
						else return Math.pow(10,parseFloat(label).toFixed(1)) + " kg";
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

_chart.chart_4.update_0 = function(_value){
	if ( _chart.chart_4.config.data.datasets[0].data.length < 5) {
		_chart.chart_4.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_4.config.data.datasets[0].data.push(_value);
		_chart.chart_4.config.data.labels.push("Harvest "+(parseInt(_chart.chart_4.config.data.datasets[0].data.length)));
	}
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_1 = function(_value){
	_chart.chart_4.config.data.datasets[1].data.push(_value);
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_2 = function(_value){
	_chart.chart_4.config.data.datasets[2].data.push(_value);
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_3 = function(_value){
	_chart.chart_4.config.data.datasets[3].data.push(_value);
	_chart.chart_4.chart.update();
}

/* Pre-Determined Trajectories */
_chart.chart_4.update_4 = function(){
	if ( _chart.chart_4.config.data.datasets[4].data.length < 5) {
		_chart.chart_4.config.data.datasets[4].data.push();
	} else {
		_chart.chart_4.config.data.datasets[4].data.push();
		_chart.chart_4.config.data.labels.push("Harvest "+(parseInt(_chart.chart_4.config.data.datasets[4].data.length)));
	}
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_5 = function(){
	_chart.chart_4.config.data.datasets[5].data.push();
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_6 = function(){
	_chart.chart_4.config.data.datasets[6].data.push();
	_chart.chart_4.chart.update();
}

_chart.chart_4.update_7 = function(){
	_chart.chart_4.config.data.datasets[7].data.push();
	_chart.chart_4.chart.update();
}

_chart.chart_4.reset = function(_value){
	_chart.chart_4.config.data.labels = ['Harvest 1', 'Harvest 2', 'Harvest 3', 'Harvest 4' , 'Harvest 5'];
	_chart.chart_4.config.data.datasets[0].data = [];
	_chart.chart_4.config.data.datasets[1].data = [];
	_chart.chart_4.config.data.datasets[2].data = [];
	_chart.chart_4.config.data.datasets[3].data = [];
	/* Pre-Determined Trajectories */
	_chart.chart_4.config.data.datasets[4].data = [];
	_chart.chart_4.config.data.datasets[5].data = [];
	_chart.chart_4.config.data.datasets[6].data = [];
	_chart.chart_4.config.data.datasets[7].data = [];
	_chart.chart_4.chart.update();
}

_chart.chart_4.hide = function(_value){
	var _chart_4 = document.getElementById('chart_4_container');
	_chart_4.style.display = 'none';
}

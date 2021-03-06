Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.defaultFontSize = 16;
var _chart = {
	chart_0 : {},
	chart_1 : {},
	chart_2 : {},
	chart_3 : {},
	chart_4 : {},
	chart_5 : {},
};

_chart.chart_0.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4','5'],
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
 		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
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
		_chart.chart_0.config.data.labels.push((parseInt(_chart.chart_0.config.data.datasets[0].data.length)));
	}
	_chart.chart_0.chart.update();
}

_chart.chart_0.reset = function(_value){
	_chart.chart_0.config.data.labels = ['1', '2', '3', '4' , '5'];
	_chart.chart_0.config.data.datasets[0].data = [];
	_chart.chart_0.chart.update();
}

_chart.chart_0.hide = function(_value){
	var _chart_0 = document.getElementById('chart_0_container');
	_chart_0.style.display = 'none';
}

_chart.chart_0.remove = function(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
//

_chart.chart_1.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4' , '5'],
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
 		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
				}
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
		_chart.chart_1.config.data.labels.push((parseInt(_chart.chart_1.config.data.datasets[0].data.length)));
	}
	_chart.chart_1.chart.update();
}

_chart.chart_1.reset = function(){
	_chart.chart_1.config.data.datasets[0].data = [];
	_chart.chart_1.chart.update();
	_chart.chart_1.config.data.labels = ['1', '2', '3', '4' , '5'];
}

_chart.chart_1.hide = function(_value){
	var _chart_1 = document.getElementById('chart_1_container');
	_chart_1.style.display = 'none';
}

_chart.chart_1.remove = function(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
//
_chart.chart_2.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4','5'],
		datasets: [{
			lineTension: 0,
			label: 'Ann (Alone)',
			data: [],
			fill: false,
			fillColor : "rgba(0, 0, 0, 1)",
			strokeColor : "rgba(0, 0, 0, 1)",
			backgroundColor: "rgb(255, 0, 0)",
			borderColor: "rgb(255, 0, 0)",
		},{
			lineTension: 0
,			label: 'Bill (Alone)',
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
		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
				}
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
		_chart.chart_2.config.data.labels.push((parseInt(_chart.chart_2.config.data.datasets[0].data.length)));
	}
	_chart.chart_2.chart.update();
}

_chart.chart_2.update_1 = function(_value){
	_chart.chart_2.config.data.datasets[1].data.push(_value);
	_chart.chart_2.chart.update();
}

_chart.chart_2.reset = function(_value){
	_chart.chart_2.config.data.labels = ['1', '2', '3', '4' , '5'];
	_chart.chart_2.config.data.datasets[0].data = [];
	_chart.chart_2.config.data.datasets[1].data = [];
	_chart.chart_2.chart.update();
}

_chart.chart_2.hide = function(_value){
	var _chart_2 = document.getElementById('chart_2_container');
	_chart_2.style.display = 'none';
}

_chart.chart_2.remove = function(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
//
_chart.chart_3.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4','5'],
		datasets: [{
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
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: ''
		},
		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
				}
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
		_chart.chart_3.config.data.labels.push((parseInt(_chart.chart_3.config.data.datasets[0].data.length)));
	}
	_chart.chart_3.chart.update();
}

_chart.chart_3.update_1 = function(_value){
	_chart.chart_3.config.data.datasets[1].data.push(_value);
	_chart.chart_3.chart.update();
}

_chart.chart_3.reset = function(_value){
	_chart.chart_3.config.data.labels = ['1', '2', '3', '4' , '5'];
	_chart.chart_3.config.data.datasets[0].data = [];
	_chart.chart_3.config.data.datasets[1].data = [];
	_chart.chart_3.chart.update();	
}

_chart.chart_3.hide = function(_value){
	var _chart_3 = document.getElementById('chart_3_container');
	_chart_3.style.display = 'none';
}

_chart.chart_3.remove = function(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
//
_chart.chart_4.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4' , '5' ],
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
		}]
	},
	options: {
		responsive: true,
		title: {
			display: false,
			text: ''
		},
		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
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
		_chart.chart_4.config.data.labels.push((parseInt(_chart.chart_4.config.data.datasets[0].data.length)));
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

_chart.chart_4.reset = function(_value){
	_chart.chart_4.config.data.labels = ['1', '2', '3', '4' , '5'];
	_chart.chart_4.config.data.datasets[0].data = [];
	_chart.chart_4.config.data.datasets[1].data = [];
	_chart.chart_4.config.data.datasets[2].data = [];
	_chart.chart_4.config.data.datasets[3].data = [];
	_chart.chart_4.chart.update();
}

_chart.chart_4.hide = function(_value){
	var _chart_4 = document.getElementById('chart_4_container');
	_chart_4.style.display = 'none';
}

_chart.chart_4.destroyAndReplace = function(elementId, canvasId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    var p = document.getElementById("c2canvasdiv");
    var newElement = document.createElement("div");
    newElement.setAttribute("id", elementId);
    newElement.setAttribute("style", "position: absolute;")
    newElement.innerHTML = "<canvas id=\"" + canvasId + "\"></canvas>";
    p.appendChild(newElement);
}

_chart.chart_5.config = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4' , '5' ],
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
		}]
	},
	options: {
		responsive: true,
		title: {
			display: false,
			text: ''
		},
		legend: {
        	display: false
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
					display: true,
					labelString: 'Harvest'
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
_chart.chart_5.show = function(){
	var _chart_5 = document.getElementById('chart_5_container');
	
	window._placeHolder_1 = document.getElementById('placeHolder_5');
	
	_chart_5.style.width = _placeHolder_1.style.width;
	_chart_5.style.height = _placeHolder_1.style.height;
	_chart_5.style.top = _placeHolder_1.style.top;
	_chart_5.style.left = _placeHolder_1.style.left;
	_chart_5.style.zIndex = "999";
	var ctx = document.getElementById('chart_5').getContext('2d');
	ctx.canvas.width = $('#placeHolder_5').width();
	ctx.canvas.height = $('#placeHolder_5').height();
	ctx.canvas.originalwidth = ctx.canvas.width;
	ctx.canvas.originalheight = ctx.canvas.height;
	_chart_5.style.display = 'block';
	_chart.chart_5.chart = new Chart(ctx, _chart.chart_5.config);
}
_chart.chart_5.update_0 = function(_value){
	if ( _chart.chart_5.config.data.datasets[0].data.length < 5) {
		_chart.chart_5.config.data.datasets[0].data.push(_value);
	} else {
		_chart.chart_5.config.data.datasets[0].data.push(_value);
		_chart.chart_5.config.data.labels.push((parseInt(_chart.chart_5.config.data.datasets[0].data.length)));
	}
	_chart.chart_5.chart.update();
}

_chart.chart_5.update_1 = function(_value){
	_chart.chart_5.config.data.datasets[1].data.push(_value);
	_chart.chart_5.chart.update();
}

_chart.chart_5.update_2 = function(_value){
	_chart.chart_5.config.data.datasets[2].data.push(_value);
	_chart.chart_5.chart.update();
}

_chart.chart_5.update_3 = function(_value){
	_chart.chart_5.config.data.datasets[3].data.push(_value);
	_chart.chart_5.chart.update();
}

_chart.chart_5.reset = function(_value){
	_chart.chart_5.config.data.labels = ['1', '2', '3', '4' , '5'];
	_chart.chart_5.config.data.datasets[0].data = [];
	_chart.chart_5.config.data.datasets[1].data = [];
	_chart.chart_5.config.data.datasets[2].data = [];
	_chart.chart_5.config.data.datasets[3].data = [];
	_chart.chart_5.chart.update();
}

_chart.chart_5.hide = function(_value){
	var chart_5 = document.getElementById('chart_5_container');
	chart_5.style.display = 'none';
}

_chart.chart_5.remove = function(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
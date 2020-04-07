var canvas = document.getElementById("gradeBreakdown");
var parent = document.getElementById("canvasParent");
canvas.width = parent.offsetWidth;
Chart.defaults.global.responsive = true;
var colors = ["#F7464A", "#46BFBD", "#FDB45C", "#BF7130", "#39E639"]
var highlights = ["#FF5A5E", "#5AD3D1", "#FFC870", "#BF8140", "#49E649"]
var data = [
]
var ctx = document.getElementById("gradeBreakdown").getContext("2d");
var myNewChart = new Chart(ctx).Doughnut(data, []);

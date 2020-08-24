var canvas = document.getElementById("gradeBreakdown");
var parent = document.getElementById("canvasParent");
canvas.width = parent.offsetWidth;
Chart.defaults.global.responsive = true;
var colors = ["#F7464A", "#46BFBD", "#FDB45C", "#BF7130", "#39E639"]
var highlights = ["#FF5A5E", "#5AD3D1", "#FFC870", "#BF8140", "#49E649"]
var data = [
  {
    value: "30",
    color: colors[0],
    highlight: highlights[0],
    label: "Homework"
  },
  {
    value: "42",
    color: colors[1],
    highlight: highlights[1],
    label: "max(Midterm; Final)"
  },
  {
    value: "28",
    color: colors[2],
    highlight: highlights[2],
    label: "min(Midterm; Final)"
  }
]
var ctx = document.getElementById("gradeBreakdown").getContext("2d");
var myNewChart = new Chart(ctx).Doughnut(data, []);

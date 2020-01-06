var now = new Date();
var startSunday = new Date("25/8/2019");
var dateArray = [];
for (i = 1; i < 20; i++) {
  var newDate = new Date(startSunday.getTime());
  dateArray.push(newDate.setDate(startSunday.getDate() + 7 * i));
}

if (now.getTime() < dateArray[0]){
  document.getElementById("wk0").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[1]){
  document.getElementById("wk1").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[2]){
  document.getElementById("wk2").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[3]){
  document.getElementById("wk3").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[4]){
  document.getElementById("wk4").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[5]){
  document.getElementById("wk5").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[6]){
  document.getElementById("wk6").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[7]){
  document.getElementById("wk7").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[8]){
  document.getElementById("wk8").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[9]){
  document.getElementById("wk9").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[10]){
  document.getElementById("wk10").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[11]){
  document.getElementById("wk11").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[12]){
  document.getElementById("wk12").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[13]){
  document.getElementById("wk13").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[14]){
  document.getElementById("wk14").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[15]){
  document.getElementById("wk15").style.background = "rgba(133, 230, 133, 0.4)";
}
else if (now.getTime() < dateArray[16]){
  document.getElementById("wk16").style.background = "rgba(133, 230, 133, 0.4)";
}

var now = new Date();
var startSunday = new Date("");
var dateArray = [];
for (i = 1; i < 20; i++) {
  var newDate = new Date(startSunday.getTime());
  dateArray.push(newDate.setDate(startSunday.getDate() + 7 * i));
}


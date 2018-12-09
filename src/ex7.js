// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

// var weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
let defaultsundaytext = document.getElementById("sundays").innerHTML;
console.log(defaultsundaytext);
let tempsundays = [];
for (i = 2014; i <= 2050; i++) {
  let loopdate = new Date(i, 0, 1);
  if (loopdate.getDay() == 0) {
    console.log(i);
    tempsundays.push(i);
    console.log(tempsundays);
  }
}
console.log(tempsundays);
defaultsundaytext = defaultsundaytext + "\n";
//console.log(tempsundays);
for (item of tempsundays) {
  defaultsundaytext = defaultsundaytext + String(item) + "\n";
}
document.getElementById("sundays").innerHTML = defaultsundaytext;

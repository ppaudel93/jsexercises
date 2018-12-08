// 1. Write a JavaScript program to display the current day and time in the format:
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = date.getDay();
console.log("Today is : " + weekday[day] + ".");
let hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds();
let amorpm;
hours < 12 ? (amorpm = "AM") : (amorpm = "PM");
hours > 12 ? (hours = hours - 12) : (hours = hours);
console.log(
  "Current time is : " +
    hours +
    " " +
    amorpm +
    " : " +
    minutes +
    " : " +
    seconds
);

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
setInterval(() => {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  let amorpm;
  hours < 12 ? (amorpm = "AM") : (amorpm = "PM");
  hours > 12 ? (hours = hours - 12) : (hours = hours);
  document.getElementById("timedatehead").innerHTML = `Today is : ${
    weekday[day]
  }. Current time is : ${hours} ${amorpm} : ${minutes} : ${seconds}`;
}, 1000);
let day = date.getDay();
let hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds();
let amorpm;
hours < 12 ? (amorpm = "AM") : (amorpm = "PM");
hours > 12 ? (hours = hours - 12) : (hours = hours);
document.getElementById("timedatehead").innerHTML = `Today is : ${
  weekday[day]
}. Current time is : ${hours} ${amorpm} : ${minutes} : ${seconds}`;

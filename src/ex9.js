// 9. Write a JavaScript program to calculate days left until next Christmas.
setInterval(() => {
  let currentdate = new Date();
  let difference;
  if (currentdate.getMonth() == 11 && currentdate.getUTCDate() > 25) {
    difference = new Date(currentdate.getFullYear() + 1, 11, 25) - currentdate;
    document.getElementById(
      "christmasmilscalculator"
    ).innerHTML = `${difference} Milliseconds left until christmas`;
  } else if (currentdate.getMonth() == 11 && currentdate.getUTCDate() == 25) {
    document.getElementById("christmasmilscalculator").style.display = "none";
    document.getElementById("christmassecondcalculator").style.display = "none";
  } else {
    difference = new Date(currentdate.getFullYear(), 11, 25) - currentdate;
    document.getElementById(
      "christmasmilscalculator"
    ).innerHTML = `${difference} Milliseconds left until christmas`;
  }
}, 1);
setInterval(() => {
  let currentdate = new Date();
  let difference;
  if (currentdate.getMonth() == 11 && currentdate.getUTCDate() > 25) {
    difference =
      (new Date(currentdate.getFullYear() + 1, 11, 25) - currentdate) /
      (1000 * 60 * 60 * 24);
    document.getElementById("christmascalculator").innerHTML = `${Math.ceil(
      difference
    )} Days left until christmas`;
    document.getElementById(
      "christmassecondcalculator"
    ).innerHTML = `${Math.floor(
      difference * 60 * 60 * 24
    )} Seconds left until christmas`;
  } else if (currentdate.getMonth() == 11 && currentdate.getUTCDate() == 25) {
    document.getElementById("christmascalculator").innerHTML =
      "It is Christmas Today. Enjoy Your Day.";
    document.getElementById("christmassecondcalculator").style.display = "none";
  } else {
    difference =
      (new Date(currentdate.getFullYear(), 11, 25) - currentdate) /
      (1000 * 60 * 60 * 24);
    document.getElementById("christmascalculator").innerHTML = `${Math.ceil(
      difference
    )} Days left until christmas`;
    document.getElementById(
      "christmassecondcalculator"
    ).innerHTML = `${Math.floor(
      difference * 60 * 60 * 24
    )} Seconds left until christmas`;
  }
}, 1000);
let currentdate = new Date();
console.log(currentdate.getUTCDate());
console.log(currentdate.getMonth());
let difference;
if (currentdate.getMonth() == 11 && currentdate.getUTCDate() > 25) {
  difference = Math.ceil(
    (new Date(currentdate.getFullYear() + 1, 11, 25) - currentdate) /
      (1000 * 60 * 60 * 24)
  );
  document.getElementById(
    "christmassecondcalculator"
  ).innerHTML = `${difference * 60 * 60 * 24} Seconds left until christmas`;
  document.getElementById(
    "christmascalculator"
  ).innerHTML = `${difference} Days left until christmas`;
} else if (currentdate.getMonth() == 11 && currentdate.getUTCDate() == 25) {
  document.getElementById("christmascalculator").innerHTML =
    "It is Christmas Today. Enjoy Your Day.";
} else {
  difference = Math.ceil(
    (new Date(currentdate.getFullYear(), 11, 25) - currentdate) /
      (1000 * 60 * 60 * 24)
  );
  document.getElementById(
    "christmascalculator"
  ).innerHTML = `${difference} Days left until christmas`;
}

// console.log(currentdate);
// let difference = new Date(currentdate.getFullYear(), 11, 10) - currentdate;
// console.log(difference);
// console.log(Math.ceil(difference / (1000 * 60 * 60 * 24)));
// console.log(new Date(currentdate.getFullYear() - 1, 11, 25));

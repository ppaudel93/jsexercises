// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function onLeapYearClick() {
  let yearvalue = parseInt(document.getElementById("leapyearinput").value);
  let outputheader = document.getElementById("leapyearoutput");
  let isLeap = yearvalue => new Date(yearvalue, 1, 29).getDate() === 29;
  isLeap(yearvalue)
    ? (outputheader.innerHTML = "The Entered Year is a Leap Year.")
    : (outputheader.innerHTML = "The Entered Year is not a Leap Year.");

  //older method
  //incomplete

  // if (typeof yearvalue === "number") {
  //   if (yearvalue / 4) {
  //     if (yearvalue / 100) {
  //       if (yearvalue / 400) {
  //         document.getElementById("leapyearoutput").innerHTML =
  //           "The Entered Year is a Leap Year.";
  //         console.log("mod 400 is 0");
  //         console.log(yearvalue);
  //       } else {
  //         document.getElementById("leapyearoutput").innerHTML =
  //           "The Entered Year is not a Leap Year.";
  //         console.log("mod 100 is 0");
  //         console.log(yearvalue);
  //       }
  //     } else {
  //       document.getElementById("leapyearoutput").innerHTML =
  //         "The Entered Year is a Leap Year.";
  //       console.log("mod 4 is 0");
  //       console.log(yearvalue);
  //     }
  //   }
  // } else {
  //   document.getElementById("leapyearoutput").innerHTML =
  //     "Error. Please Enter a valid year.";
  // }
}

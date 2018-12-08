// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function onLeapYearClick() {
  let yearvalue = Number(document.getElementById("leapyearinput").value);
  //   console.log(Number(yearvalue));
  console.log(typeof yearvalue);
  if (typeof yearvalue === "number") {
    if (yearvalue % 4 == 0) {
      if (yearvalue % 100 == 0) {
        if (yearvalue % 400 == 0) {
          document.getElementById("leapyearoutput").innerHTML =
            "The Entered Year is a Leap Year.";
        } else {
          document.getElementById("leapyearoutput").innerHTML =
            "The Entered Year is not a Leap Year.";
        }
      } else {
        document.getElementById("leapyearoutput").innerHTML =
          "The Entered Year is a Leap Year.";
      }
    }
  } else {
    document.getElementById("leapyearoutput").innerHTML =
      "Error. Please Enter a valid year.";
  }
}

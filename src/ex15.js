// 15. Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference.

function absDifferenceDoubler() {
  let inputnumber = Number(
    document.getElementById("absdiffdoublerinput").value
  );
  let outputheader = document.getElementById("absdiffdoubleroutput");
  let tempdiff = Math.abs(inputnumber - 13);
  console.log(tempdiff);
  outputheader.innerHTML = `Absolute difference between ${inputnumber} and 13 is ${tempdiff}. 2 times the absolute difference is ${2 *
    tempdiff}`;
  outputheader.style.display = "block";
}

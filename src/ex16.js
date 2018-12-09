// 16. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.

function summerAndTripler() {
  let num1 = Number(document.getElementById("summertriplerinput1").value);
  let num2 = Number(document.getElementById("summertriplerinput2").value);
  let outputheader = document.getElementById("summertripleroutput");
  if (num1 == num2) {
    let temp = 3 * (num1 + num2);
    outputheader.innerHTML = `Same numbers found. Their sum, tripled is ${temp}.`;
    outputheader.style.display = "block";
  } else {
    let temp = num1 + num2;
    outputheader.innerHTML = `Different numbers found. Their sum is ${temp}.`;
    outputheader.style.display = "block";
  }
}

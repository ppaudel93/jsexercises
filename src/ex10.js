// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

let num1, num2;
function getValueFromInputs() {
  num1 = Number(document.getElementById("firstnummuldiv").value);
  num2 = Number(document.getElementById("secondnummuldiv").value);
}
function onMultiplyClick() {
  getValueFromInputs();
  let mul = num1 * num2;
  document.getElementById(
    "mulDivResult"
  ).innerHTML = `${num1} times ${num2} is ${mul}`;
  document.getElementById("mulDivResult").style.display = "block";
}
function onDivideClick() {
  getValueFromInputs();
  let div = num1 / num2;
  document.getElementById(
    "mulDivResult"
  ).innerHTML = `${num1} divided by ${num2} is ${div}`;
  document.getElementById("mulDivResult").style.display = "block";
}

// 13. Write a JavaScript exercise to create a variable using a user-defined name.

function customUserGivenVariable() {
  let userEnteredVar = prompt("Enter a name for the variable");
  window[userEnteredVar] = prompt("Enter value for the new variable");
  alert(`${userEnteredVar} = ${window[userEnteredVar]}`);
}

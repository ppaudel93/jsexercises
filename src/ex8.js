// 8. Write a JavaScript program where the program takes a random integer between
//1 to 10, the user is then prompted to input a guess number. If the user input matches
//with guess number, the program will display a message "Good Work" otherwise
//display a message "Not matched".

function randomNumberGuesser() {
  let randomNumber = Math.round(Math.random() * (10 - 1) + 1);
  console.log(randomNumber);
  let enteredNumber = Number(prompt("Enter a number between 1 and 10."));
  console.log(enteredNumber);
  if (enteredNumber == randomNumber) {
    alert("Congratulations. Your guess was correct. You win.");
  } else {
    alert("Alas! Your guess was incorrect. You lose.");
  }
}

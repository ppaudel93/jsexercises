// 5. Write a JavaScript program to rotate the string 'w3resource'
// in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let toRotate = "w3resource";
let arrayString = [];
for (i = 0; i < toRotate.length; i++) {
  arrayString.push(toRotate[i]);
}
document.getElementById("shiftingstring").innerHTML = toRotate;
setInterval(() => {
  let popped = arrayString.pop();
  let temp = "";
  arrayString.unshift(popped);
  for (let item of arrayString) {
    temp = temp + item;
  }
  document.getElementById("shiftingstring").innerHTML = temp;
}, 300);

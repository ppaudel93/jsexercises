// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
let tempoptions = ["celsius", "fahrenheit"];
let inputtemp;
let fromoption;
let tooption;
let ctof = celsius => celsius * (9 / 5) + 32;
let ftoc = fahrenheit => (fahrenheit - 32) * (5 / 9);
function displayConversion(outputt) {
  let output = `${inputtemp} ${tempoptions[fromoption]} = ${outputt} ${
    tempoptions[tooption]
  }`;

  console.log(output);

  document.getElementById("tempconvertoutput").innerHTML = output;
  document.getElementById("tempconvertoutput").style.display = "block";
}
console.log("ex11" + outputtemp + inputtemp + fromoption + tooption);
function tempCalculator() {
  inputtemp = Number(document.getElementById("tempconvertinput").value);
  fromoption = document.getElementById("fromtemperature").options.selectedIndex;
  tooption = document.getElementById("totemperature").options.selectedIndex;
  console.log("temp calculator");
  if (fromoption == tooption) {
    displayConversion(inputtemp);
  }
  if (fromoption == "0" && tooption == "1") {
    displayConversion(ctof(inputtemp));
  } else if (fromoption == "1" && tooption == "0") {
    displayConversion(ftoc(inputtemp));
  }
}

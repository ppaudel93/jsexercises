// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date();
let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate();
document.getElementById("datehead").innerHTML =
  month + 1 + "-" + day + "-" + year;

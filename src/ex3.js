// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date2 = new Date();
let year2 = date2.getFullYear(),
  month2 = date2.getMonth(),
  day2 = date2.getDate();
document.getElementById("datehead").innerHTML =
  month2 + 1 + "-" + day2 + "-" + year2;

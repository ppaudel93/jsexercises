// 14. Write a JavaScript exercise to get the extension of a filename.

function extractFilename() {
  let tempstring = "";
  let i = 0;
  let filename = prompt("Enter the name of the file");
  for (i = filename.length; filename[i] != "."; i--) {
    console.log(i);
    if (i == -1) {
      break;
    }
  }
  for (let j = i + 1; j < filename.length; j++) {
    tempstring = tempstring + filename[j];
  }
  alert("Extension = " + tempstring);
}

//alternative
// filename = "system.php"
// console.log(filename.split('.').pop());

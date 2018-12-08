// 4. Write a JavaScript program to find the area of a triangle where
//lengths of the three of its sides are 5, 6, 7.
let a = 5,
  b = 6,
  c = 7;
let s = (a + b + c) / 2;
rtarea = s * (s - a) * (s - b) * (s - c);
let area = Math.sqrt(rtarea);
document.getElementById(
  "areahead"
).innerHTML = `Area of triangle with side 5 6 and 7 is ${area}`;

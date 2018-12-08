for (let i = 1; i < 101; i++) {
  i % 3 == 0 && i % 5 == 0
    ? console.log("FizzBuzz")
    : i % 5 == 0
    ? console.log("Buzz")
    : i % 3 == 0
    ? console.log("Fizz")
    : console.log(i);
}

let txt = "jgmscisnhasdasdhasdasdasdh";
console.log(txt.indexOf("h"));

console.log(txt.slice(5, 10));
console.log(new Date());

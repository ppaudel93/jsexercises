function showDetails(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

let asdf = [1, 2, 3, 4];

showDetails(...asdf);

let a = new Set();
a.add(1);
a.add("asd");
a.add("ffd");

let newarray = [1, 2, 3, "asd", "fgd", 4, 5];

//doesnt add
a.add("asd");
console.log(a);

for (let item of a) {
  console.log(item);
}

for (let item of newarray) {
  console.log(item);
}

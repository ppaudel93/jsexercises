let a = new Map();

a.set("1st", 10);
a.set("2nd", 20);
//replaces 1st
console.log(a.get("1st"));
a.set("1st", 30);

console.log(a);

for (let [c, b] of a) {
  console.log("Key: " + c + "\tValue: " + b);
}

a.forEach((value, key) => {
  value++;
  console.log(value + " " + key);
});

let newObject = {
  key1: "This is key1",
  key2: "This is key2"
};

let { key1, key2 } = newObject;
console.log(key1 + key2);

//object keys should be named like variables, map can have any key.
//# sourceMappingURL=mapexample.js.map
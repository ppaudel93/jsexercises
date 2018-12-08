let a = new Map();

let time = new Date().toLocaleTimeString();
let date = new Date().toLocaleDateString();

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

newObject.key3 = "This is key3";

let newObject2 = { newObject, test: "asdasdasd" };

let { key1, key2 } = newObject;
console.log(newObject2);
console.log(date + ": " + time);

//object keys should be named like variables, map can have any key.

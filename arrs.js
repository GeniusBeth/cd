let fruit = ["🍎", "🍍", "🍐"];
let fruit2 = fruit.splice(1, 1);
console.log(fruit[0]);
console.log(fruit2, fruit);

let basket = ["🍎", "🍍", "🍐"];

let reuest = 2;
let requestedFruit = basket.splice(0, reuest);

console.log(`we kindly gave out ${requestedFruit}`);
console.log(`we have ${basket} remainining`);

let names = ["Se", "If", "Co", "Im", "Ko"];
names.sort();
console.log(names);

names.sort((ele1, ele2) => ele2.localeCompare(ele1));

console.log(names);

console.log("c".localeCompare("C"));

console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
console.log("Hi lord wicked");
let counter = 0;
let condition = true;
// for(; condition;){
//     console.log(`${counter}`)
//     counter++
//     if(counter <=10) condition=false;
// }
for (let counter2 = 0; counter2 < 10; counter2++) {
  console.log(counter2);
}

// for(let i =0; i < names.length; i++){
//     let pos = i+1;
//     console.log(`The number ${pos} person is ${names[i]}`)
// }

// for (let i = 0; i < names.length; i++) {
//   if (i % 2 != 0) {
//     let pos = i + 1;
//     console.log(`The number ${pos} person is ${names[i]}`);
//   }
// }

for(let i =1; i < names.length; i+=2){
    let pos = i+1;
    console.log(`The number ${pos} person is ${names[i]}`)
}

let basket2 = ["🍎", "🍍", "🍐", "🍎"];
basket2["name"]="james"

// let result = -1;
// for (let i = 0; i < basket2.length; i += 1) {
//   if (basket2[i] == "🍌") {
//     result = -1;
//     break;
//   }
// }

let result = -1;
for (let i = 0; (i < basket2.length && result == -1); i += 1) {
  if (basket2[i] == "🍎") {
    result = i;
  }
}
for(let i = 0; i<basket2.length; i++){
    console.log(basket2[i])
}
for(let fruit of basket2){
    console.log(fruit)
}

for(let i in basket2){
    console.log(basket2[i])
    break
}
console.log(result)


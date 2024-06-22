const age = "25";
let newAge = 25;
let arr = [];
let nil = null;
let bool = true;
let ud;
let type = typeof age;
console.log(
  type,
  typeof newAge,
  typeof arr,
  typeof nil,
  typeof bool,
  typeof ud,
  typeof typeof bool
);

if (age == newAge) {
  //!= ==
  console.log("same");
} else {
  console.log("Not same");
}

if (age === newAge) {
  //=== !==
  console.log("same");
} else {
  console.log("Not same");
}

// 0 "" false [] null undefined

//const sum = 2 * [2, 3]; // 2 * [2,3] 2 * "2,3" 2 * Nan  NaN
//const agn =[] + 2 + false; // [] + 2 + false [] + 2 "" + 2 "" + "2" "2" + false "2false"
const agn = 2 + false + []; // 2 + 0  2 + [] 2+"" "2"

const t = true + true;

let num = parseInt("232e2");
let num2 = parseFloat("23.4e3");

// function sum(a, b) {
//   return parseFloat(a) + parseFloat(b);
// }

function sum(a, b) {
  return a*1 + 1*b;
}

// function sum(a, b) {
//   return +a + +b;
// }

let res = sum("1e1", "2.2");
console.log(res);

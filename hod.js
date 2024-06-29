
// const pureToLower = (name) => {
//   let copyName = { ...name };
//   copyName.first = name.first.toLowerCase();
//   copyName.last = name.last.toLowerCase();
//   copyName.middle = name.middle.toLowerCase();

//   return copyName;
// };
// const impureToLower = (name) => {
//   name.first = name.first.toLowerCase();
//   name.last = name.last.toLowerCase();
//   name.middle = name.middle.toLowerCase();
// };
// let name1 = {
//   first: "Musa",
//   last: "Kelly",
//   middle: "Ifoma",
// };

// let name2 = {
//   first: "Elizabeth",
//   last: "Fumilola",
//   middle: "Imole",
// };

// console.log("before", name1, name2);

// let name3 = pureToLower(name1);
// console.log(name1, name3);

// const add5 = (num) => num + 5;
// let num = 7;
// let num2 = add5(7);
// console.log(num, num2);

// const person = {
//   name: "Twerker",
//   hieght: "2ft",
//   age: 23,
//   phone: "234564747474747",
//   dance: twerk,
//   dynamicDance: (fxn) => fxn(),
// };
// person.dance();
// person.dynamicDance(shoki);

const twerk = () => {
  console.log("Shake wiggle shake");
};

const shoki = (greet) => {
  console.log(greet, "shokiii shokkii shokki");
};
const dance = (a) => {
  a("sup");
};
dance(shoki);
shoki("sup");
dance(twerk);
twerk("sup");
dance(() => console.log("yipeeee it works"));
() => console.log("yipeeee it works")("sup");
(() => console.log("robot dance"))();
// dance(23)
let arr = [];

const iterator = (arr, doStuff) => {
  if (typeof doStuff !== "function") {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    doStuff(element);
  }
};

const print = (ele) => {
  console.log(ele);
};

const fruits = [
  "🍌",
  "🍍",
  "🍑",
  "🍐",
  "🍎",
  "🥒",
  "🍊",
  "🍉",
  "🍒",
  "🍓",
  "🥑",
  "🥕",
];

iterator(fruits, 1);

const add = (a, b) => {
  return a + b;
};
const addString = (a, b) => {
  return `${a}${b}`;
};
const addTally = (a, b) => {
  return "*".repeat(a + b);
};
console.log(add("2", 3));
console.log(addString(2, 3));
console.log(addTally(2, 3));

const cleanUpInput = (a) => {
  return parseFloat(a) || 0;
};

export const bulletAdd = (a, b) => {
  a = parseFloat(a) || 0;
  b = parseFloat(b) || 0;
  return add(a, b);
};

export const bulletAddString = (a,b) => {
  a = cleanUpInput(a);
  b = cleanUpInput(b);
  return addString(a, b);
};

export const bulletAddTally = (a,b) => {
  a = parseFloat(a) || 0;
  b = parseFloat(b) || 0;
  return addTally(a, b);
};

const bulletAddHOD = (a, b, addFxn) => {
  a = parseFloat(a) || 0;
  b = parseFloat(b) || 0;
  return addFxn(a, b);
};

const getAddFxn = (type) => {
  switch (type) {
    case "tally":
      return bulletAddTally;
    case "string":
      return bulletAddString;
    case "add":
      return bulletAdd;
    default:
      throw new Error("Function not defined");
  }
};
const tallyAdd = getAddFxn("tally");
console.log(tallyAdd(2, 6));
console.log(bulletAddHOD("2go", 4e1, addTally));
console.log(bulletAddHOD("2go", 4e-1, addString));
console.log(bulletAddHOD("ego", 4e1, add));
console.log(bulletAddHOD("2", 4, (a, b) => "😊".repeat(a + b)));

const gainOrLose = () => {
  let magicNumber = Math.floor(Math.random() * 200 - 100);
  return (b) => {
    return magicNumber + b;
  };
};
let toss = gainOrLose();
console.log(toss(54));

let FCMBLoan = () => {
  const INTEREST = 15;
  const payBack = (loan) => {
    return (loan * INTEREST) / 100 + loan;
  };
  return payBack;
};

let GTBLoan = () => {
  const INTEREST = 2;
  const payBack = (loan) => {
    return (loan * INTEREST) / 100 + loan;
  };
  return payBack;
};

let UBALoan = () => {
  const INTEREST = 17;
  const payBack = (loan) => {
    return (loan * INTEREST) / 100 + loan;
  };
  return payBack;
};

let SKYELoan = () => {
  const INTEREST = 8;
  const payBack = (loan) => {
    return (loan * INTEREST) / 100 + loan;
  };
  return payBack;
};

let fcmb = FCMBLoan();
let gtb = GTBLoan();
let uba = UBALoan();
let skye = SKYELoan();

console.log(fcmb(45000));
console.log(gtb(45000));
console.log(uba(45000));
console.log(skye(45000));

export const ABOUT = "Some fxns in hod class";
console.log("fixed")
export default ABOUT;

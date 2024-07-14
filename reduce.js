let nums = [2, 3, 3, 5];
//                 13

let names = ["Imole", "Ifeoma", "Elizabeth", "Wisdom"];
//"I. I. E. W."

let stuff = ["S", "M", "A", "R", "T"];
const add = (a, b) => a + b;
const sumArr = (input) => {
  let res = 0; // init
  for (let i = 0; i < input.length; i++) {
    //
    let ele = input[i]; // get current ele
    res = add(res, ele); // update result with current val of result and current element
  }

  return res;
};

// const initials = (input)=>{
//     let ini = []
//     for(let i =0; i < input.length; i++){
//         let ele = input[i].split("")[0]
//         console.log(ele)
//         ini.push(ele +".")
//     }
//     return ini.join(" ")
// }
const addInitial = (prevInitial, currName) =>
  `${prevInitial} ${currName.split("")[0]}. `;

const initials = (input) => {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    let ele = input[i];

    res = addInitial(res, ele);
  }
  return res;
};

let joiner = (res, ele, delemeter = "") => `${res}${ele}${delemeter}`;
const join = (input) => {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    let ele = input[i];
    res = joiner(res, ele);
  }
  return res;
};
console.log(
  sumArr(nums),
  initials(names).substring(0, initials(names).length - 1),
  join(stuff, "**")
);

console.log(join(["Elizabeth", "Imole"], " and "));

let reduce = (input, dostuff, initial) => {
  let res = initial === undefined ? input[0] : initial;
  for (let i = initial === undefined ? 1 : 0; i < input.length; i++) {
    let ele = input[i];
    res = dostuff(res, ele);
  }
  return res;
};
//[2, 3,3,5], 0
//        ^
// prev:13 curr:5
console.log(reduce(nums, (currResult, curr) => currResult + curr, 0));
console.log(reduce(names, addInitial, ""));

console.log(nums.reduce((currResult, curr) => currResult + curr, 0));
console.log(names.reduce(addInitial, ""));

// const every = (input, condition) =>{
//     result = true;
//     for(let i=0; i< input.lenght; i++){
//         let ele = input[i];
//         result = condition(ele) 
//         if(!result){
//             break
//         }
//     }
//     return result
// }

const every = (input, condition) => {
  result = true;
  for (let i = 0; i < input.length; i++) {
    let ele = input[i];
    result = result && condition(ele);
  }
  return result;
};
//true & true, true & fale

console.log(every([1,2,3,4,5], a=> a>5))

const some = (input, condition) => {
  result = false;
  for (let i = 0; i < input.length; i++) {
    let ele = input[i];
    result = result || condition(ele);
  }
  return result;
};

console.log(some([1, 2, 3, 4, 5], (a) => a > 10));
console.log([1, 2, 3, 4, 5].some((a) => a > 1));

const someReduce = (input, condition) => input.reduce((p,c)=>p || condition(c),false)


console.log(someReduce([1, 2, 3, 4, 5], (a) => a > 10));
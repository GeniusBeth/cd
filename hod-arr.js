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

const emekaMap = (arr, fxn) =>{
  let newArr =[]
  let ele;
   for(let i=0; i <arr.length; i++){
    ele = arr[i];
    newArr[i] = fxn(ele)
   }
   return newArr;
 } 

 const duplicate = (thing) =>{
  console.log(`${thing}`.repeat(2))
  return `${thing} ${thing}`
 }
duplicate("owolabi")
//  emekaMap()
console.log(emekaMap(fruits, duplicate))
emekaMap([1,2,3,4], e=> console.log(e))
let alpha = 'abcdefgh'.split("")
console.log(alpha)
const printLower = letter => console.log(letter.toUpperCase())
emekaMap(alpha,printLower );
(letter => console.log(letter.toUpperCase()))("a")
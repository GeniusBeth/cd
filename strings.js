let r = Math.random() * 11;
r = Math.floor(r);
console.log(r);
r = Math.pow(r, 2);
r = r ** 2;
r = Math.sqrt(r);
console.log(r);

// let s =
//   "Lorem ipsum dolor sit amet consectetur adipisicing\
//    elit.At consequatur eum consectetur perspiciatis animi dolores quas\
//     odio ipsam accusamus eos! Dolore omnis repellendus veritatis porro.";

// let quote = '"okay hmmmm I" by the wise wisdom';
let greet = "Hello wecome 👋.\n bye\t  see ya\n   later";
console.log(greet);
const myTree = `
   *
  ***
 *****
*******
   |
`;
// console.log(myTree);
// const urTree = "   *\n  ***\n *****\n*******\n   |\n";
// console.log(urTree);

// let st = "IEESCI 👋.";
// console.log(st);
// console.log();
// console.log(st[7] + st[8]);
// console.log(st.charAt(7) + st.charAt(8));
// let code = st.codePointAt(7);
// console.log(code);
// console.log(String.fromCodePoint(128104));

let str = "🌭🌮🌯🌭🍌🍕🍍🍐🍤🍎";
str = str.replace("", "Banana");
console.log(str)
// let fruit = str.charAt(6) + str.charAt(7)
let fruit = str.charAt(18) + str.charAt(19)
console.log(fruit)
let char = str.charCodeAt(7)
let char2 = str.codePointAt(6);
console.log(str)
const ban = str.lastIndexOf("a ");
const s = "hello"
const a = "world"
let greeting = `${s} ${a}!`
// result = greeting.startsWith("h")
result = greeting.endsWith("")
result  = greeting.search(/!$/)
console.log(result)
let input = "3V2 3!HhH🌭🌭";
console.log(input.match(/\w/g));
input = "🌭".repeat(2);
console.log(input)
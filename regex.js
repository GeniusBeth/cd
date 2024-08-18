// new RegExp(pattern, flag)
//    / pattern / gi

// "Fumilola", "Prince"
// pattern = /bomb/gi;
// message = "I am going shopping,cam be buy the b03b ";
// console.log(pattern.test("Prince is a Prince"));

// if (pattern.test(message)) {
//   console.log("This message could be a threat ");
// }

//      write a regex rthat returns true if a word has a vowel char
// + ? * {2,4}

//+ {1,}
//? {0,1}
//* {0,}
pattern = /* /(a|e|i|o|u)/*/ /^e{0,5}$/;
msg = "";
if (pattern.test(msg)) {
  console.log("it has a digit");
} else {
  console.log("Opps no vowel");
}

console.log(msg.match(pattern));

//create a pattern to recognize consonant

// map

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; //["😃a😃", "😃b😃", "cc",..."jj"],

function toUpper(input) {
  let result = [];
  for (let ifoma = 0; ifoma < input.length; ifoma++) {
    let char = input[ifoma].toUpperCase();
    result.push(char); // capitalAlpha = [...capitalAlpha,char] //cpaitalAlpha[ifoma] = char
  }
  return result;
}
console.log(toUpper(alpha));

const multiply = (input, n = 2) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let char = input[i].repeat(n);
    result.push(char);
  }
  return result;
};

console.log(multiply(alpha));

const smileyFace = (input, emoji = "😃") => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let char = emoji + " " + input[i] + " " + emoji; // `${emoji} ${input[i]} ${emoji}`
    result.push(char);
  }
  return result;
};
console.log(smileyFace(alpha, "😈"));

const mapper = (input, change) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let char = change(input[i], i, input);
    result.push(char);
  }
  return result;
};

console.log(mapper(alpha, (i) => i.toUpperCase()));
console.log(mapper(alpha, (i) => i.repeat(2)));
console.log(mapper(alpha, (i) => "😈" + " " + i + " " + "😈"));

const upper = (c) => c.toUpperCase();
const multi = (c, n = 2) => c.repeat(n);
const smiley = (c, em = "😃") => `${em} ${c} ${em}`;

console.log(mapper(alpha, upper));
console.log(mapper(alpha, (c) => multi(c, 4))); // console.log(mapper(alpha, multi));
console.log(mapper(alpha, smiley));

console.log(alpha.map(upper));
console.log(alpha.map((c) => multi(c, 4)));
console.log(alpha.map((c) => smiley(c, "")));

console.log(
  alpha.map((a) => multi(a, 4)).map((e) => e.split("").reverse().join(""))
);
console.log(
  ["Imole", "Elizabeth", "Ifeoma"].map((e) => e.split("").reverse().join(""))
);

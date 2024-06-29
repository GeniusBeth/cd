const add = (a, b) => {
  return a + b;
};
const addString = (a, b) => {
  return `${a}${b}`;
};
const addTally = (a, b) => {
  return "*".repeat(a + b);
};
const cleanUpInput = (a) => {
  return parseFloat(a) || 0;
};
export const bulletAdd = (a, b) => {
  a = parseFloat(a) || 0;
  b = parseFloat(b) || 0;
  return add(a, b);
};

export const bulletAddString = (a, b) => {
  a = cleanUpInput(a);
  b = cleanUpInput(b);
  return addString(a, b);
};

export const bulletAddTally = (a, b) => {
  a = parseFloat(a) || 0;
  b = parseFloat(b) || 0;
  return addTally(a, b);
};

const getAddFxn = (type="add") => {
  type = `${type}`?.trim()?.toLocaleLowerCase();
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

const tally = getAddFxn("Tally");
console.log(tally(2, 7));


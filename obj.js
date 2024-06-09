const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Tinubu: {},
};
//const q =1+1 = 2

// if i give u a user return true if he scored >= 50 else return false
let paul = {
  email: "paul@paul.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};

const scoredThePoint = (user) => {
  if (user.points >= 50) {
    return true;
  } else {
    return false;
  }
};
// function scoredThePointV2 (user) {

// }
// const scoreThePointV2 = (user) => (user.points >= 50 ? true : false);
// const scoreThePointV3 = (user) => user.points >= 50;

console.log(scoredThePoint(users.Brook));

let count1 = 0;
if (scoredThePoint(users.Alex)) {
  count1++;
}
if (scoredThePoint(users.Asab)) {
  count1++;
}
if (scoredThePoint(users.Brook)) {
  count1++;
}
if (scoredThePoint(users.Daniel)) {
  count1++;
}
if (scoredThePoint(users.John)) {
  count1++;
}
if (scoredThePoint(users.Thomas)) {
  count1++;
}
if (scoredThePoint(users.Paul)) {
  count1++;
}
console.log(count1);

let count2 = 0;
for (let key in users) {
  if (scoredThePoint(users[key])) {
    count2++;
  }
}
console.log(count2);
//for in

// for of

// Object.keys

let count3 = 0;
let keys = Object.keys(users);
for (let i = 0; i < keys.length; i++) {
  if (scoredThePoint(users[keys[i]])) {
    count3++;
  }
}
console.log(count3);

//Object.values

let count4 = 0;
let values = Object.values(users);
for (let i = 0; i < values.length; i++) {
  if (scoredThePoint(values[i])) {
    count4++;
  }
}
console.log(count4);

const count = (users) =>  Object.values(users).reduce((prev, curr) => (curr?.points >= 50 ? prev + 1 : prev), 0);
console.log(count(users))
// WHAT ARE ARRAYS?
// WHAT ARE INDEXES?
// HOW TO TARGET INDEXES
// WHAT ARE OBJECTS?
// HOW TO TARGET KEYS
import patients from("./patients.js");
const patients = require("./patients.js")
console.log("OUR PATIENTS", patients);
const studentName = "Chris";
const studentNationality = "NL";
const studentName1 = "Sheyla";
const studentNationality1 = "IR";
const studentName2 = "Andre";
const studentNationality2 = "PT";

// const students = [
//   studentNationality, // 0
//   studentName, // 1
//   23, // 2
//   "Sheyla", // 3
//   22, // 4
//   "IR", // 5
//   "Andre", // 6
//   "PT", // 7
//   21, // 8
//   // 9 does not exist
// ];

// console.log("MY STUDENTS ARRAY:", students);
const desiredIndex = 3;

// .filter
// .map
// .find
// .forEach
// .length

// console.log("PICKING SPECIFIC INDEX FROM ARRAY:", students);

// console.log("How big is my array?", students.length);

// const lengthOfMyArray = students.length;

// console.log("the length of the array", lengthOfMyArray);

// console.log(
//   "Logging the last index of my array:",
//   students[lengthOfMyArray - 1]
// );

// AN ARRAY HAS [ ]
// AN OBJECT HAS { }

const student1 = {
  name: "Chris",
  nationality: "NL",
  age: 24,
};
const student2 = {
  name: "Sheyla",
  nationality: "IR",
  age: 22,
};
const student3 = {
  name: "Andre",
  nationality: "PT",
  age: 23,
};

const students = [
  {
    name: "Chris",
    nationality: "NL", // 0
    age: 24,
  },
  {
    name: "Sheyla",
    nationality: "IR", // 1
    age: 22,
  },
  {
    name: "Andre",
    nationality: "PT", // 2
    age: 23,
  },
];

// console.log("What our array looks like", students[1].name);
function greeting(student) {
  console.log("Greetings", student.name);
}

// students.forEach((student) => greeting(student));

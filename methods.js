const patients = require("./map-example/src/patients");

// CALLBACK FUNCTIONS
// function to add 1 plus 1
// changing to add function that will take 2 arguments and add them
function add(num1, num2) {
  console.log(`${num1} + ${num2}`, num1 + num2);
}

// function that will take 2 arguments and multiply them
// expect 2 arguments - num1 and num2
function multiply(num1, num2) {
  console.log(`${num1} x ${num2}`, num1 * num2);
}
// add1plus1();

// EXPECTS ANOTHER FUNCTION AS AN ARGUMENT, AND CALLS IT
// function doSomething(potato) {
//   console.log("I am inside of the doSomething function");
//   // passing the arguments the function expects
//   potato(2, 1);
// }
// Same thing, we created this callback
// doSomething(add);
// doSomething(multiply);

const greeting = (patient) => {
  console.log(`Hello ${patient.firstName}`);
};

// for (let i = 0; i < patients.length; i++) {
//   console.log("The value of i is, ", i);
//   greeting(patients[i]);
// }

// This is a callback
// .forEach will take the function we declared in side of the ()
// and call it once for every iteration / index
// patients.forEach((patient) => console.log(`Hello ${patient.firstName}`));

// {
//     id: 2402,
//     firstName: "Jesselyn",
//     lastName: "Bowater",
//     phoneNumber: "+972-463-907-3320",
//     email: "jbowater1@oakley.com",
//     gender: "f",
//     height: 1.75,
//     weight: 89,
//     dailyExercise: "no",
//     age: 91,
//   },

// Filter always returns true or false
// if its true, it will keep that index
// if its false, it will NOT keep it
function patientsExercise(patient) {
  // The condition below will return either true or false
  //   console.log(
  //     `Is ${patient.dailyExercise} equal to "yes"`,
  //     patient.dailyExercise === "yes"
  //   );
  return patient.dailyExercise === "yes";
}

const fitPatients = patients.filter(function (patient) {
  return patient.dailyExercise === "yes";
});

// console.log("The fit patients", fitPatients);

// find patient with id 2403
// filter / find / map will perform an action but we need to save the result

// filter will always return an array, if nothing matches the criteria
// the array will be empty
const filterPatientById = patients.filter(function (patient) {
  console.log("Running this filter");
  return patient.id === 2403;
});

// in a new variable
// will always return an object if it finds a match, otherwise returns undefined
const findPatientById = patients.find(function (patient) {
  console.log("Running the find");
  return patient.id === 2403;
});

console.log("Found this patient with find method:", findPatientById);
console.log("Found this patient with filter method:", filterPatientById);

// ARRAY METHODS - .forEach / .filter / .find / .map

const patients = require("./map-example/src/patients.js");
const { findPatientById } = require("./functions");

// findPatientById(patients, 2407);

const annonymousPatients = patients.map((patient) => {
  return {
    gender: patient.gender,
    age: patient.age,
    dailyExercise: patient.dailyExercise,
    weight: patient.weight,
    height: patient.height,
    gender: patient.gender,
    participatedInSurvery: true,
  };
});

const femalePatients = patients
  .filter((patient) => patient.gender === "f")
  .map((patient) => {
    console.log("email", patient.gender);
  });

console.table("Female patients?", femalePatients);

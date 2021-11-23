module.exports = {
  findPatientById: function findPatientById(list, id) {
    const patientById = list.find((item) => {
      return item.id === id;
    });
    console.log("Patient found?", patientById);
  },
};

// Utils is a short form for utility which refers to a collection of helper function or moduls designed to perform common task on multiple functions.

//These tasks often includes things like data validation, formatting or other repetitive operations that are used across different parts of the applications

const mongoose = require("mongoose"); // Import Mongoose

// Utility function to validate mongoDB object ID
const validateID = () => {
  const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid mongoDB ObjectID 
  return isValid; // Return the validation Result
};

module.exports = validateID; // Export the function to be used in the controller

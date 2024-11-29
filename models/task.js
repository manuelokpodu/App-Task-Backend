// In backend development, a model is like a blueprint for the data in your application. it defines the structure of your data and how it interacts with the database.

const mongoose = require("mongoose"); // Import mongoose for mongoDB interaction

const schema = mongoose.Schema; // Shortcut to access Mongoose Schema class

//Defining the schema for task based on UI
const taskSchema = new schema({
  title: String, // Title of the task
  description: String, // Description of the task
  tag: String, // Tag associated with the task ("urgent" or "Important")
});

module.exports = mongoose.model("task", taskSchema); // exporting model to be used for Request Operations in the controller

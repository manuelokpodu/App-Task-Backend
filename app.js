require("dotenv").config(); // Load environment variables from a .env file into process.env

const express = require("express"); // Import Express framework

const mongoose = require("mongoose");

const cors = require("cors");

const app = express(); //Spinning up the express framework server

const port = 3000; // define the port number for the server

// ================CORS (Cross-Origin-Resource Sharing)========================
// We use this when the frontend and the backend are from different (origins/domains/ports or protocol) and the backend hasn't been configured to accept requests from the frontend Origin

app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Imports the taskRouter for task related tasks.
const notFound = require("./middlewares/notFound"); // Imports a middleware to handle 404 notFound errors

app.use(express.json()); // Middleware to parse incoming Json request from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at api/task, all task-related routes starts with /api/task

app.use(notFound); // use the custom 404 middleware for handling unmatched routes

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!!!");

    // starts the server and listen on the specified port

    app.listen(port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${port}`);
    });
  } catch (error) {
    console.log(error); //Log the error if the database connection fails
    console.log("Unable to Connect!!!");
  }
};

start();
//Mongoose is an ODM (Object, Data, Modelling) library for MongoDB and Node.js

//MongoDB is a NoSQL Database that stores data in a flexible, JSON like format.

// manuelokpodu
// Aq6UlDDxJwQvDgv1
// mongodb+srv://manuelokpodu:Aq6UlDDxJwQvDgv1@cluster0.9uejb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

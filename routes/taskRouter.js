const express = require("express"); // Imports express framework
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router(); //Create a new router instance

router.get("/", getAllTask); // route to get all task and handle by the getAllTask function
router.post("/create", createTask); // route to create a new task and handle by createTask function
router.patch("/:id", editTask); // route to edit a specific task and handle by editTask function
router.delete("/:id", deleteTask); // route to delete a specific task and handle by deleteTask function
router.get("/:id", eachTask); // route to get a specific task and handle by eachTask function

module.exports = router; // exports router to be used in the main server file (app.js)

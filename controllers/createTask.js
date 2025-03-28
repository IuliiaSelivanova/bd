const Task = require("../models/task");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({
    title,
    description,
  });

  try {
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

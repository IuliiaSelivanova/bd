const Task = require("../models/task");

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const updatedTask = { title, description, completed };

  try {
    await Task.findByIdAndUpdate(id, updatedTask);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).send(error);
  }
};

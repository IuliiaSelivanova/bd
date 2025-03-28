const Task = require("../models/task");

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json("Task is deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

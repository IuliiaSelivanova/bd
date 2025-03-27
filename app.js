const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// подключение к БД
mongoose
  .connect("mongodb://localhost:27017/todo-list")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

const todoRoutes = require("./routes/todo");
app.use("/todos", todoRoutes);
app.get("/", (req, res) => {
  res.redirect("/todos");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

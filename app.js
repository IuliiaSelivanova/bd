const mongoose = require("mongoose");

const express = require("express");

// подключение к БД
mongoose
  .connect("mongodb://localhost:27017/todo-list")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

const db = mongoose.connection;
let todos = [];

// получение todos
const getTodos = async () => {
  try {
    todos = await db.collection("todos").find().toArray();
    console.log("Todos:", todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
};

// создание todo
const createTodo = async (title, description) => {
  const todo = {
    title,
    description,
    completed: false,
  };

  try {
    const result = await db
      .collection("todos")
      .insertOne(todo);
    console.log("Todo created:", result.insertedId);
    getTodos();
  } catch (error) {
    console.error("Error creating todo:", err);
  }
};

// createTodo("Изучить MongoDB", "Начинаем с CRUD операций");

// изменение todo
const updateTodo = async (id, updates) => {
  try {
    const result = await db
      .collection("todos")
      .updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: updates },
      );
    console.log("Todo updated:", result.modifiedCount);
    getTodos();
  } catch (error) {
    console.error("Error updating todo:", err);
  }
};

// updateTodo("67e43668eef759de8edc25db", { completed: true });

// удаление todo
const deleteTodo = async (id) => {
  try {
    const result = await db
      .collection("todos")
      .deleteOne({ _id: new mongoose.Types.ObjectId(id) });
    console.log("Todo deleted:", result.deletedCount);
    getTodos();
  } catch (error) {
    console.error("Error deleting todo:", err);
  }
};

// deleteTodo("67e3fb7cdca7b6173467a3c2");

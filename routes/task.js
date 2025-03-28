const router = require("express").Router();
const { createTask } = require("../controllers/createTask");
const { updateTask } = require("../controllers/updateTask");
const { getTasks } = require("../controllers/getTasks");
const { deleteTask } = require("../controllers/deleteTask");

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;

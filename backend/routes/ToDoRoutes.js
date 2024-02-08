import express from "express";
import {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} from "../controller/ToDoController.js";

const router = express.Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

export default router;

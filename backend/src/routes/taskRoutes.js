import express from "express";
import {
  createTask,
  getTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTask);
router.put("/:id", updateTask);

export default router;

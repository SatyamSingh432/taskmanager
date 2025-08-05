import express from "express";
import upload from "../config/multerConfig.js";

import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/task", upload.single("file"), createTask);
router.get("/task", getTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;

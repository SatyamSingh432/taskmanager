import express from "express";
import multer from "multer";

import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/task", upload.single("file"), createTask);
router.get("/task", getTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;

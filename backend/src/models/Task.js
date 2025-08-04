import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["TODO", "DONE"], default: "TODO" },
  file: {
    type: "Buffer",
    contentType: "application/pdf",
  },
  createdOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;

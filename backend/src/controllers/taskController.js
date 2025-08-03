import { createTaskService } from "../services/taskService.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;
    const milestone = await createTaskService({ title, description, deadline });
    res.status(201).json(milestone);
  } catch (err) {
    res.status(500).json({ error: "Error creating Task." });
  }
};

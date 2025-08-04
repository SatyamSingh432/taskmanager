import {
  createTaskService,
  getAllTasksService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskService.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;
    const milestone = await createTaskService({ title, description, deadline });
    res.status(201).json(milestone);
  } catch (err) {
    res.status(500).json({ error: "Error creating Task." });
  }
};

export const getTask = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching tasks." });
  }
};

export const updateTask = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updated = await updateTaskService(userId, updateData);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating task." });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleted = await deleteTaskService(userId);
    console.log(deleted);
    if (deleted) {
      return res.status(200).json({ message: "Task deleted successfully." });
    } else {
      return res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting task." });
  }
};

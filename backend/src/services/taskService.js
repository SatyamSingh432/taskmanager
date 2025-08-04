import Task from "../models/Task.js";

export const createTaskService = async ({ title, description, deadline }) => {
  const task = await Task.create({ title, description, deadline });
  return task;
};

export const getAllTasksService = async () => {
  return await Task.find();
};

export const updateTaskService = async (id, updateData) => {
  return await Task.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteTaskService = async (id) => {
  return await Task.findByIdAndDelete(id);
};

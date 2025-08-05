import axios from "axios";

const BASE_URL = "http://localhost:8082/v1/task";

export const createTask = async (taskData) => {
  try {
    const formData = new FormData();
    formData.append("title", taskData.title);
    formData.append("description", taskData.description);
    formData.append("deadline", taskData.deadline);
    formData.append("file", taskData.file);

    const response = await axios.post(`${BASE_URL}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(" Error creating task:", error.message);
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error(" Error fetching tasks:", error.message);
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, {
      title: taskData.title,
      description: taskData.description,
      deadline: taskData.deadline,
    });
    return response.data;
  } catch (error) {
    console.error(` Error updating task :`, error.message);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    console.log(`Task deleted`);
  } catch (error) {
    console.error(`Error deleting task :`, error.message);
  }
};

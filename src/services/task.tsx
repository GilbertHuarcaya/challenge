import axios from "axios";
import { CreateTask, UpdateTask } from "../interfaces/task/types.d";

const URL_BASE = `${import.meta.env.VITE_API_URL_BASE as string}tasks`;

const TOKEN: string = import.meta.env.VITE_API_TOKEN as string;

const config = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};

export const fetchTasks = () => axios.get(URL_BASE, config);
export const createTask = (newTask: CreateTask) => axios.post(URL_BASE, newTask, config);
export const updateTask = (id: string, updatedTask: UpdateTask) => axios.put(`${URL_BASE}/${id}`, updatedTask, config);
export const deleteTask = (id: string) => axios.delete(`${URL_BASE}/${id}`, config);

export default {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
};

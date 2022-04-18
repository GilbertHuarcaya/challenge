import axios from "axios";
import { User } from "../interfaces/user/types.d";

const URL_BASE: string =
  (import.meta.env.VITE_API_URL_BASE as string) + "users";

const TOKEN: string = import.meta.env.VITE_API_TOKEN as string;

const config = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};

export const fetchUsers = () => axios.get(URL_BASE, config);
export const createUser = (newUser: User) =>
  axios.post(URL_BASE, newUser, config);
export const updateUser = (id: string, updatedUser: User) =>
  axios.put(`${URL_BASE}/${id}`, updatedUser, config);
export const deleteUser = (id: string) =>
  axios.delete(`${URL_BASE}/${id}`, config);

export default {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
};

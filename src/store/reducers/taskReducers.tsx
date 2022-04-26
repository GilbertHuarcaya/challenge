/* eslint-disable default-param-last */
import { Task } from "../../interfaces/task/types.d";
import {
  FETCH_ALL_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../types.d";

type ActionReducer =
  | {
      type: "FETCH_ALL_TASKS" | "LIKE_TASK" | "CREATE_TASK" | "UPDATE_TASK";
      payload: {
        id: string;
      };
    }
  | {
      type: "DELETE_TASK";
      payload: string;
    };

export default (tasks = [], action: ActionReducer) => {
  switch (action.type) {
    case FETCH_ALL_TASKS:
      return action.payload;
    case CREATE_TASK:
      return [...tasks, action.payload];
    case UPDATE_TASK:
      return tasks.map((task: Task) => (task.id === action.payload.id ? action.payload : task));
    case DELETE_TASK:
      return tasks.filter((task: Task) => task.id !== action.payload);
    default:
      return tasks;
  }
};

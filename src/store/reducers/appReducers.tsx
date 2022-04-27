/* eslint-disable default-param-last */
import { Task } from "../../interfaces/task/types.d";
import {
  SET_QUERY_TASKS, NEW_QUERY, SET_ORDERED_TASKS, TOGGLE_TASKS_DISPLAY,
} from "../types.d";

const initialState = {
  queryTasks: [],
  query: "",
  orderedTasks: [],
  toggleTasksDisplay: "dashboard",
};
type ActionReducer =
  | {
      type: "SET_QUERY_TASKS";
      payload: Array<Task>;
    }
  | {
      type: "NEW_QUERY" | "TOGGLE_TASKS_DISPLAY";
      payload: string;
    }
  | {
      type: "SET_ORDERED_TASKS";
      payload: Array<Task[]>;
    };

export default (state = initialState, action: ActionReducer) => {
  switch (action.type) {
    case SET_ORDERED_TASKS:
      return {
        ...state,
        orderedTasks: action.payload,
      };
    case SET_QUERY_TASKS:
      return {
        ...state,
        queryTasks: action.payload,
      };
    case NEW_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case TOGGLE_TASKS_DISPLAY:
      return {
        ...state,
        toggleTasksDisplay: action.payload,
      };
    default:
      return state;
  }
};

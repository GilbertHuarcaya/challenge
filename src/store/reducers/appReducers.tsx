/* eslint-disable default-param-last */
import { Task } from "../../interfaces/task/types.d";
import { SET_QUERY_TASKS, NEW_QUERY, SET_ORDERED_TASKS } from "../types.d";

const initialState = {
  queryTasks: [],
  query: "",
  orderedTasks: [],
};
type ActionReducer =
  | {
      type: "SET_QUERY_TASKS";
      payload: Array<Task>;
    }
  | {
      type: "NEW_QUERY";
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
    default:
      return state;
  }
};

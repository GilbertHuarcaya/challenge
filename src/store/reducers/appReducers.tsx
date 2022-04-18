import { Task } from "../../interfaces/task/types.d";
import { SET_QUERY_TASKS, NEW_QUERY } from "../types.d";

const initialState = {
  queryTasks: [],
  query: "",
};
type ActionReducer =
  | {
      type: "SET_QUERY_TASKS";
      payload: Array<Task>;
    }
  | {
      type: "NEW_QUERY";
      payload: string;
    };

export default (state = initialState, action: ActionReducer) => {
  switch (action.type) {
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

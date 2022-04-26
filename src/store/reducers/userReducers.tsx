/* eslint-disable default-param-last */
import { User } from "../../interfaces/user/types.d";
import {
  FETCH_ALL_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../types.d";

type ActionReducer = {
  type:
    | "FETCH_ALL_USERS"
    | "LIKE_USER"
    | "CREATE_USER"
    | "UPDATE_USER"
    | "DELETE_USER";
  payload: {
    id: string;
  };
};

export default (users = [], action: ActionReducer) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case CREATE_USER:
      return [...users, action.payload];
    case UPDATE_USER:
      return users.map((user: User) => (user.id === action.payload.id ? action.payload : user));
    case DELETE_USER:
      return users.filter((user: User) => user.id !== action.payload.id);
    default:
      return users;
  }
};

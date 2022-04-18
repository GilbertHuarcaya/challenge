import { combineReducers } from "redux";

import tasks from "./taskReducers";
import users from "./userReducers";
import app from "./appReducers";

export const reducers = combineReducers({ tasks, users, app });

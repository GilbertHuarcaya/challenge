import { Dispatch } from "redux";
import {
  FETCH_ALL_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  FETCH_ALL_USERS,
  CREATE_USER,
  NEW_QUERY,
  SET_QUERY_TASKS,
} from "../types.d";

import { CreateTask, Task, UpdateTask } from "../../interfaces/task/types.d";
import { User } from "../../interfaces/user/types.d";

import { taskServices } from "../../services";
import { userServices } from "../../services";

type FetchUser = {
  data: User;
};

type FetchUsers = {
  data: Array<User>;
};

type FetchTask = {
  data: Task;
};

type FetchTasks = {
  data: Array<Task>;
};

export const getTasks = () => async (dispatch: Dispatch) => {
  try {
    const { data }: FetchTasks = await taskServices.fetchTasks();

    dispatch({ type: FETCH_ALL_TASKS, payload: data });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createTask = (task: CreateTask) => async (dispatch: Dispatch) => {
  try {
    const { data }: FetchTask = await taskServices.createTask(task);

    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateTask =
  (id: string, task: UpdateTask) => async (dispatch: Dispatch) => {
    try {
      const { data }: FetchTask = await taskServices.updateTask(id, task);

      dispatch({ type: UPDATE_TASK, payload: data });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const deleteTask = (id: string) => async (dispatch: Dispatch) => {
  try {
    await taskServices.deleteTask(id);

    dispatch({ type: DELETE_TASK, payload: id });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const { data }: FetchUsers = await userServices.fetchUsers();

    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createUser = (User: User) => async (dispatch: Dispatch) => {
  try {
    const { data }: FetchUser = await userServices.createUser(User);

    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const setNewQuery = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: NEW_QUERY, payload: query });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const setNewQueryTasks =
  (tasks: Array<Task>) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SET_QUERY_TASKS, payload: tasks });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

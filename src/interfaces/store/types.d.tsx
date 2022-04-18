import { Task } from "../task/types.d";
import { User } from "../user/types.d";

interface AppStore {
  query: string;
  queryTasks: Array<Task>;
}

export type Store = {
  tasks: Array<Task>;
  users: Array<User>;
  app: AppStore;
};

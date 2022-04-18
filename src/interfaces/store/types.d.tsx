import { Task } from "../task/types.d";
import { User } from "../user/types.d";

export type Store = {
  tasks: Array<Task>;
  users: Array<User>;
};

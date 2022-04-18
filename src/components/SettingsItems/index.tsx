import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../../interfaces/task/types.d";
import { User } from "../../interfaces/user/types.d";
import TaskCol from "../TaskCol";
import { Draggable } from "react-drag-reorder";
import "./styles.scss";

type Store = {
  users: Array<User>;
};
const SettingsItems = () => {
  const users = useSelector((store: Store) => store.users);
  console.log(users);
  return (
    <div className="task-card-container">
      {users
        ? users.map((user: User, index) => (
            <div className="task-card-container__settings">
              <h2>User No.{index}</h2>
              <p>{user.fullName}</p>
              <p>{user.email}</p>
              <p>{user.type}</p>
              <p>{user.createdAt}</p>
              <p>{user.updatedAt}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default SettingsItems;
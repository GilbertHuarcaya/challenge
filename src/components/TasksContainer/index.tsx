import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../../interfaces/task/types.d";
import { User } from "../../interfaces/user/types.d";
import TaskCol from "../TaskCol";
import "./styles.scss";

type Store = {
  tasks: Array<Task>;
  users: Array<User>;
};
const TasksContainer = () => {
  const tasks = useSelector((store: Store) => store.tasks);
  const users = useSelector((store: Store) => store.users);

  const allStatus = [
    ...new Set(tasks.map((task: Task) => task.status.split("_").join(" "))),
  ];

  const allTags = [
    ...new Set(
      tasks
        .map((task: Task) => task.tags.map((tag) => tag.split("_").join(" ")))
        .flat()
    ),
  ];

  const orderedTasksByStatus = allStatus.map((colName: string) =>
    tasks.filter((task: Task) => colName === task.status.split("_").join(" "))
  );

  return (
    <div className="task-card-container">
      {orderedTasksByStatus.map((TasksByStatus: Array<Task>, index) => (
        <TaskCol
          colName={allStatus[index]
            .split(" ")
            .map(
              (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()
            )
            .join(" ")}
          key={allStatus[index]}
          tasks={TasksByStatus}></TaskCol>
      ))}
    </div>
  );
};

export default TasksContainer;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../../interfaces/task/types.d";
import { User } from "../../interfaces/user/types.d";
import TaskCol from "../TaskCol";
import { Draggable } from "react-drag-reorder";
import "./styles.scss";
import { Store } from "../../interfaces/store/types.d";

const TasksContainer = () => {
  const tasks = useSelector((store: Store) => store.tasks);

  const allStatus = [
    ...new Set(tasks.map((task: Task) => task.status.split("_").join(" "))),
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

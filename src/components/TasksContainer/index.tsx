import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewQueryTasks, setOrderedTasksByStatus } from "../../store/actions";
import { Task } from "../../interfaces/task/types.d";
import { User } from "../../interfaces/user/types.d";
import TaskCol from "../TaskCol";
import { Draggable } from "react-drag-reorder";
import "./styles.scss";
import { Store } from "../../interfaces/store/types.d";
import Loader from "../Loader";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store: Store) => store.tasks);
  const query = useSelector((store: Store) => store.app.query);
  const queryTasks = useSelector((store: Store) => store.app.queryTasks);
  const orderedTasks = useSelector((store: Store) => store.app.orderedTasks);

  const allStatus = [
    ...new Set(tasks.map((task: Task) => task.status.split("_").join(" "))),
  ];

  useEffect(() => {
    if (query.length > 0) {
      dispatch(
        setNewQueryTasks(
          tasks.filter(
            (task) =>
              task.name.toLowerCase().includes(query.toLowerCase()) ||
              task.assignee.fullName
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              new Date(task.dueDate)
                .toLocaleDateString("en-GB", {
                  dateStyle: "long",
                })
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              task.pointEstimate.toLowerCase().includes(query.toLowerCase())
          ) || tasks
        )
      );
    } else {
      dispatch(setNewQueryTasks(tasks));
    }
  }, [query, tasks]);

  useEffect(() => {
    const orderedTasksByStatus = allStatus.map((colName: string) =>
      queryTasks.filter(
        (task: Task) => colName === task.status.split("_").join(" ")
      )
    );
    dispatch(setOrderedTasksByStatus(orderedTasksByStatus));
  }, [queryTasks]);

  return (
    <div className="task-card-container">
      {queryTasks.length > 0 && tasks.length > 0 ? (
        orderedTasks.map((TasksByStatus: Array<Task>, index) => {
          if (TasksByStatus && TasksByStatus.length > 0) {
            return (
              <TaskCol
                colName={allStatus[index]
                  .split(" ")
                  .map(
                    (word) =>
                      word[0].toUpperCase() + word.substring(1).toLowerCase()
                  )
                  .join(" ")}
                key={allStatus[index]}
                tasks={TasksByStatus}></TaskCol>
            );
          }
        })
      ) : (
        <p className="task-card-container__empty">NO RESULTS</p>
      )}
    </div>
  );
};

export default TasksContainer;

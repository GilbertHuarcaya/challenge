/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewQueryTasks, setOrderedTasksByStatus } from "../../store/actions";
import { Task } from "../../interfaces/task/types.d";
import TaskCol from "../TaskCol";
import "./styles.scss";
import { Store } from "../../interfaces/store/types.d";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store: Store) => store.tasks);
  const query = useSelector((store: Store) => store.app.query);
  const queryTasks = useSelector((store: Store) => store.app.queryTasks);
  const orderedTasks = useSelector((store: Store) => store.app.orderedTasks);
  const display = useSelector((store: Store) => store.app.toggleTasksDisplay);

  const allStatus = [
    ...new Set(tasks.map((task: Task) => task.status.split("_").join(" "))),
  ];

  useEffect(() => {
    if (query.length > 0) {
      dispatch(
        setNewQueryTasks(
          tasks.filter(
            (task) => task.name.toLowerCase().includes(query.toLowerCase())
              || task.assignee.fullName
                .toLowerCase()
                .includes(query.toLowerCase())
              || new Date(task.dueDate)
                .toLocaleDateString("en-GB", {
                  dateStyle: "long",
                })
                .toLowerCase()
                .includes(query.toLowerCase())
              || (`${task.pointEstimate} Pts`)
                .toLowerCase()
                .includes(query.toLowerCase())
              || task.tags.includes(query.toUpperCase())
              || task.status.toLowerCase().includes(query.toLowerCase()),
          ) || tasks,
        ),
      );
    } else {
      dispatch(setNewQueryTasks(tasks));
    }
  }, [query, tasks]);

  useEffect(() => {
    const orderedTasksByStatus = allStatus.map((colName: string) => queryTasks.filter(
      (task: Task) => colName === task.status.split("_").join(" "),
    ));
    dispatch(setOrderedTasksByStatus(orderedTasksByStatus));
  }, [queryTasks]);

  return (
    <div className={display === "dashboard" ? "task-card-container" : "task-card-container__list"}>
      {display === "list" ? (
        <div className="task-card-container__table-titles">
          <p># Task Name</p>
          <p>Task Tags</p>
          <p>Estimate</p>
          <p>Task Assing Name</p>
          <p>Due Date</p>
        </div>
      ) : null }
      {queryTasks.length > 0 && tasks.length > 0 ? (
        orderedTasks.map((TasksByStatus: Array<Task>, index) => {
          if (TasksByStatus && TasksByStatus.length > 0) {
            return (
              <TaskCol
                colName={allStatus[index]
                  .split(" ")
                  .map(
                    (word) => word[0].toUpperCase() + word.substring(1).toLowerCase(),
                  )
                  .join(" ")}
                key={allStatus[index]}
                tasks={TasksByStatus}
              />
            );
          }
          return null;
        })
      ) : (
        <p className="task-card-container__empty">NO RESULTS</p>
      )}
    </div>
  );
};

export default TasksContainer;

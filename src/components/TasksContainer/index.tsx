import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewQueryTasks } from "../../store/actions";
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
  const [orderedTasks, setOrderedTasks] = useState<Task[][] | null>(null);

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
    if (query !== "") {
      const orderedTasksByStatus = allStatus.map((colName: string) =>
        queryTasks.filter(
          (task: Task) => colName === task.status.split("_").join(" ")
        )
      );
      setOrderedTasks(orderedTasksByStatus);
    } else {
      const orderedTasksByStatus = allStatus.map((colName: string) =>
        tasks.filter(
          (task: Task) => colName === task.status.split("_").join(" ")
        )
      );
      setOrderedTasks(orderedTasksByStatus);
    }
  }, [queryTasks, tasks]);

  return (
    <div className="task-card-container">
      {orderedTasks !== null && orderedTasks?.flat().length > 0 ? (
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
        <div className="task-card-container">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default TasksContainer;

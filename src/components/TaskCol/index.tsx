/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../interfaces/store/types.d";
import { Task } from "../../interfaces/task/types.d";
import TaskCard from "../TaskCard";
import "./styles.scss";

interface TaskColProps {
  tasks: Array<Task>;
  colName: string;
}

const TaskCol = (props: TaskColProps) => {
  const { tasks, colName } = props;
  const [hiddenTasks, setHiddenTasks] = useState(false);
  const display = useSelector((store: Store) => store.app.toggleTasksDisplay);

  const hideTasks = () => {
    setHiddenTasks(!hiddenTasks);
  };

  return (
    <div className={display === "dashboard" ? "task-card-col" : "task-card-col__list"}>
      {display === "dashboard"
        ? (
          <>
            <div className="task-card-col__title">
              <p>{`${colName} (${tasks.length})`}</p>
            </div>
            {tasks.length > 0
              ? tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
              : null}
          </>
        )
        : (
          <>
            <div className="task-card-col__list__title" onClick={hideTasks}>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L0 0H12L6 6Z" fill="#94979A" />
              </svg>
              <p>{`${colName} (${tasks.length})`}</p>
            </div>
            <div hidden={hiddenTasks}>
              {tasks.length > 0
                ? tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
                : null}
            </div>
          </>
        )}
    </div>
  );
};

export default TaskCol;

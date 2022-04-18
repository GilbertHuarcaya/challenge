import React from "react";
import { Task } from "../../interfaces/task/types.d";
import TaskCard from "../TaskCard";
import "./styles.scss";

interface TaskColProps {
  tasks: Array<Task>;
  colName: string;
}

const TaskCol = (props: TaskColProps) => {
  const { tasks, colName } = props;
  return (
    <div className="task-card-col">
      <div className="task-card-col__title">
        <input type="text" defaultValue={`${colName} (${tasks.length})`} />
      </div>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskCol;

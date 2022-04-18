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
        <p>{`${colName} (${tasks.length})`}</p>
      </div>
      {tasks.length > 0
        ? tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
        : null}
    </div>
  );
};

export default TaskCol;

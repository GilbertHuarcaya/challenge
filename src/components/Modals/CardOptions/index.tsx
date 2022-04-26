/* eslint-disable no-alert */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../../interfaces/task/types.d";
import { deleteTask } from "../../../store/actions";
import DeleteTaskIcon from "../../Buttons/IconsBtn/DeleteTaskIcon";
import EditTaskIcon from "../../Buttons/IconsBtn/EditTaskIcon";
import NewTask from "../NewTask";
import "./styles.scss";

type CardOptionsProps = {
  task: Task;
  hidden: boolean;
};

const CardOptions = (props: CardOptionsProps) => {
  const dispatch = useDispatch();
  const { task, hidden } = props;
  const [toggleCreateModal, setToggleCreateModal] = useState<boolean>(true);

  return (
    <div
      className={`task-card__options ${hidden ? "hidden" : null}`}
      hidden={hidden}
    >
      <button
        type="button"
        className="btn__secondary-transparent btn__fill"
        onClick={() => setToggleCreateModal(!toggleCreateModal)}
      >
        <EditTaskIcon />
        <p>Edit</p>
      </button>
      <button
        className="btn__secondary-transparent btn__fill"
        type="button"
        onClick={() => {
          window.confirm("Are you sure?");
          dispatch(deleteTask(task.id));
        }}
      >
        <DeleteTaskIcon />
        <p>Delete</p>
      </button>
      <NewTask
        toggle={toggleCreateModal}
        setToggleCreateModal={setToggleCreateModal}
        task={task}
      />
    </div>
  );
};

export default CardOptions;

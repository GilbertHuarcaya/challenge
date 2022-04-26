import React, { useState } from "react";
import { Task } from "../../interfaces/task/types.d";
import OptionsIcon from "../Buttons/IconsBtn/OptionsIcon";
import Tag from "../Tag";
import AttachIcon from "../../images/icons/attach.svg";
import BranchIcon from "../../images/icons/branch.svg";
import MessageIcon from "../../images/icons/message.svg";
import "./styles.scss";
import DueDateBtn from "../Buttons/Btns/DueDateBtn";
import CardOptions from "../Modals/CardOptions";
import avatar from "../../images/png/avatar.png";

type TaskCardProps = {
  task: Task;
};

const TaskCard = (props: TaskCardProps) => {
  const [optionsHidden, setOptionsHidden] = useState(true);

  const { task } = props;

  let day = "";
  if (
    new Date().toLocaleDateString("en-GB", {
      dateStyle: "long",
    })
    === new Date(task.dueDate).toLocaleDateString("en-GB", {
      dateStyle: "long",
    })
  ) {
    day = "TODAY";
  } else if (new Date() > new Date(task.dueDate)) {
    day = "YESTERDAY";
  } else {
    day = new Date(task.dueDate).toLocaleDateString("en-GB", {
      dateStyle: "long",
    });
  }

  const OpenOptions = () => {
    setOptionsHidden(!optionsHidden);
  };

  return (
    <div className="task-card">
      <div className="task-card__row">
        <p className="task-card__name">{task.name}</p>
        <button type="button" className="btn__secondary-transparent" onClick={OpenOptions}>
          <OptionsIcon />
        </button>
        <CardOptions task={task} hidden={optionsHidden} />
      </div>
      <div className="task-card__row">
        <p className="task-card__points">
          {task.pointEstimate}
          {" "}
          Pts
        </p>
        <DueDateBtn dueDate={day} />
      </div>
      <div className="task-card__row">
        <div className="task-card__tags">
          {task.tags.map((tag: string) => (
            <Tag tagName={tag} key={tag + task.id} />
          ))}
        </div>
      </div>
      <div className="task-card__row">
        <img
          className="avatar__logo-small"
          src={task.assignee.avatar ? task.assignee.avatar : avatar}
          alt="asigneeLogo"
        />
        <div className="task-card__info__icons">
          <img src={AttachIcon} alt="attach" />
          <div>
            <p>3</p>
            <img src={BranchIcon} alt="attach" />
          </div>
          <div>
            <p>3</p>
            <img src={MessageIcon} alt="attach" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

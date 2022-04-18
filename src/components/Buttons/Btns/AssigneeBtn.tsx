import React from "react";
import avatar from "../../../images/png/avatar.png";
import { Task } from "../../../interfaces/task/types.d";
import { User } from "../../../interfaces/user/types.d";
import AssigneeIcon from "../IconsBtn/AssigneeIcon";

type Props = {
  assignee: User | null;
};
const AssigneeBtn = (props: Props) => {
  const { assignee } = props;
  return (
    <div className="form__input__btn">
      {assignee ? (
        <img
          className="avatar__logo-small"
          src={assignee.avatar ? assignee.avatar : avatar}
          alt="userAvatar"
        />
      ) : (
        <AssigneeIcon></AssigneeIcon>
      )}
      <p>{assignee ? assignee.fullName : "Assignee"}</p>
    </div>
  );
};

export default AssigneeBtn;

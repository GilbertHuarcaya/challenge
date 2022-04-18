import React from "react";
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
      <AssigneeIcon></AssigneeIcon>
      <p>{assignee ? assignee.fullName : "Assignee"}</p>
    </div>
  );
};

export default AssigneeBtn;

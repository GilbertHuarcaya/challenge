import React from "react";
import { User } from "../../../interfaces/user/types.d";
import avatar from "../../../images/png/avatar.png";
import "./styles.scss";

type Props = {
  assignee: User;
  setAssignee: React.Dispatch<React.SetStateAction<User>>;
};

const Assignee = (props: Props) => {
  const { assignee, setAssignee } = props;
  return (
    <div
      className="modal__item btn__secondary-transparent"
      onClick={() => setAssignee(assignee)}>
      <img
        className="avatar__logo-small"
        src={assignee.avatar ? assignee.avatar : avatar}
        alt="userAvatar"
      />
      <p>{assignee.fullName}</p>
    </div>
  );
};

export default Assignee;

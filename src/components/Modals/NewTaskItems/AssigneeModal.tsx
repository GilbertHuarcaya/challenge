import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../../interfaces/user/types.d";
import Assignee from "../ModalItem/Assignee";
import "./styles.scss";

type Store = {
  users: Array<User>;
};
type Props = {
  toggleAssigneeModal: boolean;
  setAssignee: React.Dispatch<React.SetStateAction<User>>;
};

const AssigneeModal = (props: Props) => {
  const { toggleAssigneeModal, setAssignee } = props;
  const users = useSelector((store: Store) => store.users);
  return (
    <div
      className={
        toggleAssigneeModal ? "modal__container-hidden" : "modal__container modal__assignee"
      }
      hidden={toggleAssigneeModal}>
      <p>Assign To</p>
      {users.map((user) => (
        <Assignee
          assignee={user}
          key={user.id}
          setAssignee={setAssignee}></Assignee>
      ))}
    </div>
  );
};

export default AssigneeModal;

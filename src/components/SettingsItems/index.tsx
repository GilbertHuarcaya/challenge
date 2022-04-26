import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../interfaces/user/types.d";
import "./styles.scss";
import { Store } from "../../interfaces/store/types.d";
import avatar from "../../images/png/avatar.png";

const SettingsItems = () => {
  const users = useSelector((store: Store) => store.users);
  return (
    <div className="task-card-container">
      {users
        ? users.map((user: User, index) => (
          <div className="task-card-container__settings" key={user.id}>
            <h2>
              User No.
              {index}
            </h2>
            <img
              className="nav__userLogo avatar__logo-medium"
              src={user.avatar ? user.avatar : avatar}
              alt="userLogo"
            />
            <p>{user.fullName}</p>
            <p>{user.email}</p>
            <p>{user.type}</p>
            <p>{user.createdAt}</p>
            <p>{user.updatedAt}</p>
          </div>
        ))
        : null}
    </div>
  );
};

export default SettingsItems;

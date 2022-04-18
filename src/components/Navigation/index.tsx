import React from "react";
import { User } from "../../interfaces/user/types.d";
import DeleteInputIcon from "../Buttons/IconsBtn/DeleteInputIcon";
import NotificationIcon from "../Buttons/IconsBtn/NotificationIcon";
import SearchIcon from "../Buttons/IconsBtn/SearchIcon";
import "./styles.scss";
import avatar from "../../images/png/avatar.png";

type NavProps = {
  user: User;
};

function Navigation(props: NavProps) {
  const { user } = props;

  return (
    <div className="nav">
      <SearchIcon></SearchIcon>
      <div className="nav__search">
        <input
          className="nav__search__input"
          type="text"
          placeholder="Search"
        />
        <DeleteInputIcon></DeleteInputIcon>
      </div>
      <NotificationIcon></NotificationIcon>
      {user ? (
        <img
          className="nav__userLogo avatar__logo-medium"
          src={user.avatar ? user.avatar : avatar}
          alt="userLogo"
        />
      ) : null}
    </div>
  );
}

export default Navigation;

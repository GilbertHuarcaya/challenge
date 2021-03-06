import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/user/types.d";
import DeleteInputIcon from "../Buttons/IconsBtn/DeleteInputIcon";
import NotificationIcon from "../Buttons/IconsBtn/NotificationIcon";
import SearchIcon from "../Buttons/IconsBtn/SearchIcon";
import { setNewQuery } from "../../store/actions";

import "./styles.scss";
import avatar from "../../images/png/avatar.png";
import { Store } from "../../interfaces/store/types.d";

type NavProps = {
  user: User;
};

const Navigation = (props: NavProps) => {
  const dispatch = useDispatch();
  const query = useSelector((store: Store) => store.app.query);
  const { user } = props;

  return (
    <div className="nav">
      <SearchIcon />
      <div className="nav__search">
        <input
          className="nav__search__input"
          type="text"
          value={query}
          placeholder="Search"
          onChange={(event) => dispatch(setNewQuery(event.target.value as string))}
        />
        <button
          type="button"
          className={
            query.length === 0
              ? "btn__secondary-transparent-hidden"
              : "btn__secondary-transparent"
          }
          onClick={() => dispatch(setNewQuery(""))}
          hidden={query.length === 0}
        >
          <DeleteInputIcon />
        </button>
      </div>
      <NotificationIcon />
      {user ? (
        <img
          className="nav__userLogo avatar__logo-medium"
          src={user.avatar ? user.avatar : avatar}
          alt="userLogo"
        />
      ) : null}
    </div>
  );
};

export default Navigation;

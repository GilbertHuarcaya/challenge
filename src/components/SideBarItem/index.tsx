import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../Buttons/IconsBtn/DashboardIcon";
import ListIcon from "../Buttons/IconsBtn/ListIcon";
import "./styles.scss";

type SideBarProps = {
  item: string;
  key: number;
};

const SideBarItem = (props: SideBarProps) => {
  const { item } = props;

  return (
    <div
      className={`side-bar-item ${
        item === "DASHBOARD" && true ? "item-active" : null
      }`}>
      {item === "DASHBOARD" ? (
        <DashboardIcon
          active={item === "DASHBOARD" && true}
          border={false}></DashboardIcon>
      ) : null}
      {item === "MY TASK" ? (
        <ListIcon
          active={item === "MY TASK" && false}
          border={false}></ListIcon>
      ) : null}
      {item !== "MY TASK" && item !== "DASHBOARD"? (
        <ListIcon
          active={item === "MY TASK" && false}
          border={false}></ListIcon>
      ) : null}
      <Link to={item === "DASHBOARD" ? "/" : `/${item}`}>
        <p className="side-bar-item__item">{item} </p>
      </Link>
    </div>
  );
};

export default SideBarItem;

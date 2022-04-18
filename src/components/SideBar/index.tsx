import React from "react";
import LogoIcon from "../Buttons/IconsBtn/LogoIcon";
import SideBarItem from "../SideBarItem";
import "./styles.scss";

const SideBarItems: Array<string> = ["DASHBOARD", "MY TASK"];

const SideBar = () => {
  return (
    <div className="side-bar">
      <LogoIcon></LogoIcon>
      <div className="side-bar__items">
        {SideBarItems.map((item) => (
          <SideBarItem key={Math.random()} item={item}></SideBarItem>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

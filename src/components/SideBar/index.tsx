import React from "react";
import LogoIcon from "../Buttons/IconsBtn/LogoIcon";
import SideBarItem from "../SideBarItem";
import "./styles.scss";

const SideBarItems: Array<string> = ["DASHBOARD", "MY TASK", "SETTINGS"];

const SideBar = () => (
  <div className="side-bar">
    <LogoIcon />
    <div className="side-bar__items">
      {SideBarItems.map((item) => (
        <SideBarItem key={Math.random()} item={item} />
      ))}
    </div>
  </div>
);

export default SideBar;

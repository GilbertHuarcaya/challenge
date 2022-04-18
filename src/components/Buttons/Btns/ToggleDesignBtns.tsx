import React from "react";
import DashboardIcon from "../IconsBtn/DashboardIcon";
import ListIcon from "../IconsBtn/ListIcon";
import "./styles.scss";

const ToggleDesign = () => {
  return (
    <div className="toggle-icons">
      <ListIcon active={false} border={false}></ListIcon>
      <DashboardIcon active={true} border={true}></DashboardIcon>
    </div>
  );
};

export default ToggleDesign;

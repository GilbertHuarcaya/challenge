import React from "react";
import DashboardIcon from "../IconsBtn/DashboardIcon";
import ListIcon from "../IconsBtn/ListIcon";
import "./styles.scss";

const ToggleDesign = () => (
  <div className="toggle-icons">
    <ListIcon active={false} border={false} />
    <DashboardIcon active border />
  </div>
);

export default ToggleDesign;

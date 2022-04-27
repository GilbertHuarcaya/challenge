import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../interfaces/store/types.d";

import DashboardIcon from "../IconsBtn/DashboardIcon";
import ListIcon from "../IconsBtn/ListIcon";
import "./styles.scss";

const ToggleDesign = () => {
  const display = useSelector((store: Store) => store.app.toggleTasksDisplay);

  return (
    <div className="toggle-icons">
      <ListIcon active={display === "list"} border={display === "list"} />
      <DashboardIcon active={display === "dashboard"} border={display === "dashboard"} />
    </div>
  );
};

export default ToggleDesign;

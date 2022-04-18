import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewTaskBtn from "../components/Buttons/Btns/NewTaskBtn";
import ToggleDesign from "../components/Buttons/Btns/ToggleDesignBtns";
import Navigation from "../components/Navigation";
import SettingsItems from "../components/SettingsItems";
import SideBar from "../components/SideBar";
import TasksContainer from "../components/TasksContainer";
import { User } from "../interfaces/user/types.d";
import { getTasks, getUsers } from "../store/actions";
import { Store } from "../interfaces/store/types.d";

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector((store: Store) => store.users);
  const tasks = useSelector((store: Store) => store.tasks);
  useEffect(() => {
    if (users.length < 1 && tasks.length < 1) {
      dispatch(getTasks());
      dispatch(getUsers());
    }
  }, []);

  return (
    <div className="home">
      <SideBar></SideBar>
      <div className="home__control__icons"></div>
      <SettingsItems></SettingsItems>
    </div>
  );
};

export default Settings;

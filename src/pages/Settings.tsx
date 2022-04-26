/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsItems from "../components/SettingsItems";
import SideBar from "../components/SideBar";
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
  }, [tasks]);

  return (
    <div className="home">
      <SideBar />
      <div className="home__control__icons" />
      <SettingsItems />
    </div>
  );
};

export default Settings;

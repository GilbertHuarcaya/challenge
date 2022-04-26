/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, getUsers } from "../store/actions";
import TasksContainer from "../components/TasksContainer";
import SideBar from "../components/SideBar";
import "./styles.scss";
import Navigation from "../components/Navigation";
import ToggleDesign from "../components/Buttons/Btns/ToggleDesignBtns";
import NewTaskBtn from "../components/Buttons/Btns/NewTaskBtn";
import NewTask from "../components/Modals/NewTask";
import { Store } from "../interfaces/store/types.d";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((store: Store) => store.users);
  const tasks = useSelector((store: Store) => store.tasks);
  const [toggleCreateModal, setToggleCreateModal] = useState<boolean>(true);

  useEffect(() => {
    if (users.length < 1 && tasks.length < 1) {
      dispatch(getTasks());
      dispatch(getUsers());
    }
  }, [tasks]);

  return (
    <>
      <div className="home">
        <SideBar />
        <Navigation user={users[3]} />
        <div className="home__control__icons">
          <ToggleDesign />
          <button
            type="button"
            className="btn__primary new__task__btn"
            onClick={() => setToggleCreateModal(!toggleCreateModal)}
          >
            <NewTaskBtn />
          </button>
        </div>
        {tasks.length > 0 ? (
          <TasksContainer />
        )
          : (
            <div className="task-card-container">
              <Loader />
            </div>
          )}
      </div>
      <NewTask
        toggle={toggleCreateModal}
        setToggleCreateModal={setToggleCreateModal}
      />
    </>
  );
};

export default Home;

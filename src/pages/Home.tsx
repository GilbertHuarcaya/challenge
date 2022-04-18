import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, getUsers } from "../store/actions";
import { User } from "../interfaces/user/types.d";
import { Task } from "../interfaces/task/types.d";
import TasksContainer from "../components/TasksContainer";
import SideBar from "../components/SideBar";
import "./styles.scss";
import Navigation from "../components/Navigation";
import ToggleDesign from "../components/Buttons/Btns/ToggleDesignBtns";
import NewTaskBtn from "../components/Buttons/Btns/NewTaskBtn";
import NewTask from "../components/Modals/NewTask";
import { Store } from "../interfaces/store/types.d";
import Loader from "../components/Loader";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((store: Store) => store.users);
  const tasks = useSelector((store: Store) => store.tasks);
  const [toggleCreateModal, setToggleCreateModal] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getTasks());
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div className="home">
        <SideBar></SideBar>
        <Navigation user={users[3]}></Navigation>
        <div className="home__control__icons">
          <ToggleDesign></ToggleDesign>
          <button
            className="btn__primary new__task__btn"
            onClick={() => setToggleCreateModal(!toggleCreateModal)}>
            <NewTaskBtn></NewTaskBtn>
          </button>
        </div>
        {tasks.length > 0 ? (
          <TasksContainer></TasksContainer>
        ) : (
          <div className="task-card-container">
            <Loader />
          </div>
        )}
      </div>
      <NewTask
        toggle={toggleCreateModal}
        setToggleCreateModal={setToggleCreateModal}></NewTask>
    </>
  );
}

export default Home;

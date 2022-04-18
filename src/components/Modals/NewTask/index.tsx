import React, { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./styles.scss";
import AssigneeBtn from "../../Buttons/Btns/AssigneeBtn";
import EstimateBtn from "../../Buttons/Btns/EstimatedBtn";
import LabelBtn from "../../Buttons/Btns/LabelBtn";
import { User } from "../../../interfaces/user/types.d";
import AssigneeModal from "../NewTaskItems/AssigneeModal";
import EstimatedModal from "../NewTaskItems/EstimatedModal";
import LabelModal from "../NewTaskItems/LabelModal";
import { createTask, updateTask } from "../../../store/actions/index";
import { useDispatch } from "react-redux";
import { CreateTask, Task, UpdateTask } from "../../../interfaces/task/types.d";

type Props = {
  toggle: boolean;
  setToggleCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  task?: Task;
};
const NewTask = (props: Props) => {
  const dispatch = useDispatch();
  const { toggle, setToggleCreateModal, task } = props;
  const [toggleAssigneeModal, setToggleAssigneeModal] = useState<boolean>(true);
  const [toggleEstimatedModal, setToggleEstimatedModal] =
    useState<boolean>(true);
  const [toggleLabelModal, setToggleLabelModal] = useState<boolean>(true);
  const [value, setValue] = useState<Date | null>(null);
  const [tags, setTags] = useState<Array<string> | null>(null);
  const [assignee, setAssignee] = useState<User | null>(null);
  const [points, setPoints] = useState<number | null>(null);

  useEffect(() => {
    if (task) {
      setValue(new Date(task.dueDate));
      setTags(task.tags);
      setAssignee(task.assignee);
      setPoints(Number(task.pointEstimate));
    }
  }, []);

  const createNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    if (tags && points !== null && value && assignee && task) {
      const newTask: UpdateTask = {
        ...data,
        tags: tags,
        status: task.status || "BACKLOG",
        pointEstimate: points.toString(),
        dueDate: value,
        assigneeId: assignee?.id,
      };
      dispatch(updateTask(task.id, newTask));
      setToggleCreateModal(true);
      setValue(null);
      setTags(null);
      setAssignee(null);
      setPoints(null);
      setToggleEstimatedModal(true);
      setToggleAssigneeModal(true);
      setToggleLabelModal(true);
      (e.target as HTMLFormElement).reset();
    }
    if (tags && points !== null && value && assignee && !task) {
      const newTask: CreateTask = {
        ...data,
        tags: tags,
        status: "BACKLOG",
        pointEstimate: points.toString(),
        dueDate: value,
        assigneeId: assignee?.id,
      };
      dispatch(createTask(newTask));
      setToggleCreateModal(true);
      setValue(null);
      setTags(null);
      setAssignee(null);
      setPoints(null);
      setToggleEstimatedModal(true);
      setToggleAssigneeModal(true);
      setToggleLabelModal(true);
      (e.target as HTMLFormElement).reset();
    }
  };
  return (
    <div className={toggle ? "" : "modal__bg"} hidden={toggle}>
      <form className={`new-task__modal`} onSubmit={createNewTask}>
        <input
          placeholder={task ? task.name : "Task Title"}
          defaultValue={task ? task.name : ""}
          className="new-task__modal__input-name"
          name="name"
          required
          type="text"
        />
        <div className="new-task__modal__selectors">
          <button
            type="button"
            onClick={() => {
              setToggleEstimatedModal(!toggleEstimatedModal);
              setToggleAssigneeModal(true);
              setToggleLabelModal(true);
            }}
            className="btn__secondary-transparent">
            <EstimateBtn points={points}></EstimateBtn>
          </button>
          <button
            type="button"
            onClick={() => {
              setToggleAssigneeModal(!toggleAssigneeModal);
              setToggleEstimatedModal(true);
              setToggleLabelModal(true);
            }}
            className="btn__secondary-transparent">
            <AssigneeBtn assignee={assignee}></AssigneeBtn>
          </button>

          <button
            type="button"
            onClick={() => {
              setToggleLabelModal(!toggleLabelModal);
              setToggleEstimatedModal(true);
              setToggleAssigneeModal(true);
            }}
            className="btn__secondary-transparent">
            <LabelBtn tags={tags}></LabelBtn>
          </button>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Custom input"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <div className="btn__secondary-transparent form__input__btn form__input__btn__date-picker__calendar">
                  {InputProps?.endAdornment}
                  <p>{value ? value.toLocaleDateString() : "Due Date"}</p>
                  <input
                    placeholder={"Due Date"}
                    name="date"
                    ref={inputRef}
                    {...inputProps}
                    disabled
                    hidden></input>
                </div>
              )}
            />
          </LocalizationProvider>

          <AssigneeModal
            toggleAssigneeModal={toggleAssigneeModal}
            setAssignee={
              setAssignee as React.Dispatch<React.SetStateAction<User>>
            }></AssigneeModal>
          <EstimatedModal
            toggleEstimatedModal={toggleEstimatedModal}
            setPoints={
              setPoints as React.Dispatch<React.SetStateAction<number>>
            }></EstimatedModal>
          <LabelModal
            toggleLabelModal={toggleLabelModal}
            currentTags={tags}
            setTags={
              setTags as React.Dispatch<React.SetStateAction<string[]>>
            }></LabelModal>
        </div>
        <div className="new-task__modal__btns">
          <button
            onClick={() => {
              setToggleCreateModal(true);
              setToggleEstimatedModal(true);
              setToggleAssigneeModal(true);
              setToggleLabelModal(true);
            }}
            type="button"
            className="btn__secondary-transparent">
            <p>Cancel</p>
          </button>
          <button type="submit" className="btn__primary">
            {task ? <p>Update</p> : <p>Create</p>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;

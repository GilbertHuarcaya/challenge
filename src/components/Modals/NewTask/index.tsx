/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./styles.scss";
import { useDispatch } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import AssigneeBtn from "../../Buttons/Btns/AssigneeBtn";
import EstimateBtn from "../../Buttons/Btns/EstimatedBtn";
import LabelBtn from "../../Buttons/Btns/LabelBtn";
import { User } from "../../../interfaces/user/types.d";
import AssigneeModal from "../NewTaskItems/AssigneeModal";
import EstimatedModal from "../NewTaskItems/EstimatedModal";
import LabelModal from "../NewTaskItems/LabelModal";
import { createTask, updateTask } from "../../../store/actions/index";
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
  const [toggleEstimatedModal, setToggleEstimatedModal] = useState<boolean>(true);
  const [toggleLabelModal, setToggleLabelModal] = useState<boolean>(true);
  const [value, setValue] = useState<Date | null>(null);
  const [tags, setTags] = useState<Array<string> | null>(null);
  const [assignee, setAssignee] = useState<User | null>(null);
  const [points, setPoints] = useState<number | null>(null);
  const [status, setStatus] = useState("BACKLOG");

  useEffect(() => {
    if (task) {
      setValue(new Date(task.dueDate));
      setTags(task.tags);
      setAssignee(task.assignee);
      setPoints(Number(task.pointEstimate));
      setStatus(task.status);
    }
  }, [task]);

  const createNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    // update or modify task
    if (tags && points !== null && value && assignee && task) {
      const newTask: UpdateTask = {
        ...data,
        tags,
        status,
        pointEstimate: points.toString(),
        dueDate: value,
        assigneeId: assignee?.id,
      };
      dispatch(updateTask(task.id, newTask));
      setToggleCreateModal(true);
      setToggleEstimatedModal(true);
      setToggleAssigneeModal(true);
      setToggleLabelModal(true);
      (e.target as HTMLFormElement).reset();
    }
    // create task
    if (tags && points !== null && value && assignee && !task) {
      const newTask: CreateTask = {
        ...data,
        tags,
        status,
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
      setStatus("BACKLOG");
      setToggleEstimatedModal(true);
      setToggleAssigneeModal(true);
      setToggleLabelModal(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <div className={toggle ? "" : "modal__bg"} hidden={toggle}>
      <form className="new-task__modal" onSubmit={createNewTask}>
        <div className="new-task__modal__task-info">
          <input
            placeholder={task ? task.name : "Task Title"}
            defaultValue={task ? task.name : ""}
            className="new-task__modal__input-name"
            name="name"
            required
            type="text"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="BACKLOG">Backlog</MenuItem>
              <MenuItem value="TODO">Todo</MenuItem>
              <MenuItem value="DONE">Done</MenuItem>
              <MenuItem value="CANCELLED">Cancelled</MenuItem>
              <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="new-task__modal__selectors">
          <button
            type="button"
            onClick={() => {
              setToggleEstimatedModal(!toggleEstimatedModal);
              setToggleAssigneeModal(true);
              setToggleLabelModal(true);
            }}
            className="btn__secondary-transparent no-padding"
          >
            <EstimateBtn points={points} />
          </button>
          <button
            type="button"
            onClick={() => {
              setToggleAssigneeModal(!toggleAssigneeModal);
              setToggleEstimatedModal(true);
              setToggleLabelModal(true);
            }}
            className="btn__secondary-transparent no-padding"
          >
            <AssigneeBtn assignee={assignee} />
          </button>

          <button
            type="button"
            onClick={() => {
              setToggleLabelModal(!toggleLabelModal);
              setToggleEstimatedModal(true);
              setToggleAssigneeModal(true);
            }}
            className="btn__secondary-transparent no-padding"
          >
            <LabelBtn tags={tags} />
          </button>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <div className="form__input__btn__date-picker__calendar">
                  {InputProps?.endAdornment}
                  <p>{value ? value.toLocaleDateString() : "Due Date"}</p>
                  <input
                    className="btn__secondary-transparent"
                    placeholder="Due Date"
                    ref={inputRef}
                    {...inputProps}
                    hidden
                  />
                </div>
              )}
            />
          </LocalizationProvider>

          <AssigneeModal
            toggleAssigneeModal={toggleAssigneeModal}
            setAssignee={
              setAssignee as React.Dispatch<React.SetStateAction<User>>
            }
          />
          <EstimatedModal
            toggleEstimatedModal={toggleEstimatedModal}
            setPoints={
              setPoints as React.Dispatch<React.SetStateAction<number>>
            }
          />
          <LabelModal
            toggleLabelModal={toggleLabelModal}
            currentTags={tags}
            setTags={
              setTags as React.Dispatch<React.SetStateAction<string[]>>
            }
          />
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
            className="btn__secondary-transparent"
          >
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

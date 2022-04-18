import React, { useEffect, useState } from "react";
import Label from "../ModalItem/Label";
import { useSelector } from "react-redux";
import { Task } from "../../../interfaces/task/types.d";
import { Store } from "../../../interfaces/store/types.d";

type Props = {
  toggleLabelModal: boolean;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  currentTags: string[] | null;
};


const LabelModal = (props: Props) => {
  const { toggleLabelModal, setTags, currentTags } = props;
  const tasks = useSelector((store: Store) => store.tasks);

  const allTags = [
    ...new Set(
      tasks
        .map((task: Task) => task.tags.map((tag) => tag.split("_").join(" ")))
        .flat()
    ),
  ];

  return (
    <div
      className={
        toggleLabelModal
          ? "modal__container-hidden "
          : "modal__container modal__label"
      }
      hidden={toggleLabelModal}>
      <p>Task Title</p>
      {allTags.map((tag) => (
        <Label
          label={tag}
          key={tag}
          currentTags={currentTags}
          setTags={setTags}></Label>
      ))}
    </div>
  );
};

export default LabelModal;

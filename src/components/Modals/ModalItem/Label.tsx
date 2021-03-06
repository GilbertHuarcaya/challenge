/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from "react";
import checked from "../../../images/png/checked.png";
import unchecked from "../../../images/png/unchecked.png";

type Props = {
  label: string;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  currentTags: string[] | null;
};

const Tag = (props: Props) => {
  const { label, setTags, currentTags } = props;
  const [activeTag, setActiveTag] = useState<string[]>([]);
  useEffect(() => {
    if (currentTags) {
      setActiveTag(
        currentTags?.filter(
          (tag: string) => tag.split(" ").join("_") === label.split(" ").join("_"),
        ),
      );
    }
  }, [currentTags, label]);

  const addDeleteTags = (activeTags: string[], activeLabel: string) => {
    if (activeTag.length > 0) {
      return activeTags.filter(
        (tag: string) => tag.split(" ").join("_") !== activeLabel.split(" ").join("_"),
      );
    }
    return [...activeTags, activeLabel.split(" ").join("_")];
  };

  return (
    <>
      {currentTags ? (
        <div
          className="modal__item btn__secondary-transparent"
          onClick={() => setTags(addDeleteTags(currentTags, label))}
        >
          {activeTag.length > 0 ? (
            <img src={checked} alt="checked" />
          ) : (
            <img src={unchecked} alt="unchecked" />
          )}
          <p>{label}</p>
        </div>
      ) : (
        <div
          className="modal__item btn__secondary-transparent"
          onClick={() => setTags([label.split(" ").join("_")])}
        >
          {activeTag.length > 0 ? (
            <img src={checked} alt="checked" />
          ) : (
            <img src={unchecked} alt="unchecked" />
          )}
          <p>{label}</p>
        </div>
      )}
    </>
  );
};

export default Tag;

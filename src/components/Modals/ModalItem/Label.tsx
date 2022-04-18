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
          (tag: string) =>
            tag.split(" ").join("_") === label.split(" ").join("_")
        )
      );
    }
  }, [currentTags]);

  const addDeleteTags = (currentTags: string[], label: string) => {
    if (activeTag.length > 0) {
      return currentTags.filter(
        (tag: string) => tag.split(" ").join("_") !== label.split(" ").join("_")
      );
    }
    return [...currentTags, label.split(" ").join("_")];
  };

  return (
    <>
      {currentTags ? (
        <div
          className="modal__item btn__secondary-transparent"
          onClick={() => setTags(addDeleteTags(currentTags, label))}>
          {activeTag.length > 0 ? (
            <img src={checked}></img>
          ) : (
            <img src={unchecked}></img>
          )}
          <p>{label}</p>
        </div>
      ) : (
        <div
          className="modal__item btn__secondary-transparent"
          onClick={() => setTags([label.split(" ").join("_")])}>
          {activeTag.length > 0 ? (
            <img src={checked}></img>
          ) : (
            <img src={unchecked}></img>
          )}
          <p>{label}</p>
        </div>
      )}
    </>
  );
};

export default Tag;

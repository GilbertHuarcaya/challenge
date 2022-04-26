import React from "react";
import LabelIcon from "../IconsBtn/LabelIcon";

type Props = {
  tags: Array<string> | null;
};

const LabelBtn = (props: Props) => {
  const { tags } = props;
  return (
    <div className="form__input__btn">
      <LabelIcon />
      <p>{tags ? tags[0] : "Label"}</p>
    </div>
  );
};

export default LabelBtn;

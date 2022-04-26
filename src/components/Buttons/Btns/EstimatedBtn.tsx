import React from "react";
import EstimateIcon from "../IconsBtn/EstimatedIcon";

type Props = {
  points: number | null;
};

const EstimateBtn = (props: Props) => {
  const { points } = props;
  return (
    <div className="form__input__btn">
      <EstimateIcon />
      <p>
        {points === 0 || points
          ? `${points} ${(points as number) === 1 ? "Point" : "Points"}`
          : "Estimated"}
      </p>
    </div>
  );
};

export default EstimateBtn;

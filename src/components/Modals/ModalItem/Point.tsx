import React from "react";
import EstimateIcon from "../../Buttons/IconsBtn/EstimatedIcon";
type Props = {
  estimated: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};
const Point = (props: Props) => {
  const { estimated, setPoints } = props;
  return (
    <div
      className="modal__item btn__secondary-transparent"
      onClick={() => setPoints(estimated)}>
      <EstimateIcon></EstimateIcon>
      <p>{`${estimated} ${estimated === 1 ? "Point" : "Points"} `}</p>
    </div>
  );
};

export default Point;

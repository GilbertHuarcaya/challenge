import React from "react";
import Point from "../ModalItem/Point";

type Props = {
  toggleEstimatedModal: boolean;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};

const EstimatedModal = (props: Props) => {
  const { toggleEstimatedModal, setPoints } = props;
  const points: Array<number> = [0, 1, 2, 4, 8];
  return (
    <div
      className={
        toggleEstimatedModal
          ? "modal__container-hidden "
          : "modal__container modal__estimate"
      }
      hidden={toggleEstimatedModal}
    >
      <p>Estimate</p>
      {points.map((point) => (
        <Point estimated={point} key={point} setPoints={setPoints} />
      ))}
    </div>
  );
};

export default EstimatedModal;

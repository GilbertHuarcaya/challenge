import React from "react";

type Props = {
  label: string;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const Tag = (props: Props) => {
  const { label, setTags } = props;

  return (
    <div
      className="modal__item btn__secondary-transparent"
      onClick={() => setTags([label])}>
      🔳
      <p>{label}</p>
    </div>
  );
};

export default Tag;

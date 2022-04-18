import React from "react";
type Props = {
  active: boolean;
  border: boolean;
};
const ListIcon = (props: Props) => {
  const { active, border } = props;
  return (
    <div className={border ? "active" : "unactive"}>
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
          fill={active ? "#DA584B" : "white"}
        />
      </svg>
    </div>
  );
};

export default ListIcon;

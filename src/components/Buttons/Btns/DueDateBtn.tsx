import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../interfaces/store/types.d";

type Props = {
  dueDate: string;
};
const DueDateBtn = (props: Props) => {
  const { dueDate } = props;
  const display = useSelector((store: Store) => store.app.toggleTasksDisplay);
  let formatedDate: string[] | string = "";

  if (dueDate !== "TODAY" && dueDate !== "YESTERDAY") {
    formatedDate = dueDate.toUpperCase().split(" ");
    formatedDate.splice(1, 1, `${dueDate.toUpperCase().split(" ")[1]},`);
    formatedDate = formatedDate.join(" ");
  } else formatedDate = dueDate;

  return (
    <div
      className={display === "dashboard" ? `due-date__btn ${dueDate === "YESTERDAY" ? "warning" : null}` : `due-date__list__btn ${dueDate === "YESTERDAY" ? "warning__list" : null}`}
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0001 20C9.81817 20 8.64785 19.7672 7.55592 19.3149C6.46399 18.8626 5.47184 18.1997 4.63611 17.364C3.80038 16.5282 3.13745 15.5361 2.68515 14.4442C2.23286 13.3522 2.00007 12.1819 2.00007 11C2.00007 9.81811 2.23286 8.64779 2.68515 7.55586C3.13745 6.46393 3.80038 5.47178 4.63611 4.63605C5.47184 3.80032 6.46399 3.13739 7.55592 2.68509C8.64785 2.2328 9.81817 2.00001 11.0001 2.00001C13.387 2.00001 15.6762 2.94822 17.364 4.63605C19.0519 6.32388 20.0001 8.61306 20.0001 11C20.0001 13.387 19.0519 15.6761 17.364 17.364C15.6762 19.0518 13.387 20 11.0001 20ZM11.0001 18C11.9193 18 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2997 17.1154 14.5281 17.4672 13.6788C17.819 12.8295 18.0001 11.9193 18.0001 11C18.0001 10.0808 17.819 9.1705 17.4672 8.32123C17.1154 7.47195 16.5998 6.70027 15.9498 6.05026C15.2998 5.40025 14.5281 4.88464 13.6789 4.53285C12.8296 4.18107 11.9193 4.00001 11.0001 4.00001C9.14355 4.00001 7.36308 4.73751 6.05032 6.05026C4.73757 7.36302 4.00007 9.14349 4.00007 11C4.00007 12.8565 4.73757 14.637 6.05032 15.9498C7.36308 17.2625 9.14355 18 11.0001 18ZM12.0001 11H15.0001V13H10.0001V6.00001H12.0001V11ZM0.74707 4.28201L4.28207 0.747009L5.69707 2.16101L2.16007 5.69701L0.74707 4.28201ZM17.7171 0.747009L21.2531 4.28201L19.8391 5.69701L16.3031 2.16101L17.7181 0.747009H17.7171Z"
          fill={dueDate === "YESTERDAY" ? "#DA584B" : "white"}
        />
      </svg>
      <p>{display === "dashboard" ? formatedDate : formatedDate[0].toUpperCase() + formatedDate.substring(1).toLowerCase()}</p>
    </div>
  );
};

export default DueDateBtn;

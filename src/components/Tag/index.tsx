/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./styles.scss";

type TagProps = {
  tagName: string;
};

const Tag = (props: TagProps) => {
  const { tagName } = props;
  const colors: Array<string> = ["green", "yellow", "red", "white", "blue"];
  const [color, setColor] = useState("white");

  useEffect(() => {
    switch (tagName) {
      case "ANDROID":
        setColor(colors[0]);
        break;
      case "REACT":
        setColor(colors[1]);
        break;
      case "NODE_JS":
        setColor(colors[2]);
        break;
      case "IOS":
        setColor(colors[3]);
        break;
      case "RAILS":
        setColor(colors[4]);
        break;
      default:
        setColor(colors[3]);
        break;
    }
  }, [tagName]);

  return <p className={`tag tag-${color}`}>{tagName.split("_").join(" ")}</p>;
};

export default Tag;

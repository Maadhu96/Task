import React, { useState } from "react";

const Bcomponent = (props) => {
  console.log(props.value);
  const [color, setColor] = useState("yellow");
  const [counter, setCounter] = useState(props.value);
  const [secondColor, setSecondColor] = useState("red");
  const [isTrue, setisTrue] = useState(true);
  const handleClick = () => {
    setCounter(counter + 10);
    setColor(secondColor);
  };
  const handleSecondClick = () => {
    setSecondColor(isTrue ? "red" : "blue");
    setisTrue(!isTrue);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: color,
          height: 100,
          width: 100,
          borderRadius: "50%",
        }}
      ></div>
      <span
        onClick={handleClick}
        style={{
          display: "inline-block",
          borderBottom: "1px solid",
        }}
      >
        Click to increment
      </span>
      <p style={{ position: "absolute", top: "39px", left: "35px" }}>
        {" "}
        {counter}
      </p>
      <button
        onClick={handleSecondClick}
        style={{
          backgroundColor: secondColor,
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Bcomponent;

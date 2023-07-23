import React from "react";

const ClickHandler = () => {
  const clickHandler = (e) => {
    console.log("button clicked", e);
  };
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default ClickHandler;

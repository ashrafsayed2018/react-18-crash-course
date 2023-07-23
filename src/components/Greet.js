import React from "react";

export const Greet = (props) => {
  const { name, heroname } = props;
  return (
    <>
      <div>{name}</div>
      <div>{heroname}</div>
      {props.children}
    </>
  );
};

// export default Greet;

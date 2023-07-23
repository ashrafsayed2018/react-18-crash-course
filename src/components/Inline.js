import React from "react";

const Inline = () => {
  const heading = {
    color: "blue",
    fontSize: "72px",
  };
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">error</h1>
      <h1 className="error">success</h1>
    </div>
  );
};

export default Inline;

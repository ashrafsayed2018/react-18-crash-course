import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`hello parent ${childName}`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

export default ParentComponent;

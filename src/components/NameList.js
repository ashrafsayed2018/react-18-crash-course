import React from "react";

const NameList = () => {
  const names = ["ashraf", "omer", "ali"];
  return (
    <div>
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};

export default NameList;

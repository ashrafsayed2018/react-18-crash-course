import React from "react";

const UserGreeting = () => {
  let isLoggedIn = true;
  return <div>welcome {isLoggedIn && "ashraf"}</div>;
};

export default UserGreeting;

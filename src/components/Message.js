import React from "react";
import { useState } from "react";
const Message = () => {
  const [message, setMessage] = useState("welcom visitor");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("thank you for subscribing")}>
        subscribe
      </button>
    </div>
  );
};

export default Message;

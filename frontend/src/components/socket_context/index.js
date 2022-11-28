import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { initSockets } from "../sockets/index";

// Cursor colors
const colors = ["red", "yellow", "purple", "green", "orange", "blue"];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const SocketProvider = (props) => {
  const [value, setValue] = useState({
    color: randomColor(),
    users: {}
  });

  useEffect(() => initSockets({ setValue }), []);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};
export default SocketProvider;
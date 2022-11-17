import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { initSockets } from "../sockets/index";

const SocketProvider = (props) => {
  const [value, setValue] = useState({
    users: {},
    cursorPositions: null,
  });

  useEffect(() => initSockets({ setValue }), []);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};
export default SocketProvider;
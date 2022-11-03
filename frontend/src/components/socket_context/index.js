import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { initSockets } from "../sockets/index";

const SocketProvider = (props) => {
  const [value, setValue] = useState({
    queueLength: 0,
    positionInLine: 0,
    cursorPosition: null,
  });

  useEffect(() => initSockets({ setValue }), []);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};
export default SocketProvider;
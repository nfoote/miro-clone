import { createContext } from "react";

const SocketContext = createContext({  
  cursorPositions: null,
  users: {},
});

export default SocketContext;
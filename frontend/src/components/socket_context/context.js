import { createContext } from "react";

const SocketContext = createContext({  
  queueLength: 0,  
  positionInLine: 0,
  cursorPosition: null,
});

export default SocketContext;
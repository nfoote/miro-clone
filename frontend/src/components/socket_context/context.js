import { createContext } from "react";

const SocketContext = createContext({  
  cursorPositions: null, // TODO Remove unused
  users: {}, // Rename this to clients to match backend
});

export default SocketContext;
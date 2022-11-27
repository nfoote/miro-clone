import { createContext } from "react";

const SocketContext = createContext({
  color: null,  
  users: {},
});

export default SocketContext;
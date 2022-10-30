import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Canvas from "./components/canvas";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  // TODO : Send canvas events to socket backend
  //const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);

  return (
    <>
      <Canvas />
    </>
  );
}

export default App;
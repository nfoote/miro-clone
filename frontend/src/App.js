import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Canvas from "./components/canvas";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  return (
    <>
      <Canvas />
    </>
  );
}

export default App;
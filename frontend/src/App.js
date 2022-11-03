import React, { useState, useEffect } from "react";
import Canvas from "./components/canvas";
import SocketProvider from "./components/socket_context";

function App() {
  return (
    <>
      <SocketProvider>
        <Canvas />
      </SocketProvider>
    </>
  );
}

export default App;
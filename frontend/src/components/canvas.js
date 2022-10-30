import React, { useRef, useEffect, useState } from "react";
import Flex from "./flex";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
	const [posY, setPosY] = useState(null);
	const [posX, setPosX] = useState(null);
	let clients = {};
  let pointers = {};

	function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  useEffect(() => {
		const socket = socketIOClient(ENDPOINT);

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        setContext(renderCtx);
      }
    }

    if (context) {
		canvasRef.current.addEventListener('mousemove', function(evt) {
				const { x, y } = getMousePos(canvasRef.current, evt);
				setPosY(y);
				setPosX(x);

				socket.emit("mousemove", {
          x: x,
          y: y
          //drawing: drawing
        });


			}, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);



  return (
		<>
			<p>Canvas x{posX} Canvas y{posY}</p>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          border: "2px solid #000",
          marginTop: 10,
        }}
      />
		</>

  );
};

export default Canvas;

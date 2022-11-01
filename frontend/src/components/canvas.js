import React, { useRef, useEffect, useState } from "react";
import Flex from "./flex";
import socketIOClient from "socket.io-client";
import { Pointer } from "./pointer";

const style = {
	position: "relative",
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
	const [posY, setPosY] = useState(null);
	const [posX, setPosX] = useState(null);
	//const [pointers, setPointers] = useState([]);

	function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

	useEffect(() => {
		function handleMouseMove(event) {
			const { x, y } = getMousePos(canvasRef.current, event);
			setPosY(y);
			setPosX(x);
		}
	
		canvasRef.current.addEventListener('mousemove', handleMouseMove)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

  return (
		<>
			<p>Canvas x{posX} Canvas y{posY}</p>
			{/* <p>{JSON.stringify(pointers)}</p> */}
			{/* <div style={style}>
				{pointers.map(data => <Pointer {...data}  />)}
			</div> */}
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

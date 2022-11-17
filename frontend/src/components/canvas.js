import React, { useRef, useEffect, useState, useContext } from "react";
import Flex from "./flex";
import { Pointer } from "./pointer";
import SocketContext from '../components/socket_context/context'
import { mouseMove } from '../components/sockets/emit'

const style = {
	position: "relative",
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [posY, setPosY] = useState(null);
  const [posX, setPosX] = useState(null);

	function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

	function handleMouseMove(event) {
		const { x, y } = getMousePos(canvasRef.current, event);
		setPosY(y);
		setPosX(x);

		mouseMove(x, y);
	};

  const { users } = useContext(SocketContext);
  // console.log(cursorPositions, "context")
	useEffect(() => {
		canvasRef.current.addEventListener('mousemove', handleMouseMove)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, []);
	console.log(users);
  return (
		<>
			<p>Canvas x{posX} Canvas y{posY}</p>
			{/* <p>{JSON.stringify(pointers)}</p> */}
			{/* <div style={style}>
				{users.map(data => <Pointer {...data}  />)}
			</div> */}
			{/* <div style={style}>
				<Pointer {...cursorPosition} />
			</div> */}
			<div style={style}>
				{Object.keys(users).map((keyName, i) => (
					<Pointer {...users[keyName]} />
				))}
			</div>

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

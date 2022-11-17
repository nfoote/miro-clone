import { socket } from "./index";

export const mouseMove = (x, y) => {
	socket.emit("mousemove", {
		x: x,
		y: y
	});
};

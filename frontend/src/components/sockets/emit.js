import { socket } from "./index";

export const mouseMove = (x, y, color) => {
	socket.emit("mousemove", {
		x: x,
		y: y,
		color: color
	});
};

import { socket } from "./index";
export const addClientToQueue = () => {
  socket.emit('addClientIdToQueue');
};
export const getQueueLength = () => {
  socket.emit('queueLengthToSocket');
};
export const removeUserFromQueue = () => {
  socket.emit('removeUserFromQueue');
};

export const mouseMove = (x, y) => {
	socket.emit("mousemove", {
		x: x,
		y: y
	});
};
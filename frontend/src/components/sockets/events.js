import { socket } from './index';
export const socketEvents = ({ setValue }) => {
  socket.on('queueLength', ({ queueLength }) => {
    setValue(state => { return { ...state, queueLength } });
  });

  socket.on('positionInLine', ({ positionInLine }) => {
    setValue(state => { return { ...state, positionInLine } });
  });

  socket.on('moving', (data) => {
    console.log(data, "socket.on.moving")



    setValue(state => { return { ...state, cursorPosition: data } });
  });
};
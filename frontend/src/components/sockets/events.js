import { socket } from './index';
export const socketEvents = ({ setValue }) => {
  
  socket.on('moving', (data) => {
    setValue(state => { return {
      ...state,     
      users: { ...state.users, [data.id]: data }
    }});
  });
};
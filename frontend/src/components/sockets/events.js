import { socket } from './index';
export const socketEvents = ({ setValue }) => {
  socket.on('moving', data => {
    setValue(state => { return {
      ...state,
      users: { ...state.users, [data.id]: data }
    }});
  });

  socket.on('clientdisconnect', id => {
    const removeUser = state => {
      const currentUsers = {
          ...state.users,
      };
      
      delete currentUsers[id];
      return currentUsers;
    }
    setValue(state => { return {
      ...state,     
      users: removeUser(state)
    }});
  });
};
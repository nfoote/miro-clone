import { socket } from './index';
export const socketEvents = ({ setValue }) => {

  socket.on('connect', function () {
    // Join a room
    //socket.emit('joinRoom', "random-room");
    console.log(socket.id, "this sockets id");

    //socket.emit("getRoom", "random-room")
  });

  // socket.on('returnRoom', function (data) {
  //   setValue(state => { return { 
  //     ...state,     
  //     users: [...data]
  //   }});
  // });

  // socket.on('userJoined', function (data) {
  //   // Join a room
  //   // socket.emit('joinRoom', "random-room");
  //   // console.log(socket.id, "message received")

  //   const {id, roomName} = data;
  //   console.log("user joined", id, roomName)

  //   setValue(state => { return { 
  //     ...state,     
  //     users:
  //       state.users.find(x => x.id === data.id)
  //       ? state.users.map(obj => {
  //           if (obj.id === data.id) {
  //             return obj;
  //           } else {
  //             return obj;
  //           }      
  //         })
  //       : [...state.users, data]
  //   }});

  // });

  socket.on('moving', (data) => {

    // const newArray = [
    //   ...value.cursorPositions,
    // ];
    
    //console.log(newArray, "test")

    //console.log(data.id, "socket.on.moving")
    // if (!value.cursorPositions.find(x => x.id === data.id)) {
    //   //newArray.push({ id: data.id, x: data.x, y: data.y })
    //   value.cursorPositions = [...this.state.myArray, ...[1,2,3] ]
    // }

    //const hasPosition = value.cursorPositions.find(x => x.id === data.id) !== null;
    //console.log(hasPosition)
    //console.log(newArray, "after push")

    // const newPositions = value?.cursorPositions?.map(obj => {
    //   if (obj.id === data.id) {
    //     return {...obj, x: obj.x, y: obj.y};
    //   } else {
    //     return obj;
    //   }      
    // });
    //state.users.find(x => x.id === data.id)
    //console.log(value, "value")
    //console.log(value, "value")
    console.log(data, "moving")

    // function update (state, data) {
    //   const { users } = state;
    //   let newState = {};

    //   if(users[data.id]) {
    //     newState = [...state, users[data.id] = data]
    //   } else {

    //   }

    //   console.log("userstate", users)
    //   return {};
    // }

    setValue(state => { return { 
      ...state,     
      users: {...state.users, [data.id]: data}
      // state.users[data.id] 
      // ?
      // state.users.map(obj => {
      //   if (obj.id === data.id) {
      //     //console.log("found")
      //     return {...obj, x: obj.x, y: obj.y};
      //   } else {
      //     //console.log("not found")

      //     return obj;
      //   }      
      // })
      // :[...state.users, data]
      //[...state.users, data]
        // state.users[data.id]
        // ? state.users.map(obj => {
        //     if (obj.id === data.id) {
        //       //console.log("found")
        //       return {...obj, x: obj.x, y: obj.y};
        //     } else {
        //       //console.log("not found")

        //       return obj;
        //     }      
        //   })
        // : [...state.users, data]
    }});
  });
};
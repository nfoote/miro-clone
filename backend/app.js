const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const index = require("./routes/index");
app.use(index);

const port = process.env.PORT || 4001;
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
    }
});

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   if (interval) {
//     clearInterval(interval);
//   }
  
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };
const clients = {};

const addClient = socket => {
  console.log("New client connected", socket.id);
  clients[socket.id] = socket;
};
const removeClient = socket => {
  console.log("Client disconnected", socket.id);
  delete clients[socket.id]; // todo delete?
};

io.on("connection", (socket) => {
  console.log("Connection called")
  socket.join("room");

  let id = socket.id;
  socket.on("mousemove", data => {
    console.log(data);
    data.id = id;
    //socket.broadcast.emit("moving", data);

    io.to("room").emit("moving", data);
  });
  
});

// io.sockets.on("connection", socket => {
//   let id = socket.id;

//   addClient(socket);

//   socket.on("mousemove", data => {
//     console.log(data);
//     data.id = id;
//     socket.broadcast.emit("moving", data);
//   });

//   socket.on("disconnect", () => {
//     removeClient(socket);
//     socket.broadcast.emit("clientdisconnect", id);
//   });
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
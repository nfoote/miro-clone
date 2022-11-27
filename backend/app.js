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

io.on("connection", (socket) => {
  let id = socket.id;
  socket.join("room1")

  socket.on("mousemove", data => {
    const newData =  { id: id, ...data };
    socket.to("room1").emit("moving", newData);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("clientdisconnect", id);
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));
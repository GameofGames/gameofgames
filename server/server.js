const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const cors = require('cors');
// const fetch = require("node-fetch");
const http = require("http").createServer(app); // wraps http over express server
const io = require("socket.io")(http); // makes a socket instance using http

const PORT = 3000;

const userController = require("./controllers/userController");
const gameController = require("./controllers/gameController");

app.use(cookieParser());
app.use(express.json());
// app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

app.use("/build", express.static(path.join(__dirname, "../build")));
app.use(express.static("/client"));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../client/index.html"));
});

// special 'connection' and 'disconnect' events
io.on("connection", (socket) => {
  // console.log('a user connected');
  socket.on("disconnect", () => {
    // console.log('user disconnected');
  });

  // listens for when client SENDS MESSAGE
  socket.on("msg", (msg) => {
    let message = `${msg.name}: ${msg.value}`
    io.emit("chat message", message); // emits a BROADCAST to all connected sockets
  });

  // NEW USERS SIGNING ON
  socket.on("user", (user) => {
    const userList = userController.addUser(user);
    if (userList.length >= 4) {
      //invoke the function to fetch the random pic from uri link, send that uri and word to the front end, and store it in state
      gameController.startGame(io);
    }
    //Displaying users in the scoreboard component
    io.emit("userList", userList);
  });

  socket.on("nextPic", (val) => {
    if (val === true) {
      gameController.startGame(io);
    }
  });

  socket.on("updateUserPoint", (username) => {
    const userList = userController.addPoint(username,io);
    io.emit("userList", userList);
  });
});

//Handles all unknown URLs
app.use("*", (req, res) => {
  res.status(404).send("URL path not found");
});

//Catch all route handler - NEEDS UPDATING -
app.use((req, res) => {
  console.log("catch-all route handler is working");
});

//Tells server to listen
http.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

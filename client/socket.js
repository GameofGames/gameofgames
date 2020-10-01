import io from "socket.io-client";

const socket = io("http://localhost:3000", {
  // defaults to window.location but since we are on 8080 we set to 3000
  transports: ["websocket"],
});

export default socket;

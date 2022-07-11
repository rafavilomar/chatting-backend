import { Server } from "socket.io";

export default (io: Server) => {
  io.on("connection", () => {
    // eslint-disable-next-line no-console
    console.info("Socket connection");
  });
};

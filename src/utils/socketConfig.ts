import { Server } from "socket.io";
import Message from "../models/Message";
import User from "../models/User";

const userList: User[] = [];

export default (io: Server) => {
  io.on("connection", (socket: any) => {
    socket.on("login", (newUser: User) => {
      // eslint-disable-next-line no-param-reassign
      socket.user = newUser;
      if (
        userList.findIndex((user) =>
          user.username.startsWith(newUser.username)
        ) === -1
      ) {
        userList.push(newUser);
        io.sockets.emit("user-list-active", userList);
      }
    });

    socket.on("logout", () => {
      const index = userList.findIndex((user) =>
        user.username.startsWith(socket.user.username)
      );

      userList.splice(index, 1);
      io.sockets.emit("user-list-active", userList);
    });

    socket.on("send-message", (message: string) => {
      const newMessage: Message = {
        date: new Date(),
        user: socket.user,
        message,
      };
      io.sockets.emit("new-message", newMessage);
    });
  });
};

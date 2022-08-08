import { Server } from "socket.io";
import MessageDTO from "../DTOs/MessageDTO";
import UserDTO from "../DTOs/UserDTO";

const userList: UserDTO[] = [];

export default (io: Server) => {
  io.on("connection", (socket: any) => {
    socket.on("login", (newUser: UserDTO) => {
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
      const newMessage: MessageDTO = {
        user: socket.user,
        message,
      };
      io.sockets.emit("new-message", newMessage);
    });
  });
};

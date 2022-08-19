import { Server } from "socket.io";
import MessageDTO from "../DTOs/MessageDTO";
import UserDTO from "../DTOs/UserDTO";
import { saveMessage } from "../Service/MessageService";
import { findByUsername, saveUser } from "../Service/UserService";

const userList: UserDTO[] = [];

export default (io: Server) => {
  io.on("connection", (socket: any) => {
    socket.on("join", async (user: UserDTO) => {
      await saveUser(user);
      userList.push(user);
      io.sockets.emit("user-list-active", userList);
    });

    socket.on("login", async (newUser: UserDTO) => {
      // eslint-disable-next-line no-param-reassign
      socket.user = newUser;
      const userFromDB = await findByUsername(newUser.username);
      if (
        userList.findIndex((user) =>
          user.username.startsWith(newUser.username)
        ) === -1 && userFromDB &&
        userFromDB.password === newUser.password
      ) {
        userList.push(newUser);
        io.sockets.emit("user-list-active", userList);
        io.sockets.emit("error-login", false);
      } else {
        io.sockets.emit("error-login", true);
      }
    });

    socket.on("logout", () => {
      const index = userList.findIndex((user) =>
        user.username.startsWith(socket.user.username)
      );

      userList.splice(index, 1);
      io.sockets.emit("user-list-active", userList);
    });

    socket.on("send-message", async (message: string) => {
      const newMessage: MessageDTO = {
        user: socket.user,
        message,
      };
      await saveMessage(newMessage);
      io.sockets.emit("new-message", newMessage);
    });
  });
};

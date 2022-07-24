"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userList = [];
exports.default = (io) => {
    io.on("connection", (socket) => {
        socket.on("login", (newUser) => {
            if (userList.findIndex((user) => user.username.startsWith(newUser.username)) === -1) {
                // eslint-disable-next-line no-param-reassign
                socket.user = newUser;
                userList.push(newUser);
                io.sockets.emit("user-list-active", userList);
            }
        });
        socket.on("logout", () => {
            const index = userList.findIndex((user) => user.username.startsWith(socket.user.username));
            userList.splice(index, 1);
            io.sockets.emit("user-list-active", userList);
        });
        socket.on("send-message", (message) => {
            const newMessage = {
                date: new Date(),
                user: socket.user,
                message,
            };
            io.sockets.emit("new-message", newMessage);
        });
    });
};

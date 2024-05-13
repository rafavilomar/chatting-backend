"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageService_1 = require("../Service/MessageService");
const UserService_1 = require("../Service/UserService");
const userList = [];
exports.default = (io) => {
    io.on("connection", (socket) => {
        socket.on("join", (user) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, UserService_1.saveUser)(user);
            userList.push(user);
            io.sockets.emit("user-list-active", userList);
        }));
        socket.on("login", (newUser) => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line no-param-reassign
            socket.user = newUser;
            const userFromDB = yield (0, UserService_1.findByUsername)(newUser.username);
            if (userList.findIndex((user) => user === null || user === void 0 ? void 0 : user.username.startsWith(newUser === null || newUser === void 0 ? void 0 : newUser.username)) === -1 && userFromDB &&
                userFromDB.password === newUser.password) {
                userList.push(newUser);
                io.sockets.emit("user-list-active", userList);
                io.sockets.emit("error-login", false);
            }
            else {
                io.sockets.emit("error-login", true);
            }
        }));
        socket.on("logout", () => {
            const index = userList.findIndex((user) => { var _a; return user === null || user === void 0 ? void 0 : user.username.startsWith((_a = socket === null || socket === void 0 ? void 0 : socket.user) === null || _a === void 0 ? void 0 : _a.username); });
            userList.splice(index, 1);
            io.sockets.emit("user-list-active", userList);
        });
        socket.on("send-message", (message) => __awaiter(void 0, void 0, void 0, function* () {
            const newMessage = {
                username: socket.user.username,
                message,
            };
            yield (0, MessageService_1.saveMessage)(newMessage);
            io.sockets.emit("new-message", newMessage);
        }));
    });
};

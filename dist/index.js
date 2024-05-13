"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const App_1 = __importDefault(require("./App"));
const envConfig_1 = __importStar(require("./utils/envConfig"));
const socketConfig_1 = __importDefault(require("./utils/socketConfig"));
const mongoConnection_1 = __importDefault(require("./utils/mongoConnection"));
const server = http_1.default.createServer(App_1.default);
const io = new socket_io_1.Server(server, { cors: { origin: "*" } });
(0, mongoConnection_1.default)();
(0, socketConfig_1.default)(io);
server.listen(envConfig_1.default.api.port, () => {
    (0, envConfig_1.validateEnvVariables)();
    // eslint-disable-next-line no-console
    console.info(`Listening on: ${envConfig_1.default.api.port}`);
});
exports.default = server;

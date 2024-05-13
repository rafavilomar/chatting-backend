import { Server as WebSocketServer } from "socket.io";
import http from "http";

import app from "./App";
import envConfig, { validateEnvVariables } from "./utils/envConfig";
import socketConfig from "./utils/socketConfig";
import MongoConnection from "./utils/mongoConnection";

const server = http.createServer(app);
const io = new WebSocketServer(server, { cors: { origin: "*" } });

MongoConnection();
socketConfig(io);
server.listen(envConfig.api.port, () => {
  validateEnvVariables();
  // eslint-disable-next-line no-console
  console.info(`Listening on: ${envConfig.api.port}`);
});

export default server;

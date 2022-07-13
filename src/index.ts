import { Server as WebSocketServer } from "socket.io";
import http from "http";

import app from "./App";
import envConfig, { validateEnvVariables } from "./utils/envConfig";
import socketConfig from "./utils/socketConfig";

const server = http.createServer(app);
const io = new WebSocketServer(server, { cors: { origin: "*" } });

socketConfig(io);
server.listen(envConfig.api.port, () => {
  validateEnvVariables();
  // eslint-disable-next-line no-console
  console.info(`Started :) | Listening on: ${envConfig.api.port}`);
});

export default server;

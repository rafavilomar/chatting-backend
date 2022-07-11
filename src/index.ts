import express, { Express } from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";

import envConfig from "./utils/envConfig";
import socketConfig from "./utils/socketConfig";

const app: Express = express();
const server = http.createServer(app);
const io = new WebSocketServer(server, { cors: { origin: "*" } });

socketConfig(io);
server.listen(envConfig.api.port, () => {
  // eslint-disable-next-line no-console
  console.info(`Started :) | Listening on: ${envConfig.api.port}`);
});

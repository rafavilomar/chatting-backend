import express, { Express, Request, Response } from "express";
import envConfig from "./envConfig";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hi! :)");
});

app.listen(envConfig.api.port, () => {
  console.info(`Started :) | Listening on: ${envConfig.api.port}`);
});

import express, { Express, Request, Response } from "express";

const app: Express = express();
app.get("/task", (req: Request, res: Response) => res.send("working..."));

export default app;

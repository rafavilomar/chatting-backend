import express, { Express } from "express";

const app: Express = express();
app.use(express.json());

app.get("/live", (req, res) => {
    res.send("I'm here!")
})

export default app;

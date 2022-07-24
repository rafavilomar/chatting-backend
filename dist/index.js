"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envConfig_1 = __importDefault(require("./envConfig"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hi! :)");
});
app.listen(envConfig_1.default.api.port, () => {
    console.info(`Started :) | Listening on: ${envConfig_1.default.api.port}`);
});

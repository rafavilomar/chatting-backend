"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema_1 = __importDefault(require("../Schemas/MessageSchema"));
const MessageModel = mongoose_1.default.model("Message", MessageSchema_1.default);
exports.default = MessageModel;

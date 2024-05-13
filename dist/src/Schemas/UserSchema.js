"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "This username is already taken"],
        minlength: [4, "Username must be at least 4 characters long"],
        validate: {
            validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
            message: "Username can only contain letters and numbers",
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
}, { timestamps: true });
exports.default = UserSchema;

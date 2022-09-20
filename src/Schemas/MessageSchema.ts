import mongoose from "mongoose";
import UserSchema from "./UserSchema";

const MessageSchema = new mongoose.Schema(
  {
    message: String,
    user: { type: UserSchema, required: true, ref: "User" },
  },
  { timestamps: true }
);
export default MessageSchema;

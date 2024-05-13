import mongoose from "mongoose";
import UserSchema from "./UserSchema";

const MessageSchema = new mongoose.Schema(
  {
    message: String,
    username: String
  },
  { timestamps: true }
);
export default MessageSchema;

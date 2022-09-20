import mongoose from "mongoose";
import MessageSchema from "../Schemas/MessageSchema";

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;

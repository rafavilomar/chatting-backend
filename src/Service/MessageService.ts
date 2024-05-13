import MessageDTO from "../DTOs/MessageDTO";
import MessageModel from "../ModelsMongo/MessageModel";

// eslint-disable-next-line import/prefer-default-export
export const saveMessage = async (message: MessageDTO) => {
  const messageModel = new MessageModel({message: message.message, username: message.username});
  return messageModel
    .save()
    .then(() => messageModel)
    .catch((error) => error);
};

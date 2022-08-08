import MessageDTO from "../DTOs/MessageDTO";
import MessageModel from "../ModelsMongo/MessageModel";

// eslint-disable-next-line import/prefer-default-export
export const saveMessage = async (message: MessageDTO) => {
  const messageModel = new MessageModel(message);
  return messageModel
    .save()
    .then(() => messageModel)
    .catch((error) => error);
};

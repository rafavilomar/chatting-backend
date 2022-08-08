import UserDTO from "../DTOs/UserDTO";
import UserModel from "../ModelsMongo/UserModel";

export const saveUser = async (user: UserDTO) => {
  const userModel = new UserModel(user);
  return userModel
    .save()
    .then(() => userModel)
    .catch((error) => error);
};

export const findByUsername = async (username: string) =>
  UserModel.findOne({ username })
    .then((user) => user)
    .catch((error) => error);

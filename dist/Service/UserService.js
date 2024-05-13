"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByUsername = exports.saveUser = void 0;
const UserModel_1 = __importDefault(require("../ModelsMongo/UserModel"));
const saveUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = new UserModel_1.default(user);
    return userModel
        .save()
        .then(() => userModel)
        .catch((error) => error);
});
exports.saveUser = saveUser;
const findByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return UserModel_1.default.findOne({ username })
        .then((user) => user)
        .catch((error) => error);
});
exports.findByUsername = findByUsername;

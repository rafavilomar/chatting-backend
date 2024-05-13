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
// eslint-disable-next-line import/no-extraneous-dependencies
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../src/index"));
const App_1 = __importDefault(require("../src/App"));
function sum(a, b) {
    return a + b;
}
describe("GET /task", () => {
    test("Should respond with a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(App_1.default).get("/task").send();
        expect(response.statusCode).toBe(200);
    }));
    afterAll(() => index_1.default.close());
});
describe("Sum function", () => {
    test("Should respond 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
});

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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = require("mongoose");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const src_1 = require("../../src");
let mongoServer;
let baseUrl;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    mongoServer = new mongodb_memory_server_1.MongoMemoryServer();
    yield mongoServer.start(); // Start the server instance
    const mongoUri = mongoServer.getUri(); // Get the URI after the instance has started
    yield mongoose_1.default.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const address = src_1.server.address();
    baseUrl = `http://127.0.0.1:${address.port}`;
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.disconnect();
    yield mongoServer.stop();
    src_1.server.close();
}));
describe('Axios API Test with Database Connection', () => {
    test('GET / should return "Account microservice is running"', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`${baseUrl}`);
        expect(response.status).toBe(200);
        expect(response.data.message).toBe('Account microservice is running');
    }));
    test('GET /api/accounts should return the newly created account', () => __awaiter(void 0, void 0, void 0, function* () {
        const account = {
            "Email": "hello",
            "Password": "hello",
            "Phone": "hello"
        };
        const response = yield axios_1.default.post(`${baseUrl}/api/accounts`, account);
        expect(response.status).toBe(200);
        expect(response.data.Email).toBe('hello');
        expect(response.data.Password).toBe('hello');
        expect(response.data.Phone).toBe('hello');
    }));
    test('POST /api/accounts should return "Internal Server Error" on error', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2); // Expecting two assertions within the test
        const account = {
            "Email": "hello",
            "Password": "hello",
            "Phone": "hello"
        };
        yield axios_1.default.post(`${baseUrl}/api/accounts`, account).catch(error => {
            expect(error.response.status).toBe(500);
            expect(error.response.data.message).toBe("Internal Server Error");
        });
    }));
});

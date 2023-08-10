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
exports.postService = void 0;
const mongoose_1 = require("mongoose");
const accountModel_1 = require("./accountModel");
const uri = 'mongodb://admin:password@localhost:27017/';
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((res) => {
    console.log('Connected to Distribution API Database - Initial Connection');
})
    .catch((err) => {
    console.log(`Initial Distribution API Database connection error occured -`, err);
});
const postService = (account) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = new accountModel_1.default(account);
    return yield userToAdd.save()
        .then(savedUser => {
        return savedUser;
    })
        .catch(err => {
        console.error('Error saving user:', err);
        throw err;
    });
});
exports.postService = postService;

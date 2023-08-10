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
exports.postController = void 0;
const accountService_1 = require("../models/accountService");
const postController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, accountService_1.postService)(req.body)
        .then((result) => {
        res.status(200).json(result);
    })
        .catch(() => {
        res.status(500).json({ message: "Internal Server Error" });
    });
});
exports.postController = postController;

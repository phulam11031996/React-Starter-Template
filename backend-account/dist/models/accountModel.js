"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountModel = new mongoose_1.Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    }
});
const AccountModel = mongoose_1.default.model('Account', accountModel);
exports.default = AccountModel;

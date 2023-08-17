"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const accountModel = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum password length
    },
});
// Hash the password before saving it to the database
accountModel.pre(['save'], async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    }
    next();
});
const AccountModel = mongoose_1.default.model('Account', accountModel);
exports.default = AccountModel;

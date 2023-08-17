"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putService = exports.deleteService = exports.getIdService = exports.getService = exports.postService = void 0;
const bcrypt = require("bcrypt");
const accountModel_1 = require("./accountModel");
const postService = async (account) => {
    const userToAdd = new accountModel_1.default(account);
    return await userToAdd
        .save()
        .then((savedUser) => {
        return savedUser;
    })
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.postService = postService;
const getService = async () => {
    return accountModel_1.default.find()
        .then((accounts) => accounts)
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.getService = getService;
const getIdService = async (id) => {
    return accountModel_1.default.findById(id)
        .then((account) => account)
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.getIdService = getIdService;
const deleteService = async (id) => {
    return accountModel_1.default.findByIdAndDelete(id)
        .then((result) => result)
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.deleteService = deleteService;
const putService = async (id, account) => {
    const salt = await bcrypt.genSalt(10);
    account.password = await bcrypt.hash(account.password, salt);
    return accountModel_1.default.findByIdAndUpdate(id, account)
        .then((result) => result)
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.putService = putService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uri = 'mongodb://admin:password@localhost:27017/';
const dbConnection = () => {
    mongoose_1.default
        .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((err) => {
        console.log('Failed to Connect to MongoDB', err);
    });
};
exports.default = dbConnection;

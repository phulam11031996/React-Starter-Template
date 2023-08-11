"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.server = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const accountRoute_1 = require("./routes/accountRoute");
const dbConnection_1 = require("./models/dbConnection");
require.main === module && (0, dbConnection_1.default)();
const PORT = 3000;
const app = express();
exports.app = app;
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Account microservice is running' });
});
app.use('/api', accountRoute_1.default);
const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
exports.server = server;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
// import connect from './db';
const accountRoute_1 = require("./routes/accountRoute");
const PORT = 3000;
const app = express();
// connect();
// Middleware
app.use(bodyParser.json());
// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript!');
});
app.use("/api", accountRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const accountController_1 = require("../controllers/accountController");
const router = express.Router();
router.route('/accounts').post(accountController_1.postController);
exports.default = router;

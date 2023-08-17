"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putController = exports.deleteController = exports.getIdController = exports.getController = exports.postController = void 0;
const accountService_1 = require("../models/accountService");
const httpCode_1 = require("../../common/httpCode");
const postController = async (req, res) => {
    await (0, accountService_1.postService)(req.body)
        .then((result) => {
        res.status(httpCode_1.CREATE_201).json(result);
    })
        .catch(() => {
        res.status(httpCode_1.INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
exports.postController = postController;
const getController = async (req, res) => {
    await (0, accountService_1.getService)()
        .then((result) => {
        res.status(httpCode_1.OK_200).json(result);
    })
        .catch(() => {
        res.status(httpCode_1.INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
exports.getController = getController;
const getIdController = async (req, res) => {
    await (0, accountService_1.getIdService)(req.params.id)
        .then((result) => {
        result && res.status(httpCode_1.OK_200).json(result);
        !result && res.status(httpCode_1.NOT_FOUND_404).json();
    })
        .catch(() => {
        res.status(httpCode_1.INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
exports.getIdController = getIdController;
const deleteController = async (req, res) => {
    await (0, accountService_1.deleteService)(req.params.id)
        .then(() => res.status(httpCode_1.NO_CONTENT_204).json())
        .catch(() => {
        res.status(httpCode_1.INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
exports.deleteController = deleteController;
const putController = async (req, res) => {
    await (0, accountService_1.putService)(req.params.id, req.body)
        .then((result) => {
        result && res.status(httpCode_1.OK_200).json(result);
        !result && res.status(httpCode_1.NOT_FOUND_404).json();
    })
        .catch(() => {
        res.status(httpCode_1.INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
exports.putController = putController;

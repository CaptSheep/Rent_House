"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./userRouter");
const postRouter_1 = require("./postRouter");
exports.router = (0, express_1.default)();
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/posts', postRouter_1.postRouter);
//# sourceMappingURL=router.js.map
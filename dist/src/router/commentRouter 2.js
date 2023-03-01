"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const commentController_1 = __importDefault(require("../controller/commentController"));
const auth_1 = __importDefault(require("../middleware/auth"));
exports.commentRouter = (0, express_1.default)();
exports.commentRouter.get('', auth_1.default.checkToken, commentController_1.default.getAllComment);
exports.commentRouter.post('/create', auth_1.default.checkToken, commentController_1.default.createComment);
exports.commentRouter.put('/update/:id', auth_1.default.checkToken, commentController_1.default.updateComment);
exports.commentRouter.delete('/delete/:id', auth_1.default.checkToken, commentController_1.default.deleteComment);
//# sourceMappingURL=commentRouter.js.map
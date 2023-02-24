"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = __importDefault(require("express"));
const postController_1 = __importDefault(require("../controller/postController"));
exports.postRouter = (0, express_1.default)();
exports.postRouter.post('/create', auth_1.default.checkToken, postController_1.default.createPost);
exports.postRouter.get('/info/:id', auth_1.default.checkToken, postController_1.default.postInfo);
//# sourceMappingURL=postRouter.js.map
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
exports.postRouter.get('/', auth_1.default.checkToken, postController_1.default.getAllPost);
exports.postRouter.post('/create', auth_1.default.checkToken, postController_1.default.createPost);
exports.postRouter.get('/info/:id', auth_1.default.checkToken, postController_1.default.postInfo);
exports.postRouter.get('/find/:id', auth_1.default.checkToken, postController_1.default.findById);
exports.postRouter.get('/find', auth_1.default.checkToken, postController_1.default.findHomes);
exports.postRouter.get('/findByCategory/:id', auth_1.default.checkToken, postController_1.default.findByCategory);
exports.postRouter.delete('/delete/:id', auth_1.default.checkToken, postController_1.default.deletePost);
exports.postRouter.post('/update/:id', auth_1.default.checkToken, postController_1.default.updatePost);
//# sourceMappingURL=postRouter.js.map
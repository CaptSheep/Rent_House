"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postServices_1 = require("../services/postServices");
class PostController {
    constructor() {
        this.createPost = async (req, res, next) => {
            let newPost = req.body;
            await this.postServices.addPost(newPost);
            res.status(200).json({
                mess: 'Create Successfully',
                post: newPost
            });
        };
        this.postServices = new postServices_1.PostServices();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map
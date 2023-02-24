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
        this.postInfo = async (req, res) => {
            let id = req.params.id;
            let postInfo = await this.postServices.postInfo(id);
            if (postInfo) {
                console.log(postInfo);
                res.status(200).json({
                    mess: `Home number ${id} information `,
                    info: postInfo
                });
            }
            else {
                res.status(404).json(`We dont have this room`);
            }
        };
        this.postServices = new postServices_1.PostServices();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postServices_1 = require("../services/postServices");
class PostController {
    constructor() {
        this.getAllPost = async (req, res) => {
            try {
                let allPost = await this.postServices.getAllPost();
                res.status(200).json(allPost);
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.createPost = async (req, res) => {
            try {
                let newPost = req.body;
                await this.postServices.addPost(newPost);
                res.status(200).json({
                    mess: 'Create Successfully',
                    post: newPost
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.postInfo = async (req, res) => {
            try {
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
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.updatePost = async (req, res) => {
            try {
                let id = req.params.id;
                let postInfo = await this.postServices.postInfo(id);
                if (postInfo) {
                    await this.postServices.editPost(id, req.body);
                    res.status(200).json({
                        mess: 'Update Successfully',
                        newPost: req.body
                    });
                }
                else {
                    res.status(404).json('We dont have this house');
                }
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.deletePost = async (req, res) => {
            try {
                let id = req.params.id;
                let homeInfo = await this.postServices.postInfo(id);
                if (homeInfo) {
                    await this.postServices.deletePost(id);
                    res.status(200).json({
                        mess: `Delete home number ${id} successfully`
                    });
                }
                else {
                    res.status(404).json(`We dont have this house`);
                }
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.postServices = new postServices_1.PostServices();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map
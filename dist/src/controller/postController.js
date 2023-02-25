"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postServices_1 = require("../services/postServices");
const categoriesServices_1 = require("../services/categoriesServices");
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
        this.findByCategory = async (req, res) => {
            try {
                let id = req.params.id;
                let category = await this.categoryService.getAllCategories();
                let homes = await this.postServices.findByCategory(id);
                res.status(200).json({
                    mess: `Home in Categories ${category[homes.categoryId - 1].name}`,
                    homeInfo: homes
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
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
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let home = await this.postServices.findById(id);
                if (home.length !== 0) {
                    res.status(200).json({
                        mess: `Find Home ${home[0].name} success`,
                        homeInfo: home[0]
                    });
                }
                else {
                    res.status(401).json({
                        mess: `Can not find this house`
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findHomes = async (req, res) => {
            try {
                let home = await this.postServices.findHomes(req.body.address, req.body.bedroom, req.body.bathroom, req.body.price);
                if (home.length !== 0) {
                    res.status(200).json({
                        mess: `Find home  ${home[0].address} success`,
                        homeInfo: home
                    });
                }
                else {
                    res.status(404).json({
                        mess: `Can not find this home`
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.postServices = new postServices_1.PostServices();
        this.categoryService = new categoriesServices_1.CategoriesServices();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map
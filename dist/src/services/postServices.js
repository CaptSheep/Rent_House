"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostServices = void 0;
const data_source_1 = require("../data-source");
const posts_1 = require("../model/posts");
class PostServices {
    constructor() {
        this.getAllPost = () => {
            return this.postRepository.find();
        };
        this.addPost = (post) => {
            return this.postRepository.save(post);
        };
        this.postInfo = async (id) => {
            let postInfo = await this.postRepository.findOneBy({ id: id });
            return postInfo;
        };
        this.editPost = async (id, post) => {
            return await this.postRepository.update({ id: id }, post);
        };
        this.deletePost = async (id) => {
            return this.postRepository.delete({ id: id });
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.postRepository = data_source_1.AppDataSource.getRepository(posts_1.Posts);
        });
    }
}
exports.PostServices = PostServices;
exports.default = new PostServices();
//# sourceMappingURL=postServices.js.map
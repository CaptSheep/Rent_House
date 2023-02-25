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
        this.findByCategory = async (id) => {
            return await this.postRepository.findOneBy({ categoryId: id });
        };
        this.deletePost = async (id) => {
            return this.postRepository.delete({ id: id });
        };
        this.findById = async (id) => {
            return await this.postRepository.query(`select posts.id,
                                                       posts.name,
                                                        posts.price,
                                                       posts.address,
                                                       posts.description,
                                                       c.name as category,
                                                       posts.bedroom,
                                                       posts.bathroom,
                                                       posts.status,
                                                       posts.userId,
                                                       posts.avatar,
                                                       posts.star
                                                from posts
                                                         join categories c on posts.categoryId = c.id
                                                where posts.id = ${id}`);
        };
        this.findHomes = async (address, bedroom, bathroom, price) => {
            let homes;
            if (price !== "") {
                homes = await this.postRepository.query(`select *
                                                     from posts
                                                     where address like '%${address}%'
                                                       AND bedroom like '%${bedroom}%'
                                                       AND bathroom like '%${bathroom}%'
                                                       AND price = '${price}'
                                                       `);
            }
            else {
                homes = await this.postRepository.query(`select *
                                                     from posts
                                                     where address like '%${address}%'
                                                       AND bedroom like '%${bedroom}%'
                                                       AND bathroom like '%${bathroom}%'
                                                       `);
            }
            return homes;
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.postRepository = data_source_1.AppDataSource.getRepository(posts_1.Posts);
        });
    }
}
exports.PostServices = PostServices;
exports.default = new PostServices();
//# sourceMappingURL=postServices.js.map
import {AppDataSource} from "../data-source";
import {Posts} from "../model/posts";
import {deflateRawSync} from "zlib";

export class PostServices {
    private postRepository
    constructor() {
        AppDataSource.initialize().then(() => {
            this.postRepository = AppDataSource.getRepository(Posts);
        })
    }
    getAllPost = ()=> {
        return this.postRepository.find()
    }
    addPost = (post) =>{
        return this.postRepository.save(post)
    }
    postInfo = async (id) =>{
        let postInfo = await this.postRepository.findOneBy({id: id})
       return postInfo
    }
    editPost = async (id,post)=>{
        return await this.postRepository.update({id: id}, post)
    }
    findByCategory = async (id) => {
        return await this.postRepository.findBy({categoryId: id})
    }
    deletePost = async (id)=>{
        return this.postRepository.delete({id:id})

    }

    findById =async (id)=>{
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
                                                where posts.id = ${id}`)
        }

    findHomes = async (address, bedroom, bathroom, price) => {
        let homes
        if (price !== "") {
            homes = await this.postRepository.query(`select *
                                                     from posts
                                                     where address like '%${address}%'
                                                       AND bedroom like '%${bedroom}%'
                                                       AND bathroom like '%${bathroom}%'
                                                       AND price = '${price}'
                                                       `)
        } else {
            homes = await this.postRepository.query(`select *
                                                     from posts
                                                     where address like '%${address}%'
                                                       AND bedroom like '%${bedroom}%'
                                                       AND bathroom like '%${bathroom}%'
                                                       `)
        }

        return homes
    }

}
export default new PostServices()
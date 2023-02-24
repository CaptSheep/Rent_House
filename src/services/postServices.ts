import {AppDataSource} from "../data-source";
import {Posts} from "../model/posts";

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

}
export default new PostServices()
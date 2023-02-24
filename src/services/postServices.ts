import {AppDataSource} from "../data-source";
import {Posts} from "../model/posts";

export class PostServices {
    private postRepository
    constructor() {
        AppDataSource.initialize().then(() => {
            this.postRepository = AppDataSource.getRepository(Posts);
        })
    }

    addPost = (post) =>{
        return this.postRepository.save(post)
    }

}
export default new PostServices()
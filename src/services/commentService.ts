import {AppDataSource} from "../data-source";
import {Comment} from "../model/comments";

export class CommentService {
    private commentService

    constructor() {
        AppDataSource.initialize().then(() => {
            this.commentService = AppDataSource.getRepository(Comment);
        })
    }

    getAllComment = () =>{
        return this.commentService.find()
    }

    createComment = (comment) =>{
        return this.commentService.save(comment)
    }

    updateComment = (id,newComment) =>{
        return this.commentService.update({id:id},newComment)
    }
    deleteComment = (id) =>{
        return this.commentService.delete({id: id})
    }

}
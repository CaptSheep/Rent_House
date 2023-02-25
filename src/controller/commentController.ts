import {Request, Response} from "express";
import {CommentService} from "../services/commentService";

export class CommentController {
    private commentService: CommentService

    constructor() {
        this.commentService = new CommentService()
    }

    getAllComment = async (req: Request, res: Response) => {
        let allComment = await this.commentService.getAllComment()
        res.status(200).json({
            allComment: allComment
        })
    }
    createComment = async (req:Request,res : Response) => {
        let commentInfo = req.body
        let newComment = await this.commentService.createComment(commentInfo)
        res.status(200).json({
            mess: `Create Comment ${req.body.comment} success`,
            commentInfo  : newComment
        })

    }

    updateComment = async (req :Request, res: Response) =>{
        let id = req.params.id;
        let commentInfo = req.body
        await this.commentService.updateComment(id,commentInfo)
        res.status(200).json({
            mess: `Update comment number ${id} success`,
            updateInfo : req.body.comment
        })
    }
    deleteComment = async (req :Request, res: Response)=>{
        let id = req.params.id
        await this.commentService.deleteComment(id)
        res.status(200).json({
            mess: `Delete comment number ${id} success`
        })
    }

}

export default new CommentController()
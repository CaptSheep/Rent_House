import {Request, Response} from "express";
import {PostServices} from "../services/postServices";
import Auth from "../middleware/auth";
export class PostController {
    private postServices: PostServices

    constructor() {
        this.postServices = new PostServices()
    }

    createPost = async (req: Request,res:Response,next) =>{
        let newPost = req.body
        await this.postServices.addPost(newPost)
        res.status(200).json({
            mess: 'Create Successfully',
            post : newPost
        })

    }
}
export default new PostController()
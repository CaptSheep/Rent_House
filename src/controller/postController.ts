import {Request, Response} from "express";
import {PostServices} from "../services/postServices";
import Auth from "../middleware/auth";
export class PostController {
    private postServices: PostServices

    constructor() {
        this.postServices = new PostServices()
    }
    getAllPost = async (req,res)=>{
        let allPost = await this.postServices.getAllPost()
        res.status(200).json(allPost)
    }
    createPost = async (req: Request,res:Response) =>{
        let newPost = req.body
        await this.postServices.addPost(newPost)
        res.status(200).json({
            mess: 'Create Successfully',
            post : newPost
        })
    }
    postInfo = async (req,res) =>{
        let id = req.params.id
        let postInfo =   await this.postServices.postInfo(id)
        if(postInfo){
            console.log(postInfo)
            res.status(200).json({
                mess : `Home number ${id} information `,
                info : postInfo
            })
        }
        else {
            res.status(404).json(`We dont have this room`)
        }
    }

    updatePost = async (req : Request,res :Response)=>{
    try{
        let id = req.params.id
        let postInfo = await this.postServices.postInfo(id)
        if(postInfo){
            await this.postServices.editPost(id,req.body)
            res.status(200).json({
                mess: 'Update Successfully',
                newPost:  req.body
            })
        }
        else {
            res.status(404).json('We dont have this house')
        }

    }
    catch (err){
        res.status(401).json(err.message)
    }
    }
}
export default new PostController()
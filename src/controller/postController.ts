import {Request, Response} from "express";
import {PostServices} from "../services/postServices";
export class PostController {
    private postServices: PostServices

    constructor() {
        this.postServices = new PostServices()
    }
    getAllPost = async (req,res)=>{
        try{
            let allPost = await this.postServices.getAllPost()
            res.status(200).json(allPost)
        }
        catch (err){
            res.status(401).json(err.message)
        }
    }
    createPost = async (req: Request,res:Response) =>{
       try{
           let newPost = req.body
           await this.postServices.addPost(newPost)
           res.status(200).json({
               mess: 'Create Successfully',
               post : newPost
           })
       }
       catch (err){
           res.status(401).json(err.message)
       }
    }
    postInfo = async (req,res) =>{
       try{
           let id = req.params.id
           let postInfo =   await this.postServices.postInfo(id)
           if(postInfo){
               res.status(200).json({
                   mess : `Home number ${id} information `,
                   info : postInfo
               })
           }
           else {
               res.status(404).json(`We dont have this room`)
           }
       }
       catch (err){
           res.status(401).json(err.message)
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

    findByCategory = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let homes = await this.postServices.findByCategory(id);
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    deletePost = async (req,res)=>{
        try{
            let id = req.params.id
            let homeInfo = await this.postServices.postInfo(id)
            if(homeInfo){
                await this.postServices.deletePost(id)
                res.status(200).json({
                    mess: `Delete home number ${id} successfully`
                })
            }
            else {
                res.status(404).json(`We dont have this house`)
            }
        }
        catch (err){
            res.status(401).json(err.message)
        }

    }
    findById = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
                let home = await this.postServices.findById(id);
               if(home.length !== 0){
                res.status(200).json({
                    mess :`Find Home ${home[0].name} success`,
                    homeInfo: home[0]
                })
            }
            else {
                 res.status(401).json({
                    mess: `Can not find this house`
                })
            }

        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    findHomes = async (req: Request, res: Response) => {
        try {
            let home = await this.postServices.findHomes(req.body.address, req.body.bedroom, req.body.bathroom, req.body.price);

           if(home.length !== 0 ){
               res.status(200).json({
                   mess :`Find home  ${home[0].address} success`,
                   homeInfo : home
               })
           }
           else {
               res.status(404).json({
                   mess : `Can not find this home`
               })
           }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}
export default new PostController()
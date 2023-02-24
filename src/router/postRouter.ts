import Auth from '../middleware/auth'
import router from "express";
import PostController from "../controller/postController";

export const postRouter = router()
postRouter.post('/create',Auth.checkToken,PostController.createPost)
import Auth from '../middleware/auth'
import router from "express";
import PostController from "../controller/postController";

export const postRouter = router()
postRouter.get('/',Auth.checkToken,PostController.getAllPost)
postRouter.post('/create',Auth.checkToken,PostController.createPost)
postRouter.get('/info/:id',Auth.checkToken,PostController.postInfo)
postRouter.post('/update/:id',Auth.checkToken,PostController.updatePost)
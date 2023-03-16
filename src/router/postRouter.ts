import Auth from '../middleware/auth'
import router from "express";
import PostController from "../controller/postController";

export const postRouter = router()
postRouter.get('/',PostController.getAllPost)
postRouter.post('/create',Auth.checkToken,PostController.createPost)
postRouter.get('/info/:id',Auth.checkToken,PostController.postInfo)
postRouter.get('/find/:id',Auth.checkToken,PostController.findById)
postRouter.get('/find',PostController.findHomes)
postRouter.get('/findByCategory/:id',PostController.findByCategory)
postRouter.delete('/delete/:id',Auth.checkToken,PostController.deletePost)
postRouter.post('/update/:id',Auth.checkToken,PostController.updatePost)

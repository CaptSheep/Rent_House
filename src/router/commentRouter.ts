import router from "express";
import CommentController from "../controller/commentController";
import Auth from "../middleware/auth";

export const commentRouter = router()

commentRouter.get('',Auth.checkToken,CommentController.getAllComment)
commentRouter.post('/create',Auth.checkToken,CommentController.createComment)
commentRouter.put('/update/:id',Auth.checkToken,CommentController.updateComment)
commentRouter.delete('/delete/:id',Auth.checkToken,CommentController.deleteComment)
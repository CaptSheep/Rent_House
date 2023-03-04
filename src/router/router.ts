import Router from "express";
import {userRouter} from "./userRouter";
import {postRouter} from "./postRouter";
import {categoriesRouter} from "./categoriesRouter";
import {commentRouter} from './commentRouter'
import {contractRouter} from "./contractRouter";
import {notificationRouter} from "./notificationRouter";


export const router = Router()
router.use('/users',userRouter);
router.use('/posts',postRouter);
router.use('/categories',categoriesRouter);
router.use('/comments',commentRouter);
router.use('/contracts',contractRouter);
router.use('/notifications',notificationRouter);
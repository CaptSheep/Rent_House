import Router from "express";
import {userRouter} from "./userRouter";
import {postRouter} from "./postRouter";
import {categoriesRouter} from "./categoriesRouter";


export const router = Router()
router.use('/users',userRouter);
router.use('/posts',postRouter);
router.use('/categories',categoriesRouter);
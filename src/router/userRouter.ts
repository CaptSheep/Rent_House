

import router from "express";
import UserController from "../controller/userController";

export const userRouter = router();
userRouter.post('/register', UserController.register);

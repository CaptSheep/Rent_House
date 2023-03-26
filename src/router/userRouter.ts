import Auth from '../middleware/auth'
import router from "express";
import UserController from "../controller/userController";

export const userRouter = router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.post('/changePassword/:id', UserController.changePassword);
userRouter.put('/updateUser/:id', UserController.updateProfile);

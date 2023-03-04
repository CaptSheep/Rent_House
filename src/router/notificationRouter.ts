import router from "express";
import notificationController from "../controller/notificationController";
import Auth from "../middleware/auth";

export const notificationRouter = router()

notificationRouter.get('',Auth.checkToken,notificationController.getAllNotification)
notificationRouter.put('/update/:id',Auth.checkToken,notificationController.updateNotification)
notificationRouter.post('/create',Auth.checkToken,notificationController.createNotification)
notificationRouter.get('/find/:id',Auth.checkToken,notificationController.findNotificationByUserId)
notificationRouter.delete('/delete/:id',Auth.checkToken,notificationController.deleteNotification)
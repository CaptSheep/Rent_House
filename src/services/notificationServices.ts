import {AppDataSource} from "../data-source";
import {Notification} from "../model/notifications";

export class NotificationServices {
    private notificationService;

    constructor() {
        AppDataSource.initialize().then(() => {
            this.notificationService = AppDataSource.getRepository(Notification);
        })
    }

    getAllNotifications = () => {
        return this.notificationService.find()
    }
    createNotifications = (notification) => {
        return this.notificationService.save(notification)
    }
    updateNotification  = (id, notification) =>{
        return this.notificationService.update({id : id} ,notification)
    }
    findNotificationById  = (id) =>{
        return this.notificationService.find({id : id})
    }
    findNotificationByUserId  = (id) =>{
        return this.notificationService.find({userId : id})
    }
    deleteNotification = ( id) => {
        return this.notificationService.delete({id: id})
    }
}
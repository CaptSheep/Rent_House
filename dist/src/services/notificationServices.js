"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationServices = void 0;
const data_source_1 = require("../data-source");
const notifications_1 = require("../model/notifications");
class NotificationServices {
    constructor() {
        this.getAllNotifications = () => {
            return this.notificationService.find();
        };
        this.createNotifications = (notification) => {
            return this.notificationService.save(notification);
        };
        this.updateNotification = (id, notification) => {
            return this.notificationService.update({ id: id }, notification);
        };
        this.findNotificationById = (id) => {
            return this.notificationService.find({ id: id });
        };
        this.findNotificationByUserId = (id) => {
            return this.notificationService.find({ userId: id });
        };
        this.deleteNotification = (id) => {
            return this.notificationService.delete({ id: id });
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.notificationService = data_source_1.AppDataSource.getRepository(notifications_1.Notification);
        });
    }
}
exports.NotificationServices = NotificationServices;
exports.default = new NotificationServices();
//# sourceMappingURL=notificationServices.js.map
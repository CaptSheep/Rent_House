"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const notificationServices_1 = require("../services/notificationServices");
const userServices_1 = require("../services/userServices");
class NotificationController {
    constructor() {
        this.getAllNotification = async (req, res) => {
            try {
                let notifications = await this.notificationServices.getAllNotifications();
                res.status(200).json({
                    mess: "All notifications",
                    notifications: notifications
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.createNotification = async (req, res) => {
            try {
                let notificationInfo = req.body;
                let notification = await this.notificationServices.createNotifications(notificationInfo);
                res.status(200).json({
                    mess: `create Notification ${req.body.username} success`,
                    notification: notification
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.updateNotification = async (req, res) => {
            try {
                let id = req.params.id;
                let notificationInfo = req.body;
                let newNotification = await this.notificationServices.updateNotification(id, notificationInfo);
                res.status(200).json({
                    mess: `Update notification ${req.body.name} success`,
                    notificationInfo: newNotification
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.findNotificationByUserId = async (req, res) => {
            try {
                let id = req.params.id;
                let user = await this.userService.listUser();
                let notificationInfo = await this.notificationServices.findNotificationByUserId(id);
                res.status(200).json({
                    mess: `Notification of User ${user[0].userName} : `,
                    notificationInfo: notificationInfo
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.deleteNotification = async (req, res) => {
            let id = req.params.id;
            let notificationId = await this.notificationServices.getAllNotifications();
            res.status(200).json({
                mess: `Delete Notification ${notificationId} Success `
            });
        };
        this.notificationServices = new notificationServices_1.NotificationServices();
        this.userService = new userServices_1.UserServices();
    }
}
exports.NotificationController = NotificationController;
exports.default = new NotificationController();
//# sourceMappingURL=notificationController.js.map
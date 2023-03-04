export declare class NotificationServices {
    private notificationService;
    constructor();
    getAllNotifications: () => any;
    createNotifications: (notification: any) => any;
    updateNotification: (id: any, notification: any) => any;
    findNotificationById: (id: any) => any;
    findNotificationByUserId: (id: any) => any;
    deleteNotification: (id: any) => any;
}
declare const _default: NotificationServices;
export default _default;

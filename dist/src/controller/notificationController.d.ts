import { Request, Response } from "express";
export declare class NotificationController {
    private notificationServices;
    private userService;
    constructor();
    getAllNotification: (req: Request, res: Response) => Promise<void>;
    createNotification: (req: Request, res: Response) => Promise<void>;
    updateNotification: (req: Request, res: Response) => Promise<void>;
    findNotificationByUserId: (req: Request, res: Response) => Promise<void>;
    deleteNotification: (req: Request, res: Response) => Promise<void>;
}
declare const _default: NotificationController;
export default _default;

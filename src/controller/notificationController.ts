import {Request, Response} from "express";
import {NotificationServices} from "../services/notificationServices";
import {UserServices} from "../services/userServices";

export class NotificationController {
    private notificationServices: NotificationServices
    private userService : UserServices

    constructor() {
        this.notificationServices = new NotificationServices()
        this.userService = new UserServices()
    }

    getAllNotification = async (req: Request, res: Response) => {
        try {
            let notifications = await this.notificationServices.getAllNotifications()
            res.status(200).json({
                mess: "All notifications",
                notifications: notifications
            })
        } catch (err) {
            res.status(401).json(err.message)
        }
    }

    createNotification = async (req: Request, res: Response) => {
        try{
            let notificationInfo = req.body
            let notification = await this.notificationServices.createNotifications(notificationInfo)
            res.status(200).json({
                mess: `create Notification ${req.body.username} success`,
                notification: notification
            })
        }
        catch (err){
            res.status(401).json(err.message)
        }
    }

    updateNotification  = async (req : Request, res :Response) =>{
      try{
          let id = req.params.id
          let notificationInfo = req.body
          let newNotification  = await this.notificationServices.updateNotification(id,notificationInfo)
          res.status(200).json({
              mess: `Update notification ${req.body.name} success`,
              notificationInfo : newNotification
          })

      }
      catch (err){
          res.status(401).json(err.message)
      }
    }
    findNotificationByUserId = async (req :Request, res :Response) =>{
        try{
            let id = req.params.id
            let user = await this.userService.listUser()
            let notificationInfo = await this.notificationServices.findNotificationByUserId(id)
            res.status(200).json({
                mess: `Notification of User ${user[0].userName} : `,
                notificationInfo : notificationInfo
            })

        }
        catch (err){
            res.status(401).json(err.message)
        }

    }
    deleteNotification  = async ( req: Request, res :Response)=>{
        let id = req.params.id
        let notificationId = await this.notificationServices.getAllNotifications()
        // await this.notificationServices.deleteNotification(id)
        res.status(200).json({
            mess : `Delete Notification ${notificationId} Success `
        })
    }
}
export default new NotificationController()
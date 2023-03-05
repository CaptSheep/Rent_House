import {Request, Response} from "express";
import {UserServices} from "../services/userServices";
import Auth from '../middleware/auth'
import auth from "../middleware/auth";

export class UserController {
    private userServices: UserServices
    constructor() {
        this.userServices = new UserServices()
    }
    listUser = async (req:Request, res : Response) =>{
        let user = await this.userServices.listUser()
        res.status(200).json(user)
    }
    register = async (req: Request, res: Response) => {
        let checkUser = await this.userServices.checkRegister(req.body)
        if (checkUser) {
            res.status(401).json('User existed')
        } else {
            this.userServices.register(req.body)
            res.json({
                mess: "Create Successfully",
            })
        }
    }
    login = async (req, res) => {
      try{
          let user = await this.userServices.checkLogin(req.body)
          if (user.check) {
              let token = await Auth.signToken(user)
              res.cookie('loginInfo', token, {
                  maxAge: 1000 * 60 * 60 * 24,
                  httpOnly: true,
              })
              res.status(200).json({
                  mess: 'Login Successfully',
                  userInfo : user.userFind,
                  token : token
              })

          } else {
              res.status(404).json('Wrong username or password. Please try again')
          }
      }
      catch (err){
          res.status(401).json(err.message)
      }
    }
    changePassword = async (req: Request, res: Response) => {
        try {
            let user = await this.userServices.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
            if (user.check === 0) {
                res.json({
                    user,
                    mess: "Old Password Is Not Correct"
                })
            }
            if (user.check === 1) {
                res.json({
                    user,
                    mess: "Change Password Successfully"
                })
            }
            if (user.check === 2) {
                res.json({
                    user,
                    mess: "Don't use old passwords!"
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
    updateProfile = async (req: Request, res: Response) => {
        try {
            let user = await this.userServices.updateProfile(req.params.id, req.body.newFullName, req.body.newJob, req.body.newAddress, req.body.newPhone, req.body.newEmail, req.body.newAvatar)
            res.json({
                user,
                mess: `Update User Success`
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new UserController();



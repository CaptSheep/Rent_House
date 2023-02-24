import {Request, Response} from "express";
import {UserServices} from "../services/userServices";
import Auth from '../middleware/auth'

export class UserController {
    private userServices: UserServices

    constructor() {
        this.userServices = new UserServices()

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
}

export default new UserController();



import {Request, Response} from "express";
import {UserServices} from "../services/userServices";

export  class UserController {
    private userServices  : UserServices

    constructor() {
        this.userServices = new UserServices()

    }

   register = async (req :Request,res : Response) =>{
    let checkUser = await this.userServices.checkRegister(req.body)
       if(checkUser){
           res.status(401).json('User existed')
       }
       else {
          this.userServices.register(req.body)
           res.json({
               mess: "Create Successfully",
           })
       }
   }
   login = async (req,res)=> {
        let user = await this.userServices.checkLogin(req.body)
       if(user.check){
            res.status(200).json('Login Successfully')
       }
       else {
           res.status(404).json('Wrong username or password. Please try again')
       }
   }
}
export default new UserController();



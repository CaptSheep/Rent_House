import {AppDataSource} from "../data-source";
import {Users} from "../model/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export class UserServices {
    private userRepository ;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.userRepository = AppDataSource.getRepository(Users);
        })
    }

    register(user){
        let newUser = this.userRepository.save(user)
        return newUser
    }
    checkRegister = async (newUser) =>{
        let check ;
        let user = await this.userRepository.findOneBy({userName : newUser.userName})
        if(user){
            check = true
        }
        return check
    }
}
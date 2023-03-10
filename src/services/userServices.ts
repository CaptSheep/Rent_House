import {AppDataSource} from "../data-source";
import {Users} from "../model/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export class UserServices {
    private userRepository ;

    constructor() {
        AppDataSource.initialize().then( () => {
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

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
            userFind: []
        }
        let userFind = await this.userRepository.findOneBy({userName: userLogin.userName})
        if (!userFind) {
            user.check = false;
        } else {
            let compare = await bcrypt.compare(userLogin.password, userFind.password)
            if (!compare) {
                user.check = false;
            }
            if (compare) {
                user.check = true;
                user.userFind = userFind
            }

        }
        return user;
    }
}
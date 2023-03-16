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
    listUser = () =>{
        return this.userRepository.find()
    }
    findUserById = (id) =>{
        return this.userRepository.findOneBy({id:id})
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
        else {
            newUser.password = await bcrypt.hash(newUser.password, 10)
            check = false
        }
        return check
    }
    checkChangePassword = async (idUser, oldPassword, newPassword) => {
        let user = {
            check: 0,
            userFind: []
        }

        let userFind = await this.userRepository.findBy({id: idUser})
        if (userFind.length === 0) {
            user.check = 0;
        } else {
            let compareOldPassword = await bcrypt.compare(oldPassword, userFind[0].password)
            if (!compareOldPassword) {
                user.userFind = userFind
                user.check = 0;
            }
            if (compareOldPassword) {
                let compareNewPass = await bcrypt.compare(newPassword, userFind[0].password)
                if (compareNewPass) {
                    user.userFind = userFind
                    user.check = 2
                }
                if (!compareNewPass) {
                    newPassword = await bcrypt.hash(newPassword, 10)
                    await this.userRepository.update({id: idUser}, {password: newPassword})
                    user.check = 1;
                    user.userFind = userFind
                }
            }
        }
        return user
    }

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
            userFind: []
        }
        let userFind = await this.userRepository.findOneBy({email: userLogin.email})

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
    updateProfile = async (idUser, newFullName, newJob, newAddress, newPhone, newEmail, newAvatar) => {
        let user = {
            userFind: []
        }
        await this.userRepository.update({id: idUser}, {
            fullName: newFullName,
            job: newJob,
            address: newAddress,
            phone: newPhone,
            email: newEmail,
            avatar: newAvatar
        });
        let userFind = await this.userRepository.findBy({id: idUser})
        user.userFind = userFind
        return user
    }

}
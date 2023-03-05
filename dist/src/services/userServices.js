"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const data_source_1 = require("../data-source");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserServices {
    constructor() {
        this.listUser = () => {
            return this.userRepository.find();
        };
        this.findUserById = (id) => {
            return this.userRepository.findOneBy({ id: id });
        };
        this.checkRegister = async (newUser) => {
            let check;
            let user = await this.userRepository.findOneBy({ userName: newUser.userName });
            if (user) {
                check = true;
            }
            else {
                newUser.password = await bcrypt_1.default.hash(newUser.password, 10);
                check = false;
            }
            return check;
        };
        this.checkChangePassword = async (idUser, oldPassword, newPassword) => {
            let user = {
                check: 0,
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ id: idUser });
            if (userFind.length === 0) {
                user.check = 0;
            }
            else {
                let compareOldPassword = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
                if (!compareOldPassword) {
                    user.userFind = userFind;
                    user.check = 0;
                }
                if (compareOldPassword) {
                    let compareNewPass = await bcrypt_1.default.compare(newPassword, userFind[0].password);
                    if (compareNewPass) {
                        user.userFind = userFind;
                        user.check = 2;
                    }
                    if (!compareNewPass) {
                        newPassword = await bcrypt_1.default.hash(newPassword, 10);
                        await this.userRepository.update({ id: idUser }, { password: newPassword });
                        user.check = 1;
                        user.userFind = userFind;
                    }
                }
            }
            return user;
        };
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                userFind: []
            };
            let userFind = await this.userRepository.findOneBy({ userName: userLogin.userName });
            if (!userFind) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(userLogin.password, userFind.password);
                if (!compare) {
                    user.check = false;
                }
                if (compare) {
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.updateProfile = async (idUser, newFullName, newJob, newAddress, newPhone, newEmail, newAvatar) => {
            let user = {
                userFind: []
            };
            await this.userRepository.update({ id: idUser }, {
                fullName: newFullName,
                job: newJob,
                address: newAddress,
                phone: newPhone,
                email: newEmail,
                avatar: newAvatar
            });
            let userFind = await this.userRepository.findBy({ id: idUser });
            user.userFind = userFind;
            return user;
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.userRepository = data_source_1.AppDataSource.getRepository(users_1.Users);
        });
    }
    register(user) {
        let newUser = this.userRepository.save(user);
        return newUser;
    }
}
exports.UserServices = UserServices;
//# sourceMappingURL=userServices.js.map
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
                user.password = await bcrypt_1.default.hash(user.password, 10);
                check = false;
            }
            return check;
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
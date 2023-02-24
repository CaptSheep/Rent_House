"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const data_source_1 = require("../data-source");
const users_1 = require("../model/users");
class UserServices {
    constructor() {
        this.checkRegister = async (newUser) => {
            let check;
            let user = await this.userRepository.findOneBy({ userName: newUser.userName });
            if (user) {
                check = true;
            }
            return check;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
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
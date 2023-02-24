"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userServices_1 = require("../services/userServices");
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let checkUser = await this.userServices.checkRegister(req.body);
            if (checkUser) {
                res.status(401).json('User existed');
            }
            else {
                this.userServices.register(req.body);
                res.json({
                    mess: "Create Successfully",
                });
            }
        };
        this.userServices = new userServices_1.UserServices();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
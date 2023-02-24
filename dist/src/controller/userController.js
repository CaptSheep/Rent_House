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
        this.login = async (req, res) => {
            let user = await this.userServices.checkLogin(req.body);
            if (user.check) {
                res.status(200).json('Login Successfully');
            }
            else {
                res.status(404).json('Wrong username or password. Please try again');
            }
        };
        this.userServices = new userServices_1.UserServices();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
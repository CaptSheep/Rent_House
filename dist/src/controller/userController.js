"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userServices_1 = require("../services/userServices");
const auth_1 = __importDefault(require("../middleware/auth"));
class UserController {
    constructor() {
        this.listUser = async (req, res) => {
            let user = await this.userServices.listUser();
            res.status(200).json(user);
        };
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
            try {
                console.log(req.body);
                let user = await this.userServices.checkLogin(req.body);
                console.log(user);
                if (user.check) {
                    let token = await auth_1.default.signToken(user);
                    res.cookie('loginInfo', token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true,
                    });
                    res.status(200).json({
                        mess: 'Login Successfully',
                        userInfo: user.userFind,
                        token: token
                    });
                }
                else {
                    res.status(200).json({
                        mess: 'Wrong username or password. Please try again'
                    });
                }
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.changePassword = async (req, res) => {
            try {
                let user = await this.userServices.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
                if (user.check === 0) {
                    res.json({
                        user,
                        mess: "Old Password Is Not Correct"
                    });
                }
                if (user.check === 1) {
                    res.json({
                        user,
                        mess: "Change Password Successfully"
                    });
                }
                if (user.check === 2) {
                    res.json({
                        user,
                        mess: "Don't use old passwords!"
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.updateProfile = async (req, res) => {
            try {
                let user = await this.userServices.updateProfile(req.params.id, req.body.newFullName, req.body.newJob, req.body.newAddress, req.body.newPhone, req.body.newEmail, req.body.newAvatar);
                res.json({
                    user,
                    mess: `Update User Success`
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.userServices = new userServices_1.UserServices();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
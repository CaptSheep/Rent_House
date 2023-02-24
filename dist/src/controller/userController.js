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
                let user = await this.userServices.checkLogin(req.body);
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
                    res.status(404).json('Wrong username or password. Please try again');
                }
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.userServices = new userServices_1.UserServices();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
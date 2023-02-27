"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    constructor() {
        this.signToken = (data) => {
            return new Promise((resolve, reject) => {
                const payload = {
                    data
                };
                const secret = 'secret';
                const options = {
                    expiresIn: "24h",
                };
                jsonwebtoken_1.default.sign(payload, secret, options, (err, token) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(token);
                    }
                });
            });
        };
        this.checkToken = (req, res, next) => {
            let authorization = req.headers.authorization;
            if (authorization) {
                let accessToken = authorization.split(' ')[1];
                if (!accessToken) {
                    res.json({
                        mess: 'Invalid Token'
                    });
                }
                else {
                    jsonwebtoken_1.default.verify(accessToken, 'secret', (err, data) => {
                        if (err) {
                            res.json({
                                mess: " Invalid Token"
                            });
                        }
                        else {
                            req.decode = data;
                            next();
                        }
                    });
                }
            }
            else {
                res.json({
                    mess: "You're not login. Please login first"
                });
            }
        };
    }
}
exports.default = new Auth();
//# sourceMappingURL=auth.js.map
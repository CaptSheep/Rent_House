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
    }
}
exports.default = new Auth();
//# sourceMappingURL=auth.js.map
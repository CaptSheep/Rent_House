"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const express_1 = __importDefault(require("express"));
const notificationController_1 = __importDefault(require("../controller/notificationController"));
const auth_1 = __importDefault(require("../middleware/auth"));
exports.notificationRouter = (0, express_1.default)();
exports.notificationRouter.get('', auth_1.default.checkToken, notificationController_1.default.getAllNotification);
exports.notificationRouter.put('/update/:id', auth_1.default.checkToken, notificationController_1.default.updateNotification);
exports.notificationRouter.post('/create', auth_1.default.checkToken, notificationController_1.default.createNotification);
exports.notificationRouter.get('/find/:id', auth_1.default.checkToken, notificationController_1.default.findNotificationByUserId);
exports.notificationRouter.delete('/delete/:id', auth_1.default.checkToken, notificationController_1.default.deleteNotification);
//# sourceMappingURL=notificationRouter.js.map
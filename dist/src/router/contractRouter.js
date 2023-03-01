"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const contractController_1 = __importDefault(require("../controller/contractController"));
exports.contractRouter = (0, express_1.default)();
exports.contractRouter.get('', auth_1.default.checkToken, contractController_1.default.getAllContract);
exports.contractRouter.get('/findById/:id', auth_1.default.checkToken, contractController_1.default.findContractById);
exports.contractRouter.get('/findByUserId/:id', auth_1.default.checkToken, contractController_1.default.findContractByUserId);
exports.contractRouter.post('/create', auth_1.default.checkToken, contractController_1.default.createContract);
exports.contractRouter.put('/update/:id', auth_1.default.checkToken, contractController_1.default.updateContract);
exports.contractRouter.delete('/delete/:id', auth_1.default.checkToken, contractController_1.default.deleteContract);
//# sourceMappingURL=contractRouter.js.map
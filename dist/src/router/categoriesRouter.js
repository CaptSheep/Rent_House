"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const categoriesController_1 = __importDefault(require("../controller/categoriesController"));
const auth_1 = __importDefault(require("../middleware/auth"));
exports.categoriesRouter = (0, express_1.default)();
exports.categoriesRouter.get('/', auth_1.default.checkToken, categoriesController_1.default.getAllCategories);
exports.categoriesRouter.post('/create', auth_1.default.checkToken, categoriesController_1.default.createCategories);
exports.categoriesRouter.put('/update/:id', auth_1.default.checkToken, categoriesController_1.default.updateCategories);
exports.categoriesRouter.delete('/delete/:id', auth_1.default.checkToken, categoriesController_1.default.deleteCategories);
//# sourceMappingURL=categoriesRouter.js.map
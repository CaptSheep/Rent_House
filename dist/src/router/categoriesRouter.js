"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const categoriesController_1 = __importDefault(require("../controller/categoriesController"));
exports.categoriesRouter = (0, express_1.default)();
exports.categoriesRouter.get('/', categoriesController_1.default.getAllCategories);
//# sourceMappingURL=categoriesRouter.js.map
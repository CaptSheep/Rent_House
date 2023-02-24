"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const categoriesServices_1 = require("../services/categoriesServices");
class CategoriesController {
    constructor() {
        this.getAllCategories = async (req, res) => {
            let categories = await this.categoriesService.getAllCategories();
            res.status(200).json(categories);
        };
        this.categoriesService = new categoriesServices_1.CategoriesServices();
    }
}
exports.CategoriesController = CategoriesController;
exports.default = new CategoriesController();
//# sourceMappingURL=categoriesController.js.map
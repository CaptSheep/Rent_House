"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const categoriesServices_1 = require("../services/categoriesServices");
class CategoriesController {
    constructor() {
        this.getAllCategories = async (req, res) => {
            try {
                let categories = await this.categoriesService.getAllCategories();
                res.status(200).json(categories);
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.createCategories = async (req, res) => {
            try {
                let categoryInfo = req.body;
                let newCategories = await this.categoriesService.createCategories(categoryInfo);
                res.status(200).json({
                    mess: `Create category ${req.body.name} successfully`,
                    category: newCategories
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.updateCategories = async (req, res) => {
            let id = req.params.id;
            let updateCategory = req.body;
            let newCategory = await this.categoriesService.updateCategory(id, updateCategory);
            res.status(200).json({
                mess: `update category number ${id} success`,
                info: newCategory
            });
        };
        this.deleteCategories = async (req, res) => {
            let id = req.params.id;
            await this.categoriesService.deleteCategory(id);
            res.status(200).json({
                mess: `Delete category number ${id} success`
            });
        };
        this.categoriesService = new categoriesServices_1.CategoriesServices();
    }
}
exports.CategoriesController = CategoriesController;
exports.default = new CategoriesController();
//# sourceMappingURL=categoriesController.js.map
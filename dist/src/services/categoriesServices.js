"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesServices = void 0;
const data_source_1 = require("../data-source");
const categories_1 = require("../model/categories");
class CategoriesServices {
    constructor() {
        this.getAllCategories = () => {
            return this.categoriesRepository.find();
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.categoriesRepository = data_source_1.AppDataSource.getRepository(categories_1.Categories);
        });
    }
}
exports.CategoriesServices = CategoriesServices;
exports.default = new CategoriesServices();
//# sourceMappingURL=categoriesServices.js.map
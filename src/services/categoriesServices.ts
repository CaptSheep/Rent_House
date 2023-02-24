import {AppDataSource} from "../data-source";
import {Categories} from "../model/categories";
export class CategoriesServices {
    private categoriesRepository
    constructor() {
        AppDataSource.initialize().then(() => {
            this.categoriesRepository = AppDataSource.getRepository(Categories);
        })
    }
    getAllCategories = () =>{
        return this.categoriesRepository.find()
}

}

export default new CategoriesServices()
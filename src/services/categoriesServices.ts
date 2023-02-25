import {AppDataSource} from "../data-source";
import {Categories} from "../model/categories";

export class CategoriesServices {
    private categoriesRepository

    constructor() {
        AppDataSource.initialize().then(() => {
            this.categoriesRepository = AppDataSource.getRepository(Categories);
        })
    }

    getAllCategories = () => {
        return this.categoriesRepository.find()
    }
    createCategories = async (category)=>{
        return this.categoriesRepository.save(category)
    }
    updateCategory = async (id,newCategory) =>{
        return this.categoriesRepository.update({id : id},newCategory)
    }

}

export default new CategoriesServices()
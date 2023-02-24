import {Request, Response} from "express";
import {CategoriesServices} from "../services/categoriesServices";

export class CategoriesController {
    private categoriesService : CategoriesServices
    constructor() {
        this.categoriesService = new CategoriesServices()
    }

    getAllCategories = async (req :Request , res :Response) =>{
        let categories = await this.categoriesService.getAllCategories()
        res.status(200).json(categories)
    }
}
export default new CategoriesController()
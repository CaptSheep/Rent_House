import {Request, Response} from "express";
import categoriesServices, {CategoriesServices} from "../services/categoriesServices";

export class CategoriesController {
    private categoriesService : CategoriesServices
    constructor() {
        this.categoriesService = new CategoriesServices()
    }

    getAllCategories = async (req :Request , res :Response) =>{
      try{
          let categories = await this.categoriesService.getAllCategories()
          res.status(200).json(categories)
      }
      catch (err){
          res.status(401).json(err.message)
      }
    }

    createCategories = async (req : Request, res: Response) =>{
      try{
          let categoryInfo = req.body
          let newCategories = await this.categoriesService.createCategories(categoryInfo)
          res.status(200).json({
              mess: `Create category ${req.body.name} successfully`,
              category : newCategories
          })
      }
      catch (err){
          res.status(401).json(err.message)
      }
    }
    updateCategories = async (req :Request, res: Response) =>{
        let id = req.params.id
        let updateCategory = req.body
        let newCategory = await this.categoriesService.updateCategory(id,updateCategory)
        res.status(200).json({
            mess : `update category number ${id} success`,
            info : newCategory
        })
    }


}
export default new CategoriesController()
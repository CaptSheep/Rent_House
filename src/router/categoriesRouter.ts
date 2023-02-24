import router from "express";
import CategoriesController from "../controller/categoriesController";

 export const categoriesRouter = router()
categoriesRouter.get('/',CategoriesController.getAllCategories)
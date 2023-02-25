import router from "express";
import CategoriesController from "../controller/categoriesController";
import Auth from "../middleware/auth";

 export const categoriesRouter = router()
categoriesRouter.get('/',Auth.checkToken,CategoriesController.getAllCategories)
categoriesRouter.post('/create',Auth.checkToken,CategoriesController.createCategories)
categoriesRouter.put('/update/:id',Auth.checkToken,CategoriesController.updateCategories)
categoriesRouter.delete('/delete/:id',Auth.checkToken,CategoriesController.deleteCategories)
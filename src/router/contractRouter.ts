import router from "express";
import Auth from "../middleware/auth";
import contractController from "../controller/contractController";

export const contractRouter = router()

contractRouter.get('',Auth.checkToken,contractController.getAllContract)
contractRouter.post('/create',Auth.checkToken,contractController.createContract)
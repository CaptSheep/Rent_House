import router from "express";
import Auth from "../middleware/auth";
import contractController from "../controller/contractController";

export const contractRouter = router()

contractRouter.get('',Auth.checkToken,contractController.getAllContract)
contractRouter.get('/findById/:id',Auth.checkToken,contractController.findContractById)
contractRouter.get('/findByUserId/:id',Auth.checkToken,contractController.findContractByUserId)
contractRouter.post('/create',Auth.checkToken,contractController.createContract)
contractRouter.put('/update/:id',Auth.checkToken,contractController.updateContract)
contractRouter.delete('/delete/:id',Auth.checkToken,contractController.deleteContract)
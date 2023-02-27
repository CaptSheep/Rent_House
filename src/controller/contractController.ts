import {ContractService} from "../services/contractService";
import {Request,Response} from "express";
import {UserServices} from "../services/userServices";

export class ContractController {
    private contractService :ContractService ;
    private userService : UserServices
    constructor() {
        this.contractService = new ContractService()
        this.userService = new UserServices()
    }

    getAllContract =async () => {
        return await this.contractService.getAllContract()
    }
    createContract = async (req: Request, res : Response) =>{
        try{
            let contractInfo = req.body
            let userInfo = await this.userService.findUserById(req.body.userId)
            await this.contractService.createContract(contractInfo)
            res.status(200).json({
                mess : `create Contract of User ${userInfo.fullName} success`,
                contractInfo : contractInfo
            })
        }
        catch (err){
            res.status(401).json(err.message)
        }
    }

}
export default new ContractController()
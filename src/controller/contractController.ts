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

    getAllContract =async (req : Request, res : Response) => {
        let allContract =  await this.contractService.getAllContract()
        res.status(200).json(allContract)
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

    updateContract = async ( req : Request ,  res : Response) =>{
        let id = req.params.id
        let userInfo = await this.userService.findUserById(req.body.userId)
        let newContract = req.body
        await this.contractService.updateContract(id,newContract)
        res.status(200).json({
            mess : `Update Contract of User ${userInfo.fullName} success`,
            contractInfo : newContract
        })
    }
    deleteContract = async (req : Request , res: Response) =>{
        let id = req.params.id
        await this.contractService.deleteContract(id)
        let userInfo = await this.userService.findUserById(req.body.userId)
        res.status(200).json({
            mess : `Delete Contract of User ${userInfo.fullName} success`
        })
    }
    findContractById = async (req : Request, res : Response) =>{
        let id = req.params.id
        let contract = await this.contractService.findContractById(id)
        res.status(200).json({
            mess : `Info of Contract number ${id} `,
            contractInfo : contract
        })
    }
    findContractByUserId = async (req : Request, res :Response) =>{
        let userId = req.params.id
        let user = await this.userService.findUserById(userId)
        let contract = await this.contractService.findByUserId(userId)
        res.status(200).json({
            mess : `Info  Contract of User ${user.fullName} is :`,
            contractInfo : contract
        })
    }

}
export default new ContractController()
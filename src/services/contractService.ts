import {AppDataSource} from "../data-source";
import {Contracts} from "../model/contracts";

export class ContractService {
    private contractService

    constructor() {
        AppDataSource.initialize().then(() => {
            this.contractService = AppDataSource.getRepository(Contracts);
        })
    }

    getAllContract = () => {
        return this.contractService.find()
    }
    createContract = (contract) => {
        return this.contractService.save(contract)
    }
    findContractById  = (id) =>{
        return this.contractService.find({id : id})
    }
    findByUserId  = (id) =>{
        return this.contractService.find({userId : id})
    }
    editContract = (id,contract) =>{
        return this.contractService.update({id : id } , contract)
    }
    deleteContract = ( id) => {
        return this.contractService.delete({id: id})
    }
}

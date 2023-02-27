"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const data_source_1 = require("../data-source");
const contracts_1 = require("../model/contracts");
class ContractService {
    constructor() {
        this.getAllContract = () => {
            return this.contractService.find();
        };
        this.createContract = (contract) => {
            return this.contractService.save(contract);
        };
        this.findContractById = (id) => {
            return this.contractService.find({ id: id });
        };
        this.findByUserId = (id) => {
            return this.contractService.find({ userId: id });
        };
        this.editContract = (id, contract) => {
            return this.contractService.update({ id: id }, contract);
        };
        this.deleteContract = (id) => {
            return this.contractService.delete({ id: id });
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.contractService = data_source_1.AppDataSource.getRepository(contracts_1.Contracts);
        });
    }
}
exports.ContractService = ContractService;
//# sourceMappingURL=contractService.js.map
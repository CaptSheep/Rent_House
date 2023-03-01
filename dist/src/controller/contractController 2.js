"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractController = void 0;
const contractService_1 = require("../services/contractService");
const userServices_1 = require("../services/userServices");
class ContractController {
    constructor() {
        this.getAllContract = async () => {
            return await this.contractService.getAllContract();
        };
        this.createContract = async (req, res) => {
            try {
                let contractInfo = req.body;
                let userInfo = await this.userService.findUserById(req.body.userId);
                await this.contractService.createContract(contractInfo);
                res.status(200).json({
                    mess: `create Contract of User ${userInfo.fullName} success`,
                    contractInfo: contractInfo
                });
            }
            catch (err) {
                res.status(401).json(err.message);
            }
        };
        this.updateContract = async (req, res) => {
            let id = req.params.id;
            let userInfo = await this.userService.findUserById(req.body.userId);
            let newContract = req.body;
            await this.contractService.updateContract(id, newContract);
            res.status(200).json({
                mess: `Update Contract of User ${userInfo.fullName} success`,
                contractInfo: newContract
            });
        };
        this.deleteContract = async (req, res) => {
            let id = req.params.id;
            await this.contractService.deleteContract(id);
            let userInfo = await this.userService.findUserById(req.body.userId);
            res.status(200).json({
                mess: `Delete Contract of User ${userInfo.fullName} success`
            });
        };
        this.contractService = new contractService_1.ContractService();
        this.userService = new userServices_1.UserServices();
    }
}
exports.ContractController = ContractController;
exports.default = new ContractController();
//# sourceMappingURL=contractController.js.map
export declare class ContractService {
    private contractService;
    constructor();
    getAllContract: () => any;
    createContract: (contract: any) => any;
    updateContract: (id: any, contract: any) => any;
    findContractById: (id: any) => any;
    findByUserId: (id: any) => any;
    editContract: (id: any, contract: any) => any;
    deleteContract: (id: any) => any;
}

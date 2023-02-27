import { Request, Response } from "express";
export declare class ContractController {
    private contractService;
    private userService;
    constructor();
    getAllContract: () => Promise<any>;
    createContract: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ContractController;
export default _default;

import { Request, Response } from "express";
export declare class UserController {
    private userServices;
    constructor();
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: any, res: any) => Promise<void>;
}
declare const _default: UserController;
export default _default;

import { Request, Response } from "express";
export declare class UserController {
    private userServices;
    constructor();
    listUser: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: any, res: any) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
    updateProfile: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;

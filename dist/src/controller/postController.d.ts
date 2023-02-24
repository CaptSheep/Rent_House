import { Request, Response } from "express";
export declare class PostController {
    private postServices;
    constructor();
    createPost: (req: Request, res: Response, next: any) => Promise<void>;
    postInfo: (req: any, res: any) => Promise<void>;
}
declare const _default: PostController;
export default _default;

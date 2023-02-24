import { Request, Response } from "express";
export declare class PostController {
    private postServices;
    constructor();
    getAllPost: (req: any, res: any) => Promise<void>;
    createPost: (req: Request, res: Response) => Promise<void>;
    postInfo: (req: any, res: any) => Promise<void>;
    updatePost: (req: Request, res: Response) => Promise<void>;
    deletePost: (req: any, res: any) => Promise<void>;
}
declare const _default: PostController;
export default _default;

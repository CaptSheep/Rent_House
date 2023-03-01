import { Request, Response } from "express";
export declare class CommentController {
    private commentService;
    constructor();
    getAllComment: (req: Request, res: Response) => Promise<void>;
    createComment: (req: Request, res: Response) => Promise<void>;
    updateComment: (req: Request, res: Response) => Promise<void>;
    deleteComment: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CommentController;
export default _default;

import { Request, Response } from "express";
export declare class CategoriesController {
    private categoriesService;
    constructor();
    getAllCategories: (req: Request, res: Response) => Promise<void>;
    createCategories: (req: Request, res: Response) => Promise<void>;
    updateCategories: (req: Request, res: Response) => Promise<void>;
    deleteCategories: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoriesController;
export default _default;

export declare class CategoriesServices {
    private categoriesRepository;
    constructor();
    getAllCategories: () => any;
    createCategories: (category: any) => Promise<any>;
    updateCategory: (id: any, newCategory: any) => Promise<any>;
    deleteCategory: (id: any) => Promise<any>;
}
declare const _default: CategoriesServices;
export default _default;

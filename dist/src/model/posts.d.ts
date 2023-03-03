import { Users } from "./users";
import { Categories } from "./categories";
export declare class Posts {
    id: number;
    user: Users;
    comments: Comment;
    categories: Categories;
    name: string;
    price: number;
    address: string;
    description: string;
    categoryId: number;
    bedroom: number;
    bathroom: number;
    status: string;
    userId: number;
    avatar: string;
    star: number;
}

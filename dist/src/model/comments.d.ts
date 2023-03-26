import { Users } from "./users";
import { Posts } from "./posts";
export declare class Comment {
    id: number;
    homeId: number;
    userId: number;
    user: Users;
    posts: Posts[];
    comment: string;
}

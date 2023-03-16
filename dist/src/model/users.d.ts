import { Comment } from "./comments";
import { Posts } from "./posts";
import { Contracts } from "./contracts";
export declare class Users {
    id: number;
    comments: Comment[];
    posts: Posts[];
    contracts: Contracts[];
    fullName: string;
    userName: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
}

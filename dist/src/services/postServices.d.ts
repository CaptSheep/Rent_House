export declare class PostServices {
    private postRepository;
    constructor();
    addPost: (post: any) => any;
    postInfo: (id: any) => Promise<any>;
    editPost: (id: any, post: any) => Promise<any>;
}
declare const _default: PostServices;
export default _default;

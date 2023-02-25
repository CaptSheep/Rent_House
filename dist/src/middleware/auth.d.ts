declare class Auth {
    signToken: (data: any) => Promise<unknown>;
    checkToken: (req: any, res: any, next: any) => void;
}
declare const _default: Auth;
export default _default;

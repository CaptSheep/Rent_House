export declare class UserServices {
    private userRepository;
    constructor();
    register(user: any): any;
    checkRegister: (newUser: any) => Promise<any>;
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        userFind: any[];
    }>;
}

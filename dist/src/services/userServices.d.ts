export declare class UserServices {
    private userRepository;
    constructor();
    listUser: () => any;
    findUserById: (id: any) => any;
    register(user: any): any;
    checkRegister: (newUser: any) => Promise<any>;
    checkChangePassword: (idUser: any, oldPassword: any, newPassword: any) => Promise<{
        check: number;
        userFind: any[];
    }>;
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        userFind: any[];
    }>;
    updateProfile: (idUser: any, newFullName: any, newJob: any, newAddress: any, newPhone: any, newEmail: any, newAvatar: any) => Promise<{
        userFind: any[];
    }>;
}

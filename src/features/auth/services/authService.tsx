class AuthService {

    // private PATH: string = '/auth';
    constructor() {

    }


    login():Promise<void> {
        console.log('login')
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        })
    }


}

export const authService = new AuthService();
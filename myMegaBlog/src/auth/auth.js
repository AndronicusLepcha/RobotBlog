import conf from '../conf/conf'


export class AuthService{
    async createAccount({email,username,password}){
        // call api 

    }

    async login({username,password}){
        //return session id
    }

    async getCurrentUser(){
        // call api to get the current user 
    }
    async logout(){
        // delete the session
        // this is an promoise 
    }
}

const authService = new AuthService();
export default authService;
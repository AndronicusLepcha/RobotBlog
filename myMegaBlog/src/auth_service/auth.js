import conf from '../conf/conf'
class AuthService{
    async createAccount({email,password,name}){
        try {
            const response = await fetch(`${BASE_URL}create-account`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password,name})
            })

            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                // Throw an error if the response is not successful
                throw new Error(`Failed to create account: ${response.statusText}`);
            }

            return JSON.parse(response)

        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            const response = await fetch(`${BASE_URL}login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },body:{email,password}})    

             // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                // Throw an error if the response is not successful
                throw new Error(`Failed to login: ${response.statusText}`);
            }

            return JSON.parse(response)
                    
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await(getUser())
        } catch (error) {
            console.log("Logout error",error)
        }
        return null;
    }
    async getCurrentUser(){
        try{
            // call api to get the currect user
        }catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
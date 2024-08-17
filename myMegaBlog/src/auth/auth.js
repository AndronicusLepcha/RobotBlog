import conf from "../conf/conf";
export class AuthService {
  async createAccount(userdata) {
    try {
      const response = await fetch(`${conf.API_URL}/blog/registerBlogUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("result to store at the time of login ",result)
      return result;
    } catch (error) {
        console.error('error registering user',error);
        throw error;
    }
  }

  async login(logindata) {
    try {
      const response = await fetch(`${conf.API_URL}/blog/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || 'Login failed'); 
      }
  
      const data = await response.json(); 
      return data;
  
    } catch (error) {
      console.error("Login error:", error); 
      throw error; 
    }
  }

  async getCurrentUser() {
    // call api to get the current user
    return null;
    // return { "user":"Andro" }
  }
  async logout() {
    // delete the session
    // this is an promoise
  }
  async getPosts() {
    return null;
  }
}

const authService = new AuthService();
export default authService;

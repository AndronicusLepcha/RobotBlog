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
      return result;
    } catch (error) {
      console.error("error registering user", error);
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
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${conf.API_URL}/blog/getUser`, {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`, // Adjust as needed
        }
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const user = await response.json();
      return user;
    
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async logout() {}

  async stripHtmlTags(html) {
    if (typeof html !== 'string') {
      throw new Error('Input must be a string');
    }
    return html.replace(/<\/?[^>]+>/gi, "");
  }

  async createPost(postData) {
    console.log(JSON.stringify(postData));
    let bodyData = postData;
    const plainText = await this.stripHtmlTags(String(postData.content));
    bodyData.content = plainText;
    console.log(bodyData);
    try {
      const response = await fetch(`${conf.API_URL}/blog/createPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      return "Created POST";
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts() {
    try {
      const response = await fetch(`${conf.API_URL}/blog/getAllPost`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;

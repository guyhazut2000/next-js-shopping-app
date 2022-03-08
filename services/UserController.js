import http from "../http-axios/http";
import httpAuth from "../http-axios/httpAuth";

class UserController {
  register(data) {
    return httpAuth.post("/register", data);
  }
  // login user
  login(data) {
    return httpAuth.post("/login", data);
  }
  // logout user
  logout(data) {
    return httpAuth.post("/users/logout", data);
  }
}

export default new UserController();

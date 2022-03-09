import http from "../http-axios/http";
import httpAuth from "../http-axios/httpAuth";

class UserController {
  register(data) {
    return http.post("/register", data);
  }
  // login user
  login(data) {
    return http.post("/login", data);
  }
  // logout user
  logout(data) {
    return http.post("/users/logout", data);
  }
}

export default new UserController();

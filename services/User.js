import http from "../http-axios/http";
import httpAuth from "../http-axios/httpAuth";

class UserController {
  // login user
  login(data) {
    return httpAuth.post("/login", data);
  }
  // logout user
  logout(data) {
    return http.post("/users/logout", data);
  }
}

export default new UserController();

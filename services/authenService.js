import api from "@/services/api";

export default {
  register(credentials) {
    return api().post("register", credentials);
  }
};

/*sử dụng service như sau:
authenService.register({
  email: "abc@gmail.com",
  password: "123456789"
})
*/

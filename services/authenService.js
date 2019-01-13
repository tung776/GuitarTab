import api from "@/services/api";

export default {
  register(credentials) {
    return this.$axios.post("/register", credentials);
  },

  login(credentials) {
    return this.$axios.post("/login", credentials);
  }
};

/*sử dụng service như sau:
authenService.register({
  email: "abc@gmail.com",
  password: "123456789"
})
*/

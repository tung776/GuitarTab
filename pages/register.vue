<template>
  <div>
    <h2>Register</h2>
    <br>

    <form @submit.prevent="submit">
      <input v-model="form.email" type="email" name="email" id="email">
      <input v-model="form.password" type="password" name="password" id="password">
      <br>
      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script>
import authenService from "@/services/authenService";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      console.log(this.form);
      const respon = await authenService.register("/register", this.form);
      console.log("respon = ", respon);
    }
  }
};
</script>

<template>
  <div>
    <h2>Register</h2>
    <br>

    <input v-model="form.email" type="email" name="email" id="email">
    <input v-model="form.password" type="password" name="password" id="password">
    <br>
    <div v-html="error" class="error">
      <v-alert :value="true" type="error">{{error}}</v-alert>
    </div>
    <br>
    <button @click="submit">Đăng ký</button>
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
      },
      error: null
    };
  },
  methods: {
    async submit() {
      console.log(this.form);
      try {
        const respon = await authenService.register(this.form);
      } catch (err) {
        this.error = err.response.data.error;
      }
      // console.log("respon = ", respon);
    }
  }
};
</script>

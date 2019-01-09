<template>
  <v-layout justify-center>
    <panel title="Đăng Ký">
      <v-card-text>
        <v-text-field
          ref="email"
          v-model="form.email"
          label="email"
          placeholder="example@soncattuong.com"
          required
        ></v-text-field>
        <v-text-field
          ref="password"
          v-model="form.password"
          label="mật khẩu"
          placeholder="mật khẩu"
          counter="32"
          required
        ></v-text-field>
      </v-card-text>
      <v-alert :value="true" type="error" v-if="error">
        <div v-html="error">{{error}}</div>
      </v-alert>
      <v-card-actions>
        <v-btn color="primary" dark @click="submit">Submit</v-btn>
      </v-card-actions>
    </panel>
  </v-layout>
</template>

<script>
import authenService from "@/services/authenService";
import Panel from "@/components/Panel";

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

        console.log(`respon.token`, respon.data.token);
        this.$store.dispatch("authen/setToken", respon.data.token);
        this.$store.dispatch("authen/setUser", respon.data.user);
        this.$router.push("/");
      } catch (err) {
        this.error = err.response.data.error;
      }
      // console.log("respon = ", respon);
    }
  },
  components: {
    Panel
  }
};
</script>
<style>
.v-text-field input {
  border-bottom: 1px solid darkcyan;
}
.v-text-field .v-label {
  color: darkcyan;
}
.v-label--active .v-input--is-focused {
  border-bottom: 1px solid 036363;
}
</style>

<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <panel title="Đăng Nhập">
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
          <v-btn color="primary" dark @click="login">Đăng Nhập</v-btn>
        </v-card-actions>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  middleware: "guest",
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
    async login() {
      try {
        const { email, password } = this.form;
        const respon = await this.$auth.loginWith("local", { data: this.form });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.error = err.response.data.error;
      }
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

import vue from "vue";
import { mapGetters } from "vuex";

const User = {
  install(vue, options) {
    vue.mixin({
      computed: {
        ...mapGetters({
          user: "auth/user",
          authenticated: "auth/authenticated"
        })
      }
    });
  }
};
vue.use(User);

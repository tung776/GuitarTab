<template>
  <v-app dark>
    <header-page/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderPage from "~/components/HeaderPage.vue";
export default {
  components: {
    HeaderPage
  },
  data() {
    return {
      fixed: false
    };
  }
};
</script>

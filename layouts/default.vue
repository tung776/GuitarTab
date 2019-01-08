<template>
  <v-app dark>
    <header-page/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <footer-page/>
  </v-app>
</template>

<script>
import HeaderPage from "~/components/HeaderPage.vue";
import FooterPage from "~/components/FooterPage.vue";
export default {
  components: {
    HeaderPage,
    FooterPage
  }
};
</script>

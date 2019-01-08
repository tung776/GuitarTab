<template>
  <div>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    };
  }
};
</script>
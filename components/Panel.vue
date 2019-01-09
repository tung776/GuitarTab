<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-toolbar ref="form">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot name="content">nothing...</slot>
          <slot name="footer">nothing...</slot>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Bản nhạc"
    };
  }
};
</script>

<template>
  <v-card>
    <v-toolbar ref="form">
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div>
      <slot>nothing...</slot>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>

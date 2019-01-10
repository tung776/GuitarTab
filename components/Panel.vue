<template>
  <v-card>
    <v-toolbar ref="form">
      <v-layout>
        <v-flex>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-flex>
        <slot name="btn-panel" left></slot>
      </v-layout>
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

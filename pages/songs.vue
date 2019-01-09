<template>
  <v-layout justify-center>
    <panel title="Bản Nhạc">
      <div slot="content">
        <p>Content from songs</p>
      </div>
      <div slot="footer">
        <p>footer</p>
      </div>
    </panel>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  }
};
</script>

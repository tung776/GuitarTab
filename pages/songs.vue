<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <panel>
          <div slot="content">
            <p>Content from songs</p>
          </div>
          <div slot="footer">
            <p>footer</p>
          </div>
        </panel>
      </v-card>
    </v-flex>
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

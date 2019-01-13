<template>
  <panel title="Tìm Bản Nhạc">
    <v-card-text>
      <v-text-field
        ref="search"
        v-model="search"
        label="Tìm Kiếm"
        placeholder="Tìm theo tên, nghệ sỹ, lời bản nhạc"
        required
      ></v-text-field>
    </v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      <div v-html="error">{{error}}</div>
    </v-alert>
    <v-card-actions>
      <v-btn color="primary" dark @click="doSearch">tìm</v-btn>
    </v-card-actions>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  data() {
    return {
      search: "",
      error: null
    };
  },
  methods: {
    async doSearch() {
      // console.log(this.form);
      try {
      } catch (err) {
        console.log(err);
        this.error = err.response.data.error;
      }
      // console.log("respon = ", respon);
    }
  },

  watch: {
    search(value) {
      console.log(`value = ${value}`);
      const route = {
        name: "songs"
      };

      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }

      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        // console.log("value changed = ", value);
        this.search = value;
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

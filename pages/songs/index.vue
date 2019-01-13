<template>
  <div>
    <div v-if="!authenticated">
      <h2>Bạn cần đăng nhập để thấy được nội dung</h2>
      <nuxt-link class="v-btn v-btn--flat theme--dark" to="login">Đăng Nhập</nuxt-link>
    </div>
    <div v-if="authenticated">
      <v-layout justify-center>
        <v-flex xs12 pt-4 pb-2>
          <Search/>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md12 xs12>
          <panel title="Bản Nhạc">
            <v-btn slot="btn-panel" @click="addClick">add</v-btn>
            <div v-for="song in songs" :key="song.id">
              <v-layout>
                <v-flex xs4 pt-4 pb-4 pl-4 pr-4>
                  <h2>{{song.title}}</h2>
                  <h4>{{song.artist}}</h4>
                  <h4>{{song.album}}</h4>
                  <h4>{{song.genre}}</h4>
                  <v-card-actions>
                    <v-btn color="primary" dark @click="detail(song.id)">Chi Tiết</v-btn>
                  </v-card-actions>
                </v-flex>
                <v-flex xs8 md8 pt-4 pb-4 pl-4 pr-4 center>
                  <img :src="song.albumImageUrl" alt width="100%" srcset>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            </div>
          </panel>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import songService from "@/services/songService";
import Search from "@/components/Search";
export default {
  data() {
    return {
      songs: []
    };
  },
  components: {
    Panel,
    Search
  },
  // async mounted() {
  //   const songs = await songService.index();
  //   console.log("songs= ", songs.data);
  //   this.songs = songs.data;
  // },
  methods: {
    addClick() {
      this.$router.push({ name: "songs-create" });
    },
    detail(id) {
      this.$router.push({
        name: "songs-id",
        params: {
          id: id
        }
      });
    }
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        // const songs = await songService.index(value);
        const songs = await this.$axios.get("/songs", {
          params: {
            search: value
          }
        });
        // console.log("songs= ", songs.data);
        this.songs = songs.data;
      }
    }
  }
};
</script>

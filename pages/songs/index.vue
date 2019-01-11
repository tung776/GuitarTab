<template>
  <v-layout justify-center>
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
</template>

<script>
import Panel from "@/components/Panel";
import songService from "@/services/songService";
export default {
  data() {
    return {
      songs: []
    };
  },
  components: {
    Panel
  },
  async mounted() {
    const songs = await songService.index();
    console.log("songs= ", songs.data);
    this.songs = songs.data;
  },
  methods: {
    addClick() {
      this.$router.push({ name: "createSong" });
    },
    detail(id) {
      this.$router.push(`/songs/${id}`);
    }
  }
};
</script>

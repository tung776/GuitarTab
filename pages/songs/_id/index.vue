<template>
  <v-layout justify-center>
    <v-flex md12 xs12>
      <panel title="Bản Nhạc" v-if="song">
        <v-btn slot="btn-panel" @click="addClick">add</v-btn>

        <v-layout>
          <v-flex xs4 pt-4 pb-4 pl-4 pr-4>
            <h2>{{song.title}}</h2>
            <h4>{{song.artist}}</h4>
            <h4>{{song.album}}</h4>
            <h4>{{song.genre}}</h4>
            <img :src="song.albumImageUrl" alt width="80%" srcset>

            <v-card-actions pt-4>
              <v-btn color="primary" dark @click="backTolist">Các Bản Nhạc</v-btn>
              <nuxt-link
                :to="{name:'songs-id-edit', params:{id:song.id}}"
                class="v-btn theme--dark primary"
              >Sửa Thông Tin</nuxt-link>
              <!-- <v-btn color="primary" dark @click="editSong">Sửa Thông Tin</v-btn> -->
            </v-card-actions>
          </v-flex>
          <v-flex xs8 pt-4 pb-4 pl-4 pr-4>
            <iframe
              width="640"
              height="360"
              :src="song.youtubeUrl"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout>
          <v-flex xs6 md8 pt-4 pb-4 pl-4 pr-4 center>
            <h2>Hợp Âm</h2>
            <div v-html="song.tab"></div>
          </v-flex>
          <v-flex xs6 md8 pt-4 pb-4 pl-4 pr-4>
            <h2>Lời Bản Nhạc</h2>
            <div v-html="song.lyrics"></div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
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
      song: null
    };
  },
  components: {
    Panel
  },
  async mounted() {
    // console.log("this.$route.params.id = ", this.$route.params.id);
    // const song = await songService.loadSong(this.$route.params.id);
    const song = await this.$axios.get(`/song/${this.$route.params.id}`);
    console.log("songs= ", song.data);
    this.song = song.data;
  },
  methods: {
    addClick() {
      this.$router.push("/songs/create");
    },
    backTolist(id) {
      this.$router.push({
        name: "songs"
      });
    },
    editSong(id) {
      this.$router.push({
        name: "songs-id-edit",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

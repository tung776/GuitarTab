<template>
  <v-layout justify-center>
    <panel title="Thêm Bản Nhạc"></panel>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import songService from "@/services/songService";
export default {
  data() {
    return {
      song: {
        title: "",
        artist: "",
        genre: "",
        album: "",
        albumImageUrl: "",
        slu: "",
        youtubeUrl: "",
        tab: "",
        lyrics: ""
      }
    };
  },
  components: {
    Panel
  },
  async mounted() {
    try {
      const result = await songService.createSong();
      // console.log("songs= ", songs.data);
      this.songs = result.data;
    } catch (err) {
      console.log("eror: ", err);
    }
  }
};
</script>

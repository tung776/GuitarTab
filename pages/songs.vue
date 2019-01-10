<template>
  <v-layout justify-center>
    <panel title="Bản Nhạc">
      <div v-for="song in songs" :key="song.id">
        <p>{{song.title}}</p>
        <p>{{song.artist}}</p>
        <p>{{song.album}}</p>
        <img :v-bind="song.youtubeUrl" alt sizes="200px" srcset>
        <div v-html="song.tab"></div>
      </div>
    </panel>
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
  }
};
</script>

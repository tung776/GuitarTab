<template>
  <div>
    <v-layout>
      <v-flex md4 xs12>
        <panel title="Thêm Bản Nhạc">
          <v-flex pt-2 pb-2 pr-4 pl-4>
            <v-text-field
              ref="title"
              v-model="song.email"
              label="Tên Bản Nhạc"
              placeholder="Tên Bản Nhạc"
              required
            ></v-text-field>
            <v-text-field
              ref="artist"
              v-model="song.artist"
              label="Nghệ Sĩ"
              placeholder="Tên Nghệ Sĩ"
              required
            ></v-text-field>
            <v-text-field
              ref="genre"
              v-model="song.genre"
              label="Thể Loại"
              placeholder="Thể Loại"
              required
            ></v-text-field>
            <v-text-field
              ref="album"
              v-model="song.album"
              label="album"
              placeholder="album"
              required
            ></v-text-field>
            <v-text-field
              ref="albumImageUrl"
              v-model="song.albumImageUrl"
              label="Ảnh Album"
              placeholder="Url ảnh Album"
              required
            ></v-text-field>
            <v-text-field ref="slug" v-model="song.slug" label="URL" placeholder="URL" required></v-text-field>
            <v-text-field
              ref="youtubeUrl"
              v-model="song.youtubeUrl"
              label="youtubeUrl"
              placeholder="youtubeUrl"
              required
            ></v-text-field>
            <v-text-field ref="slug" v-model="song.slug" label="URL" placeholder="URL" required></v-text-field>
          </v-flex>
        </panel>
      </v-flex>
      <v-flex xs12 md8 pt-2 pb-2 pr-4 pl-4>
        <panel title="Nội Dung">
          <v-flex pt-2 pb-2 pr-4 pl-4>
            <v-textarea
              ref="tab"
              multi-line
              rows="12"
              v-model="song.tab"
              label="Hợp Âm"
              placeholder="Hợp Âm"
            ></v-textarea>
            <v-textarea
              ref="lyrics"
              multi-line
              rows="12"
              v-model="song.lyrics"
              label="Lời Bản Nhạc"
              placeholder="lyrics"
            ></v-textarea>
          </v-flex>
        </panel>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-btn color="primary" dark @click="cancel">Hủy Bỏ</v-btn>
      <v-btn color="primary" dark @click="submit">Tạo Bản Nhạc</v-btn>
    </v-card-actions>
  </div>
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
        slug: "",
        youtubeUrl: "",
        tab: "",
        lyrics: ""
      }
    };
  },
  components: {
    Panel
  },

  methods: {
    async submit() {
      try {
        const result = await songService.createSong(this.song);
        // console.log("songs= ", songs.data);
        this.songs = result.data;
      } catch (err) {
        console.log("eror: ", err);
      }
    },

    cancel() {
      this.$router.push("/");
    }
  }
};
</script>

<template>
  <div>
    <v-layout>
      <v-flex md4 xs12>
        <panel title="Thêm Bản Nhạc">
          <v-flex pt-2 pb-2 pr-4 pl-4>
            <v-text-field
              ref="title"
              v-model="song.title"
              label="Tên Bản Nhạc"
              placeholder="Tên Bản Nhạc"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              ref="artist"
              v-model="song.artist"
              label="Nghệ Sĩ"
              placeholder="Tên Nghệ Sĩ"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              ref="genre"
              v-model="song.genre"
              label="Thể Loại"
              placeholder="Thể Loại"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              ref="album"
              v-model="song.album"
              label="album"
              placeholder="album"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              ref="albumImageUrl"
              v-model="song.albumImageUrl"
              label="Ảnh Album"
              placeholder="Url ảnh Album"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field ref="slug" v-model="song.slug" label="URL" placeholder="URL" required></v-text-field>
            <v-text-field
              ref="youtubeUrl"
              v-model="song.youtubeUrl"
              label="youtubeUrl"
              placeholder="youtubeUrl"
              :rules="[rules.required]"
            ></v-text-field>
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
              :rules="[rules.required]"
            ></v-textarea>
            <v-textarea
              ref="lyrics"
              multi-line
              rows="12"
              v-model="song.lyrics"
              label="Lời Bản Nhạc"
              placeholder="lyrics"
              :rules="[rules.required]"
            ></v-textarea>
          </v-flex>
        </panel>
      </v-flex>
    </v-layout>
    <v-alert :value="true" type="error" v-if="error">
      <div v-html="error">{{error}}</div>
    </v-alert>
    <v-card-actions>
      <v-btn color="primary" dark @click="cancel">Hủy Bỏ</v-btn>
      <v-btn color="primary" dark @click="submit">Tạo Bản Nhạc</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  middleware: "auth",
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        slug: null,
        youtubeUrl: null,
        tab: null,
        lyrics: null
      },
      rules: {
        required: value => !!value || "required"
      },
      error: null
    };
  },
  components: {
    Panel
  },

  methods: {
    async submit() {
      try {
        this.error = null;
        const areAllFieldFilled = Object.keys(this.song).forEach(key => {
          if (this.song[key] == null || this.song[key] == "") {
            this.error = true;
          }
        });
        if (this.error) {
          this.error = "Bạn hãy điền các dữ liệu cần thiết";
          return;
        }
        const result = await this.$axios.post("/createSong", this.song);
        this.$router.push({ name: "songs" });
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

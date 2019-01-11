import api from "@/services/api";

export default {
  index() {
    return api().get("/songs");
  },
  createSong(song) {
    return api().post("/createSong", song);
  },
  loadSong(id) {
    return api().get(`/song/${id}`);
  }
};

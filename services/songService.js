import api from "@/services/api";

export default {
  index(search) {
    return api().get("/songs", {
      params: {
        search
      }
    });
  },
  createSong(song) {
    return api().post("/createSong", song);
  },
  editSong(song) {
    return api().put(`/song/${song.id}/edit`, song);
  },
  loadSong(id) {
    return api().get(`/song/${id}`);
  }
};

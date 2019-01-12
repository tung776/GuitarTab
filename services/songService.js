import api from "@/services/api";

export default {
    index() {
        return api().get("/songs");
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
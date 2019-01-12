const {
    Song
} = require("../models");

module.exports = {
    async createSong(req, res) {
        try {
            // console.log('req.body =', req.body)
            const _song = ({
                title,
                artist,
                genre,
                album,
                albumImageUrl,
                slug,
                youtubeUrl,
                lyrics,
                tab
            } = req.body);
            const result = await Song.create(_song);
            // console.log('result = ', result)
            res.status(200).send(result.toJSON());
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(400).send({
                error: "Tạo bản nhạc mới thất bại!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    },
    async editSong(req, res) {
        try {
            // console.log('req.body =', req.body)
            const _song = ({
                title,
                artist,
                genre,
                album,
                albumImageUrl,
                slug,
                youtubeUrl,
                lyrics,
                tab
            } = req.body);
            // console.log('req.body = ', req.body);
            // console.log('req.params = ', req.params);

            const result = await Song.update(_song, {
                where: {
                    id: req.params.id
                }
            });
            if (!result) {
                return res.status(400).send({
                    error: "Không thể cập nhật dữ liệu",
                    success: false
                })
            }
            console.log('result = ', result)
            res.status(200).send({
                success: true
            });
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(400).send({
                error: "Sửa bản nhạc mới thất bại!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    },
    async songs(req, res) {
        try {
            const _songs = await Song.findAll();
            res.status(200).send(_songs);
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(403).send({
                error: "Khoong tìm thấy dữ liệu!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    },
    async song(req, res) {
        try {
            console.log("req.params = ", req.params);
            const _songs = await Song.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send(_songs);
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(403).send({
                error: "Khoong tìm thấy dữ liệu!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    }
};
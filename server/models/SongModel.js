module.exports = (sequelize, DataTypes) => {
    const SongModel = sequelize.define("Song", {
        title: {
            type: DataTypes.STRING(126),
            unique: true
        },
        artist: {
            type: DataTypes.STRING(126)
        },
        genre: {
            type: DataTypes.STRING(126)
        },
        album: {
            type: DataTypes.STRING(126)
        },
        albumImageUrl: {
            type: DataTypes.STRING(126)
        },
        slug: {
            type: DataTypes.STRING(126)
        },
        youtubeUrl: {
            type: DataTypes.STRING(126)
        },
        lyrics: {
            type: DataTypes.TEXT
        },
        tab: {
            type: DataTypes.TEXT
        }
    });


    return SongModel;
};
function getSongsToPlay (inputArr) {
    class Song {
        constructor (playlist, name, duration) {
            this.playlist = playlist;
            this.name = name;
            this.duration = duration;
        }
    }

    let songsQuantity = inputArr[0];
    let songsInfoArr = inputArr.slice(1, songsQuantity + 1);
    let playlistToPlay = inputArr[inputArr.length - 1];

    let songs = [];

    for (let songInfo of songsInfoArr) {
        let [playlist, name, duration] = songInfo.split('_');
        songs.push(new Song(playlist, name, duration));
    }

    let songsToPlay = songs;

    if (playlistToPlay !== "all") {
        songsToPlay = songsToPlay
            .filter(song => song.playlist === playlistToPlay);
    }

    console.log(songsToPlay.map(song => song.name).join("\n"));
}

getSongsToPlay([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite"
]);

getSongsToPlay([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater"
]);

getSongsToPlay([
    2,
    "like_Replay_3:15",
    "ban_Photoshop_3:48",
    "all"
]);
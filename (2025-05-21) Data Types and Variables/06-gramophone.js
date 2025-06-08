function gramophone (bandName, albumName, songName) {
    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(songDurationInSeconds / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
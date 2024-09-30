function addMovie() {
    const movieName = document.getElementById("movie-input").value;
    document.getElementById("movie-name").innerText = movieName;
    document.getElementById("movie-input").value = '';
}

function addSong() {
    const songInput = document.getElementById("song-input").value;
    if (songInput) {
        const li = document.createElement("li");
        li.textContent = songInput;
        document.getElementById("playlist").appendChild(li);
        document.getElementById("song-input").value = '';
    }
}

function addTMI() {
    const tmiInput = document.getElementById("tmi-input").value;
    if (tmiInput) {
        const p = document.createElement("p");
        p.textContent = tmiInput;
        document.getElementById("tmi-display").appendChild(p);
        document.getElementById("tmi-input").value = '';
    }
}

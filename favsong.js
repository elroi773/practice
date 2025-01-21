const playlist = document.getElementById('playlist');
const nowPlaying = document.getElementById('nowPlaying');
const audioPlayer = document.getElementById('audioPlayer');
const lyricsDisplay = document.getElementById('lyricsDisplay');


playlist.addEventListener('click', (e) => {
    if (e.target && (e.target.tagName === 'LI' || e.target.closest('li'))) {
        const li = e.target.closest('li');
        const audioElement = li.querySelector('audio');
        const songSrc = audioElement.src;
        const songTitle = li.querySelector('span').textContent;
        const songLyrics = audioElement.getAttribute('data-lyrics');


        audioPlayer.src = songSrc;
        audioPlayer.play();


        nowPlaying.textContent = `Now Playing: ${songTitle}`;
        nowPlaying.classList.add('show');


        lyricsDisplay.textContent = songLyrics;


        setTimeout(() => {
            nowPlaying.classList.remove('show');
        }, 2000);
    }
});

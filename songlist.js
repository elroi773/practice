const playlist = document.getElementById('playlist');
        const audioPlayer = document.getElementById('audioPlayer');
        const playerContainer = document.getElementById('player-container');

        playlist.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName === 'LI') {
                const songSrc = e.target.getAttribute('data-src');
                audioPlayer.src = songSrc;
                audioPlayer.play();

                // Add animation class
                playerContainer.classList.add('active');
            }
        });

        audioPlayer.addEventListener('pause', function() {
            // Remove animation class when paused
            playerContainer.classList.remove('active');
        });
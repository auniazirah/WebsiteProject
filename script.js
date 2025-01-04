// <script src="script.js"></script>
document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        const audio = button.closest('.music-card').querySelector('.audioPlayer');
        const playIcon = button.querySelector('img');

        button.addEventListener('click', () => {
            // Pause all other audios
            document.querySelectorAll('.audioPlayer').forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.closest('.music-card').querySelector('.play-button img').src = 'images/play-button.jpg';
                }
            });

            // Play or pause the selected audio
            if (audio.paused) {
                audio.play().catch(error => console.error("Audio play failed:", error));
                playIcon.src = 'images/pause-button.jpg';
            } else {
                audio.pause();
                playIcon.src = 'images/play-button.jpg';
            }
        });
    });
});


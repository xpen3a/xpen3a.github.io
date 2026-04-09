const player = document.getElementById('player');
const tracks = document.querySelectorAll('.tracklist li');

tracks.forEach(track => {
  track.addEventListener('click', () => {
    const src = track.getAttribute('data-src');
    player.src = src;
    player.play();
  });
});
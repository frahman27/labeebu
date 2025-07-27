// Enable audio playback on first user interaction
document.body.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play();
  }
}, { once: true });

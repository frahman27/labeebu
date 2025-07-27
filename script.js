document.body.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  }
}, { once: true }); // Ensures music plays only on first click

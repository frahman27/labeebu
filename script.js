// Play background music on first click/tap (for Safari/iOS compatibility)
document.body.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  }
}, { once: true });

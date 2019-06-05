const episodes = document.querySelectorAll(`.episode-item`);
episodes.forEach($episode => {
  $director = document.querySelector(`.episode-director`)
  if ($director.textContent !== `Freddy Lamarr`) {
    $episode.remove();
  }
});

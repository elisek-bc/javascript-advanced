const episodes = document.querySelectorAll(`.episode-title`);
const currentEpisode = document.querySelector(`.subtitle`);

episodes.forEach($episode => {
  if ($episode.textContent === currentEpisode.textContent) {
    $episode.classList.add(`highlight`);
  }
});

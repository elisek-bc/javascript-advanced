const episodes = document.querySelectorAll(`.episode-item`);

episodes.forEach((episode, i) => {
  const release = document.querySelector(`.episode-air`);
  //const today = get Date;
  //if (release < "dag van vandaag") {
    console.log(episode);
    const $meta = episode.querySelector(`.episode-meta`);
    const number = i + 1;
    $meta.innerHTML = `<a href= "episode` + number + `.mp4">Watch now</a>`;
  //};
});

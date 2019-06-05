{

  const createListItem = content => {
    const $element

    $element.classList.add(`movie`);
    return $element;
  };

  const init = () => {
    const movies = [
      `Flying`,
      `River's Edge`,
      `youngblood`,
      `Permanent Record`,
      `The Prince of Pennsylvania`,
      `The Night Before`,
      `Dangerous Liaisons`,
      `Bill & Ted's Excellent Adventure`,
      `Parenthood`,
      `I Love You to Death`,
      `Speed`,
      `The Matrix`,
      `The Matrix Reloaded`,
      `The Matrix Revolutions`,
      `47 ROnin`,
      `John Wick`,
      `Siberia`,
    ];

    const $latestMovies = document.querySelector(`.latest-movies`);

    movies
    .map(createListItem);
  };


  init();
}

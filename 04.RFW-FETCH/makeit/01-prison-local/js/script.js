{
  
  const createShow = show => {
    const $show = document.createElement(`article`);
    $show.classList.add(`show`);
    
    $show.appendChild(getTitle(show));
    $show.appendChild(getImage(show));
    
    document.querySelector(`.shows`).appendChild($show);
  };

  const getImage = show => {
    const $img = document.createElement(`img`);
    $img.src = show.image.medium;
    return $img;
  };
  
  const getTitle = show => {
    const $title = document.createElement(`h2`);
    $title.textContent = `${getEpisodeNumber(show)}: ${show.name}`;
    $title.classList.add(`title`);
    return $title;
  };
  
  const getEpisodeNumber = show => {
    return `S${addleadingZero(show.season)}E${addleadingZero(show.number)}`;
  };
  
  const addleadingZero = input => {
    return `0${input}`.slice(-2);
  };


  const init = () => {
  
  };
  
  init();
  
}


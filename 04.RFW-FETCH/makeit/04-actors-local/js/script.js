{
  let timeout;
  let actors;
  
  const createResultList = actors => {
  
  };
  
  const getActorListItem = actor => {
    const $li = document.createElement(`li`);
    
    const $img = document.createElement(`img`);
    $img.src = `http://image.tmdb.org/t/p/w45${actor.image_path}`;
    
    const $span = document.createElement(`span`);
    $span.textContent = actor.name;
    
    $li.appendChild($img);
    $li.appendChild($span);
    
    return $li;
  };

  const filterActors = (actors, term) => {
    return actors.filter(actor => actor.name.toLowerCase().includes(term)).sort(sortByActorName);
  };
  
  const sortByActorName = (a, b) => a.name > b.name;

  const search = value => {
    if(value.length > 0){
      const results = filterActors(actors, value);
      createResultList(results);
    }else{
      document.querySelector(`.results`).innerHTML = ``;
    }
  };

  const handleKeyUpSearch = e => {
    clearTimeout(timeout);
    const $input = e.currentTarget;
    
    timeout = setTimeout(() => {
      search($input.value.toLowerCase());
    }, 150);
  };
  
  const init = () => {
    document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    
    const url = `assets/actors.json`;
  };

  init();
  
}


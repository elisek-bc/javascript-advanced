{

  const search = value => {
    const url = `http://www.omdbapi.com/?s=star`;

  };

  const handleKeyUpSearch = e => {
    if(e.keyCode === 13){
      const $input = e.currentTarget;
      search($input.value);
    }
  };

  const init = () => {
    document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
  };

  init();
}
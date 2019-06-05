{

  const checkStatus = response => {
    if (!response.ok) throw Error(response.statusText);
    return response;
  };

  const parse = data => {
    const gif = //
    const $img = document.querySelector(`.result`);
    const $slug = document.querySelector(`.slug`);
    $img.src =  //
    $slug.textContent = //;
  };

  const search = value => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC`;
	
  };

  const onKeyUp = e => {
    if(e.keyCode === 13){
      const $input = e.currentTarget;
      search($input.value);
    }
  };

  const init = () => {
    document.querySelector(`.search`).addEventListener(`keyup`, onKeyUp);
  };

  init();
}
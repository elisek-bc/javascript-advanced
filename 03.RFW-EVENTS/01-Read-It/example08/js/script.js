{

  const getNextImage = img => {
    const path = `./assets/img/`;
    let number = parseInt(img.replace(path, ``));
    number++;
    number = (number < 5) ? number : 1;
    return `${path}${number}.jpg`;
  };
  
  const handleClickImg = e => {
    const $img = e.currentTarget;    
    const img = getNextImage($img.getAttribute(`src`));
    $img.setAttribute(`src`, img );
  };
  
  const init = () => {
    const $img = document.querySelector(`img`);
    $img.addEventListener(`click`, handleClickImg);
  };
  
  init();
}

{
  const photos = [
    `coffee.jpg`, `eva-ryan1.jpg`, `sunglasses.jpg`, `walkingcouple.jpg`,
  ];

  const getNextIndex = index => {
    index++;
    if(index >= photos.length){
      index = 0;
    }
    return index;
  };

  const getImage = index => {
    const path = `./assets/img/`;
    return `${path}${photos[index]}`;
  };
  
  const handleClickImg = e => {
    const $img = e.currentTarget; 
    
    let index = parseInt($img.dataset.index, 10); 
    index = getNextIndex(index);
    
    $img.setAttribute(`src`, getImage(index));
    $img.dataset.index = index;
  };
  
  const init = () => {
    const $img = document.querySelector(`img`);
    $img.addEventListener(`click`, handleClickImg);
  };
  
  init();
}

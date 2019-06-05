{
  
  const handleMousemoveDocument = e => {
    const xpos = e.clientX;
    const $img = document.querySelector(`img`);
    $img.style.transform = `rotate(${xpos / window.innerWidth * 360}deg)`;
  };
  
  const init = () => {
    document.addEventListener(`mousemove`, handleMousemoveDocument);
  };

  init();
}

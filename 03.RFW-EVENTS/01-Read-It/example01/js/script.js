{
  
  const handleClickButton = () => {
    document.querySelector(`.message`).textContent = `eh...`;
  };
  
  const init = () => {
    const $btn = document.querySelector(`.btn`);
    $btn.addEventListener(`click`, handleClickButton);
  };
  
  init();
}

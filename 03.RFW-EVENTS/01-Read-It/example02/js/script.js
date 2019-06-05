{
  
  const handleClickButton = e => {
    e.currentTarget.remove();
    document.querySelector(`.message`).textContent = `told you so`;
  };
  
  const init = () => {
    const $btn = document.querySelector(`.btn`);
    $btn.addEventListener(`click`, handleClickButton);
  };
  
  init();
}

{
  
  
  const showResult = result => {
    const $result = document.querySelector(`.result`);
    $result.textContent = `U zocht naar '${result}'`;
  };
  
  const init = () => {
    const $button = document.querySelector(`.button`);
    $button.addEventListener(`click`, handleClickButton);
  };
  
  init();
}

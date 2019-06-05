{
  let start;

  const handleClickButton = e => {
    if(e.currentTarget.classList.contains(`start`)){
      start = Date.now();
    }
    else{
      const stop = Date.now();
      const time = stop - start;
      document.querySelector(`.info`).textContent = `${time / 1000} seconds`;
    }
  };

  const init = () => {
    const buttons = document.querySelectorAll(`button`);
    buttons.forEach($button => $button.addEventListener(`click`, handleClickButton));
  };

  init();
}

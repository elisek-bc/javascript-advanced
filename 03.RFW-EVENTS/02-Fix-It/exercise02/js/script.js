{
  let start;
  
  const handleClickStartButton = () => {
    
  };
  
  const handleClickStopButton = () => {
    const time = stop - start;
    document.querySelector(`.info`).textContent = `${Math.round(time) / 1000} seconds`;
  };
  
  const init = () => {
    const $start = document.querySelector(`.start`);
    const $finish = document.querySelector(`.finish`);
    

  };
  
  init();
}

{
  const init = () => {
    updateTimer();
    setInterval(updateTimer, 1000);
  };

  const updateTimer = () => {
    const date = new Date();
    document.querySelector(`.time`).textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  init();
}

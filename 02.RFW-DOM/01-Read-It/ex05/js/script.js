const updateTimer = () => {
  const date = new Date();
  document.querySelector(`.time`).textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

updateTimer();
setInterval(updateTimer, 1000);

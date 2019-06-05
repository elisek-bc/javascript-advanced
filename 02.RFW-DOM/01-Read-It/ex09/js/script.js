{

  const updateTimer = ($clock, $info) => {
    const timeString = getTimeString();
    $clock.textContent = timeString;
    $info.textContent = timeString.includes(`11`) ? `ELEVEN!` : ``;
  };

  const getTimeString = () => {
    const date = new Date();
    return `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`;
  };

  const formatNumber = value => `${(value < 10) ? 0 : ``}${value}`;

  const init = () => {
    const $info = document.querySelector(`.info`);
    const $clock = document.querySelector(`.clock`);

    updateTimer( $clock, $info);
    setInterval(updateTimer, 1000, $clock, $info);
  };

  init();
}

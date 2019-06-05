{
  let r = 0;
  let g = 0;
  let b = 0;

  const handleInputRange = e => {
    const $range = e.currentTarget;
    const color = $range.dataset.color;
    switch (color) {
    case `r`:
      r = $range.value;
      break;
    case `g`:
      g = $range.value;
      break;
    case `b`:
      b = $range.value;
      break;
    }
    updateBackgroundColor();
    updateTitleColor();
  };

  const updateBackgroundColor = () => {
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  };
  
  const updateTitleColor = () => {
    document.querySelector(`h1`).style.color = `rgb(${255 - r},${255 - g},${255 - b})`;
  };

  const init = () => {
    const ranges = document.querySelectorAll(`.range`);
    ranges.forEach($range => $range.addEventListener(`input`, handleInputRange));
  };

  init();
}

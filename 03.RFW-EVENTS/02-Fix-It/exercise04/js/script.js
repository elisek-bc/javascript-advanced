{

  const handleInputTextarea = e => {
  
  };
  
  const isCharForbidden = char => {
    const forbidden = [`i`, `o`];
    return forbidden.includes(char.toLowerCase());
  };

  const init = () => {
    const $input = document.querySelector(`.textarea`);
    $input.addEventListener(`keypress`, handleInputTextarea);
  };
  
  init();
}

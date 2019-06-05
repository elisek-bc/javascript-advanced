{

  const handleInputRange = e => {
    const value = e.currentTarget.value;
    const $box = document.querySelector(`.box`);
    $box.style.borderRadius = `${value}%`;
    $box.textContent = `${value}%`;
  };
  
  const init = () => {
  
  };
  
  init();
}

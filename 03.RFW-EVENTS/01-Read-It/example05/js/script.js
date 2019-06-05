{
  
  const handleClickLink = e => {
    if(!confirm(`Zeker?`)){
      e.preventDefault();
    }
  };

  const init = () => {
    const links = document.querySelectorAll(`a.confirm`);
    links.forEach($link => $link.addEventListener(`click`, handleClickLink));
  };

  init();
}

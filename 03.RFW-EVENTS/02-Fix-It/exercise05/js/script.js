{

  const handleInputPass = e => {
    const $password =  
    const password = 
    $password.classList.remove(`super`, `good`, `bad`);

    if(password.length > 8){
      $password.classList.add(`super`);
    }else if (password.length > 4) {
      $password.classList.add(`good`);
    }else{
      $password.classList.add(`bad`);
    }
  };
  
  const init = () => {
    const $pass = document.querySelector(`.pass`);
    $pass.addEventListener(``, handleInputPass);
  };
  
  init();
}
{
  const $add = document.querySelector(`.add`);
  
  const handleClickButton = () => {    
    addTodo($add.value);
    $add.value = ``;
  };
  
  const addTodo = todo => {
    if(todo !== ``){
      const $li = document.createElement(`li`);
      $li.textContent = todo;
    
      const $todoList = document.querySelector(`.todos`);
      $todoList.appendChild($li);
    }
  };
  
  const handleClickTodo = e => {
    e.currentTarget.classList.toggle(`done`);
  };
  
  const handleKeyupAdd = e => {
    if(){
      handleClickButton();
    }
  };
  
  const init = () => {
    const $button = document.querySelector(`.button`);
    $button.addEventListener(`click`, handleClickButton);
    $add.addEventListener(`keyup`, handleKeyupAdd);
  };
  
  init();
}

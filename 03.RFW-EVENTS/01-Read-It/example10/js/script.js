{
  
  const handleClickButton = () => {  
    const $add = document.querySelector(`.add`);
    addTodo($add.value);
    $add.value = ``;
  };
  
  const addTodo = todo => {
    const $li = document.createElement(`li`);
    $li.textContent = todo;
    
    const $todoList = document.querySelector(`.todos`);
    $todoList.appendChild($li);
  };
  
  const init = () => {
    const $button = document.querySelector(`.button`);
    $button.addEventListener(`click`, handleClickButton);
  };
  
  init();
}

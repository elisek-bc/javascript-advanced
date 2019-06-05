{
  
  const handleSubmitForm = e => {
    e.preventDefault();
    const $search = document.querySelector(`.search`);
    showResult($search.value);
  };
  
  const showResult = result => {
    const $result = document.querySelector(`.result`);
    $result.textContent = `You searched for '${result}'`;
  };
  
  const init = () => {
    const $form = document.querySelector(`.form`);
    $form.addEventListener(`submit`, handleSubmitForm);
  };
  
  init();
}

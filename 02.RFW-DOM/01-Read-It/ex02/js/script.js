const items = Array.from(document.querySelectorAll(`li`));
const $ul = document.querySelector(`ul`);

const sortByValue = ($a, $b) => {
  if($a.textContent < $b.textContent){
    return -1;
  }
  if($a.textContent > $b.textContent){
    return 1;
  }
  return 0;
};

items
  .sort(sortByValue)
  .forEach($el => $ul.appendChild($el));

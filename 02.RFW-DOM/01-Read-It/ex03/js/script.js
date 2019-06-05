const $greenbook = document.querySelector(`.greenbook`);
const $blackpanther = document.querySelector(`.blackpanther`);
const $winner = document.querySelector(`.winner`);
const $nominees = document.querySelector(`.nominees-container`);

// const $removed = $winner.replaceChild($moonlight, $lala);
// $nominees.appendChild($removed);

$winner.appendChild($blackpanther);
$nominees.appendChild($greenbook);

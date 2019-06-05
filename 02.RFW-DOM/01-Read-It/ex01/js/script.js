const $article = document.createElement(`article`);
const $intro = document.createElement(`p`);

document.body.appendChild($article);
$article.appendChild($intro);

$intro.classList.add(`intro`);
$intro.innerText = `Matt Damon is an American actor, producer and screenwriter. He made his screen debut at the age of 18 with a minor role in the 1988 film Mystic Pizza.`;

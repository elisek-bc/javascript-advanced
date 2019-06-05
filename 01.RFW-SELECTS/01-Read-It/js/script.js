//1-6
//Look at the following methods to select (an) element(s)
//Use the console to view the results

const pTags = document.getElementsByTagName(`p`);
console.log(1, pTags);

const $search = document.getElementById(`search`);
console.log(2, $search);

const divTagsByTagName = document.getElementsByTagName(`div`);
console.log(3, divTagsByTagName);

const $divTagQuerySelector = document.querySelector(`div`);
console.log(4, $divTagQuerySelector);

const divTagsquerySelectorAll = document.querySelectorAll(`div`);
console.log(5, divTagsquerySelectorAll);

const $subtitle = document.querySelector(`.subtitle`);
console.log(6, $subtitle);

//7
//What is the difference in result from both ways of selecting an element?
const $button = document.querySelector(`header .button`);
console.log(`7a`, $button);
// This will get the first button in the first header.

const $main = document.querySelector(`header`);
console.log(`7b`, $main);
const $button2 = $main.querySelector(`.button`);
console.log(`7b`, $button2);
// This will get the first header and the first button, that isn't necessarily in the header.

//8-10
//Inspect the following properties of the document object. What do they return?
const links = document.links;
console.log(8, links);
// This returns all links in the document in an HTML Collection

const forms = document.forms;
console.log(9, forms);
// This returns all forms in an HTML Collection, even if there is only 1, it returns a collection.

const title = document.title;
console.log(10, title);
// This returns all titles in the document, here there's only one so it returns an element

//11-13
//There is an important difference between childNodes and children.
//Inspect the console and try to explain the differences.
const $episodes = document.querySelector(`.episode-list`);
console.log(`11a`, $episodes.childNodes);
console.log(`11b`, $episodes.firstChild);
// The first one returns a nodeList of everything in $episodes, the second one only returns #text?

console.log(`12a`, $episodes.children);
console.log(`12b`, $episodes.firstElementChild);
console.log(`12c`, $episodes.childElementCount);
// The first one returns an HTML collection of all the direct children, the second one returns the first child element in $episodes (seems handy), the 3d counts the amount of direct children

console.log(`13a`, $episodes.firstElementChild.nextSibling);
console.log(`13b`, $episodes.firstElementChild.nextElementSibling);
// The first one returns a node, the second one returns the element after the previous one, on the same level.

//14
//We're missing an element. 
//What element exactly? How do we select it?
console.log(14, $episodes.children[3].children[2].lastElementChild.remove());
// The missing element is a span from the last list item's metadata span.


//15
//Inspect the 2 different outputs in the console
//Why is there no 'Episode: ' in the logged output?
const $episode5 = $episodes.children[4];
console.log(`15a`, $episode5.textContent);
console.log(`15b`, $episode5.innerHTML);
// There is no Episode: because it's no HTML but a CSS adjustment


//16
//What is happening in this example?
//Is the result the same with innerHTML?
const $viewersEP5 = $episode5.children[2].lastElementChild;
$viewersEP5.innerText = `5.33`;

//17
//What is happening in this example?
//Is the result the same with innerText?
const $viewers = $episodes.children[4].children[2].firstElementChild;
$viewers.innerHTML = `<a href="#">${$viewers.innerText}</a>`;

//18
console.log(`18a`, $search.hasAttribute(`type`));
console.log(`18b`, $search.getAttribute(`type`));
$search.setAttribute(`type`, `search`);
console.log(`18c`, $search.getAttribute(`type`));

//19
//Describe what we are doing here
const $nav = document.querySelector(`.nav-link`);
$nav.classList.add(`active`);


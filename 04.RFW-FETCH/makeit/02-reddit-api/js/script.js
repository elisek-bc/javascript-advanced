{
  
  const createTopic = topic => {
    const $article = document.createElement(`article`);
    $article.classList.add(`topic`);
    const $title = document.createElement(`h2`);
    $title.textContent = //
    $title.classList.add(`topic-title`);
    
    const $score = document.createElement(`span`);
    $score.textContent = //
    $score.classList.add(`score`);
    
    const $comments = document.createElement(`a`);
    $comments.textContent = //
    $comments.href = //
    $comments.classList.add(`comments`);

    $article.appendChild($score);
    $article.appendChild(getThumbnail(topic));
    
    const $div = document.createElement(`div`);
    $div.classList.add(`wrapper`);
    $div.appendChild($title);
    $div.appendChild($comments);
    
    $article.appendChild($div);
    
    document.querySelector(`.topics`).appendChild($article);
  };
  
  const getThumbnail = topic => {
    let path = topic.thumbnail;
    const exceptions = [`self`, `spoiler`];
    if(exceptions.includes(path)){
      path = `./assets/img/reddit.png`;
    }
    const $img = document.createElement(`img`);
    $img.src = path;
    return $img;
  };
  

  const init = () => {
    const url = `https://www.reddit.com/r/movies/.json`;

  };
  
  init();
  
}


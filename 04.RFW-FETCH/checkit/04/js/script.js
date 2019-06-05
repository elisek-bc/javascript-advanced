{

  const parse = movies => {
    document.body.innerHTML = movies
    .map(movie => `<p>${movie}</p>`).join(``);
  };

  const init = () => {
    const url = `./assets/data/data.json`;
	
    fetch(url)
			.then(r => r.json())
			.then(jsonData => parse(jsonData));

  };

  init();
}
{
  
  const checkStatus = response => {
    if(!response.ok){ throw Error(response.statusText);}
    return response;
  };

  const parse = movies => {
    document.body.innerHTML = movies
    .map(movie => `<p>${movie}</p>`).join(``);
  };

  const init = () => {
    const url = `./assets/data/daa.json`;
	
    fetch(url)
      //.then(checkStatus)
			.then(r => r.json())
			.then(jsonData => parse(jsonData));
      //.catch(reason => console.log(reason));

  };

  init();
}
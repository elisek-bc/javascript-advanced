{

  const init = () => {
    const url = `./assets/data/data.json`;
	
    fetch(url)
			.then(response => response.json())
			.then(jsonData => console.log(jsonData));

  };

  init();
}
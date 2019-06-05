{

  const init = () => {
    const url = `./assets/data/data.txt`;
	
    fetch(url)
			.then(response => response.text())
			.then(text => console.log(text));

  };

  init();

}
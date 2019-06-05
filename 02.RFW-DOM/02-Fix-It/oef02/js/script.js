{
  const init = () => {
    const missions = document.querySelectorAll(`.mission`);
    missions.sort(sortByCosts);

    const $missionList = document.querySelector(`.mission-list`);

    missions.forEach($mission => $missionList.appendChild($mission));
  };

  const sortByCosts = ($missionA, $missionB) => true;

  const getCostsForMission = $mission => parseCost($mission.querySelector(`.costs`).textContent);

  const parseCost = value => {
    let factor = 1;
    switch (value.slice(-1)) {
    case `k`:
      factor = 1000;
      break;
    case `m`:
      factor = 1000000;
      break;
    case `B`:
      factor = 1000000000;
      break;
    }
    return parseInt(value.slice(1), 10) * factor;
  };

  init();

}

{

  const getCastMember = () => {
    const cast = [
      {
        actor: `George Clooney`,
        role: `Danny Ocean`,
      }, {
        actor: `Bernie Mac`,
        role: `Frank Catton`,
      }, {
        actor: `Brad Pitt`,
        role: `Rusty Ryan`,
      }, {
        actor: `Matt Damon`,
        role: `Linus Caldwell`,
      }, {
        actor: `Elliott Gould`,
        role: `Reuben Tishkoff`,
      }, {
        actor: `Casey Affleck`,
        role: `Virgil Malloy`,
      }, {
        actor: `Scott Caan`,
        role: `Turk Malloy`,
      }, {
        actor: `Eddie Jemison`,
        role: `Livingston Dell`,
      }, {
        actor: `Don Cheadle`,
        role: `Basher Tarr`,
      }, {
        actor: `Shaobo Qin`,
        role: `"The Amazing" Yen`,
      }, {
        actor: `Carl Reiner`,
        role: `Saul Bloom`,
      }, {
        actor: `Julia Roberts`,
        role: `Tess Ocean`,
      },
    ];

    return cast[getHour()];
  };

  const getHour = () => {
    let hour = new Date().getHours();
    hour = (hour > 12) ? hour - 12 : hour;
    return hour;
  };

  const displayCast = cast => {
    const $cast = document.querySelector(`.cast`);
    const $actor = document.createElement(`h2`);
    $actor.textContent = cast.actor;

    const $role = document.createElement(`p`);
    $role.textContent = `as ${cast.role}`;
    $role.classList.add(`alt`);

  };

  const init = () => {

  };

  init();

}

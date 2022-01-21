const sketcher = (() => {
  //EVENT LISTENERS
  rangeInput.addEventListener('input', () => render());
  paintOn.addEventListener('input', () => render());
  clear.addEventListener('click', () => render());
  
  //DOM RENDER
  const render = () => {
    let grids = rangeInput.value
    display.textContent = `${grids} x ${grids}`;

    while (container.firstChild) container.removeChild(container.lastChild);

    for(let i=0;i<(grids*grids);i++){
      let div = container.appendChild(document.createElement('div'));

      div.addEventListener(paintOn.value, () => color(div),true);
      div.addEventListener('click', () => checkEraser(div))
      div.classList.add('grid');
      div.style['width'] = `${100/(grids)}%`;
      div.style['height'] = `${100/(grids)}%`;
    }
  }
  //ADDITIONAL FUNCTIONS
  const color = (grid) => {
    eraser.checked ? null : grid.style['background-color'] = colorSelector.value;
  }

  const checkEraser = (grid) => {
    eraser.checked ? grid.style['background-color'] = 'white' : colorSelector.value
  }
  render();
})();

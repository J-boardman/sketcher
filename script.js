const sketcher = (() => {
  // CACHE DOM
  const gridDimensions = document.querySelector('#gridDimensions');
  const paintStyle = document.querySelector('#paintStyle');
  const clearBtn = document.querySelector('#clear')

  // DOM RENDER
  const render = (clearing) => {
    let grids = gridDimensions.value;
    display.textContent = `${grids} x ${grids}`;
    
    if(clearing){
      while (container.firstChild) container.removeChild(container.lastChild);
      for(let i=0; i<(grids*grids); i++){
        let div = container.appendChild(document.createElement('div'));
        div.setAttribute('data-grid', true);
  
        div.addEventListener(paintStyle.value, color);
        div.addEventListener('click', () => checkEraser(div))
        
        div.style.width = `${100/(grids)}%`;
        div.style.height = `${100/(grids)}%`;
      }
    } else {
      const grids = document.querySelectorAll('[data-grid]');
      grids.forEach(grid => {
        grid.removeEventListener(paintStyle[paintStyle.value == 'click' ? 0 : 1].value, color)
        grid.addEventListener(paintStyle.value, color);
      })
    }
  }
  
  //EVENT LISTENERS
  clearBtn.addEventListener('click', () => render(true));
  gridDimensions.addEventListener('input', () => render(true));
  paintStyle.addEventListener('input', () => render(false))

  //ADDITIONAL FUNCTIONS
  const color = (e) => {
    eraser.checked ? null : e.target.style['background-color'] = colorSelector.value;
  }

  const checkEraser = (grid) => {
    eraser.checked ? grid.style['background-color'] = 'white' : colorSelector.value
  }
  render(true);
})();

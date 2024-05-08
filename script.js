
const container = document.querySelector('.container')
const resetButton = document.querySelector(`button`)


//calculates and returns 3 values representing the respective rgb values between 0 and 256
function createRandomRGB() {
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  return {r, g, b}
}


//creates application structure, formats gridsquares, and launches event listener
function createGrid(amtOfGrids){

  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  //creates rows based on prompt input
  for(let i=0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row')

    // creates grid boxes based on prompt input
    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 600/amtOfGrids
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width= `${widthAndHeight}px`
      gridBox.style.height= `${widthAndHeight}px`

      // stored outside of event listener so color remains the same when opacity increases
      const {r, g, b} = createRandomRGB() 

      //sets background color to randomized RGB on 1st hover and increases opacity on concurrent hovers
      gridBox.addEventListener(`mouseenter`,() => {
        const currentOpacity = Number(gridBox.style.opacity)
        const bgColor = `rgb(${r}, ${g}, ${b})`
        gridBox.style.background = bgColor
        if(currentOpacity < 1){gridBox.style.opacity = currentOpacity + 0.1}
      })

    row.appendChild(gridBox)
    }

  wrapper.appendChild(row)
  }

container.appendChild(wrapper)
}

// runs the primary function in the application with a default of 16x16 grid
createGrid(16)


// receives input from user to determine grid size, prevents a number greater than 100, and "clears" previous grid
resetButton.addEventListener('click', () => {
  let gridSize = Number(prompt("Enter desired number of grid squares for each side."))

  while (gridSize > 100) {
    gridSize = Number(prompt("Please choose a number of 100 or less."))
  }
  const wrapper = document.querySelector(".wrapper")
  wrapper.remove()
  createGrid(gridSize)
})

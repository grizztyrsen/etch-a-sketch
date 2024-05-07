const container = document.querySelector('.container')
const resetButton = document.querySelector(`button`)

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')
  for(let i=0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row')
    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 600/amtOfGrids
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width= `${widthAndHeight}px`
      gridBox.style.height= `${widthAndHeight}px`
      gridBox.addEventListener(`mouseenter`, () => {
        gridBox.style.backgroundColor = `black`
      })
      row.appendChild(gridBox)
    }
    wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}

createGrid()
resetButton.addEventListener('click', () => {
  let userSize = Number(prompt("Enter desired number of grid squares for each side."))

  while (userSize > 100) {
    userSize = Number(prompt("Please choose a number of 100 or less."))
  }
  const wrapper = document.querySelector(".wrapper")
  wrapper.remove()
  createGrid(userSize)
})

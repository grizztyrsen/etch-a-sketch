const cdiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 273; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
  cdiv.appendChild(div);
}
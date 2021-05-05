// const color = document.getElementsByClassName('color');
// const palette = document.getElementById('color-palette');

// for (let index = 0; index < color.length; index += 1) {
//   color[index].addEventListener('click', () => {
//     if (palette.classList.contains('selected')) {
//       palette.classList.remove('selected');
//     } else {
//       palette.classList.add('selected');
//       let selected = document.querySelector('.selected');
//       selected.style.backgroundColor = color[index].style.backgroundColor;
//       console.log('funcionou');
//     }
//   });
// }

function pixelsColumn(pixelsNumber) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < pixelsNumber; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixel');
    pixelBoard.appendChild(createPixel);
  }
}

// function pixelsLine() {
//   const pixelLine = pixelsColumn(5);

// }

pixelsColumn(25);

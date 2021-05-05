// adicionar o pixel board
function pixelsColumn(pixelsNumber) {
  const pixelBoard = document.getElementById('pixel-board');
  // let pixelBoardWidth = pixelsNumber * 42;
  for (let index = 0; index < pixelsNumber; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixel');
    pixelBoard.appendChild(createPixel);
  }
}

pixelsColumn(25);

// adidionar a seleção de cores
const color = document.getElementsByClassName('color');
const palette = document.getElementById('color-palette');

palette.addEventListener('click', (event) => {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
});

// for (let index = 0; index < color.length; index += 1) {
//   color[index].addEventListener('click', () => {
//     if (color[index].classList.contains('selected')) {
//       color[index].classList.remove('selected');
//     } else {
//       color[index].classList.add('selected');
//       const selected = document.querySelector('.selected');
//       selected.style.backgroundColor = color[index].style.backgroundColor;
//       console.log('funcionou');
//     }
//   });
// }

// colorir pixels

// for (let index = 0; index < color)

// let colorSelected = document.querySelector('.selected');
// const selected = document.querySelector('.selected');
// selected.style.backgroundColor = color[0];
const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  let colorSelected = color[0].style.backgroundColor;
  pixels[index].addEventListener('click', () => {
    pixels[index].style.backgroundColor = colorSelected;
  });
}

// limpar todo o quadro

const clearBtn = document.getElementsByTagName('button')[0];

clearBtn.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

const title = document.querySelector('.title')
const text = `HAPPY|20TH OF US`.split('|')

title.style.display = 'flex'
title.style.flexDirection = 'column'
title.style.alignItems = 'center'
title.style.gap = '1rem'

for (let i = 0; i < text.length; i++) {
  const line = text[i];
  const lineElement = document.createElement('div');
  lineElement.style.display = 'flex';
  lineElement.style.justifyContent = 'center';
  lineElement.style.gap = '0.5rem';

  for (let j = 0; j < line.length; j++) {
    if (line[j] !== ' ') {
      lineElement.innerHTML += `<span style="--delay: ${Math.random() * 3}s">${line[j]}</span>`
    } else {
      lineElement.innerHTML += `<span style='width: 1rem'></span>`
    }
  }
  title.appendChild(lineElement)
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
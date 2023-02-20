function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const widgetRef = document.querySelector('.widget');
const widgetColorRef = widgetRef.querySelector('.color');
const widgetChangeColorRef = widgetRef.querySelector('.change-color');

const changeColor = () => {
  const newColor = getRandomHexColor();
 
  bodyRef.style.cssText = 'background-color:${newColor};';
  widgetColorRef.textContent = newColor;
  bodyRef.style.backgroundColor=getRandomHexColor();
};
widgetChangeColorRef.addEventListener('click', changeColor);

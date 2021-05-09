/*1.1 Создать кнопку, у которой в атрибуте data-counter записано число. 
При нажатии на кнопку число должно уменьшаться. 
Когда счетчик доходит до 0, обработчик события должен удалиться. 
Значение счетчика должно отображаться в innerText кнопки.*/

const button1 = document.getElementById("btn-count");

const buttonHandler = ({ target, target: { dataset } }) => {
  if (dataset.counter <= 1) {
    target.removeEventListener("click", buttonHandler);
  }
  dataset.counter--;
  target.innerText = dataset.counter;
};

button1.addEventListener("click", buttonHandler);

/*1.2 Написать функцию getRandomColor, которая будет рандомно генерировать строку с rgb цветом 
(Math.Random от 0 до 255 для каждого цвета). При каждом нажатии на кнопку цвет фона в ней должен меняться рандомно.*/

const button2 = document.querySelector(".btn2");

button2.addEventListener("click", ({ target: { parentNode, style } }) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomColor() {
    return `rgb(
      ${getRandomIntInclusive(0, 255)},
      ${getRandomIntInclusive(0,255)}, 
      ${getRandomIntInclusive(0, 255)}
      )`;
  }
  parentNode.style.background = getRandomColor();
  style.background = getRandomColor();
});

/*2. Создайте кнопку, которая при нажатии будет отображать в теге img рандомную картинку.
Получайте рандомную картинку с помощью Lorem Picsum (ссылку прикрепил). 
Обратите внимание на раздел Advanced Usage на сайте. 
(Там показано, как можно получить несколько различных изображений по одной ссылке)*/

const IMG_LINK = "https://picsum.photos/200/300?random=";
const button3 = document.querySelector(".btn3");
const img = document.querySelector(".img");
button3.addEventListener("click", getImageLink(img));

function getImageLink(elem, newLink) {
  let count = 1;
  let link = newLink || IMG_LINK;
  return () => {
    elem.src = link + count++;
  };
}

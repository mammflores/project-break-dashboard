const images = [
  "img\1.jpg"
  "img\2.jpg"
  "img\3.jpg"
  "img/4.jpeg"
  "img\5.jpg"
];
let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 10000);

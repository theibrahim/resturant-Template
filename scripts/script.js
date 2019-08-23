var i = 0;
var image = [
  'img/cheese-pizza.jpg',
  'img/shawarma.jpg',
  'img/beef.jpg'
];
function slideshow() {
  document.querySelector('.backgroundimg').style.backgroundImage =
    'url(' + image[i] + ')';
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
  console.log(i);
  setTimeout('slideshow()', 5000);
}
// document.querySelector('.backgroundimg').style.backgroundImage ="url('../img/pizza.jpg')";
window.onload = slideshow();

// Objects
var fastFood = {
  img: [
    '../img/barbq.jpg',
    '../img/burger.jpg',
    '../img/logo.png',
    '../img/salad.jpg'
  ],
  name: ['burger', 'broast', 'roll paratha', 'pizza'],
  price: ['200', '240', '100', '550']
};
var barbq = {
  img: [
    'img/list/barqb-1.jpg',
    'img/list/barbq-2.jpg',
    'img/list/barbq-3.jpg',
    'img/list/barbq-4.jpg'
  ],
  name: ['tikka', 'malai boti', 'reshmi kabab', 'paratha'],
  price: ['200', '100', '150', '50']
};
var italian = {
  img: [
    'img/list/italy-1.jpg',
    'img/list/italy-2.jpg',
    'img/list/italy-3.jpg',
    'img/list/italy-4.jpg'
  ],
  name: ['pizza', 'Bottarga', 'Lasagna', 'Ribollita'],
  price: ['4599', '220', '1340', '660']
};
var icecream = {
  img: [
    'img/list/ice-1.jpg',
    'img/list/ice-2.jpg',
    'img/list/ice-3.jpg',
    'img/list/ice-4.jpg'
  ],
  name: ['pista', 'kulfa', 'strawberry', 'chocholate'],
  price: ['220', '200', '190', '180']
};

var juices = {
  img: [
    'img/list/juice-1.jpg',
    'img/list/juice-2.jpg',
    'img/list/juice-3.jpg',
    'img/list/juice-4.jpg'
  ],
  name: ['Lemon', 'Watermelon', 'Orange', 'Blueberry'],
  price: ['100', '100', '100', '100']
};
var salads = {
  img: [
    'img/list/salad-1.jpg',
    'img/list/salad-2.jpg',
    'img/list/salad-3.jpg',
    'img/list/salad-4.jpg'
  ],
  name: ['rishian salad', 'greek salad', 'green salad', 'pasta salad'],
  price: ['150', '130', '120', '180']
};

function item(foodObject) {
  var foodObject = foodObject || {};
  document.querySelector('img.two').src = foodObject.img[1];
  document.querySelector('img.three').src = foodObject.img[2];
  document.querySelector('img.four').src = foodObject.img[3];
  document.querySelector('img.fifth').src = foodObject.img[0];
  document.querySelector('h3.two').innerHTML = foodObject.name[1];
  document.querySelector('h3.three').innerHTML = foodObject.name[2];
  document.querySelector('h3.four').innerHTML = foodObject.name[3];
  document.querySelector('h3.fifth').innerHTML = foodObject.name[0];
  document.querySelector('.price-two').innerHTML = foodObject.price[1];
  document.querySelector('.price-three').innerHTML = foodObject.price[2];
  document.querySelector('.price-four').innerHTML = foodObject.price[3];
  document.querySelector('.price-fifth').innerHTML = foodObject.price[0];
}

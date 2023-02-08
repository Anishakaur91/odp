// write a constructor function,that accepts 2 parameteres:
//name
//src
//this function should present a product,and also have 2 other properties:
//clicks
//views
//that starts at 0
//lastly the constructor shaould have a propert which is an Array
//each time a new instance of the product is created,it should push itself into the Array
//this represernts the new product you create everytime
//push is a built in array method

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

// new Product("camera", "images/camera.jpg");
// new Product("mug", "images/mug.jpeg");

//using this Array,create a new product for each item
//the name of the product should be the item in the Array
//the src of the product should be like so
//images/PRODUCTNAME.jpg
//
const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "sweep",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

for (i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `Images/${productNames[i]}.jpeg`);
}

// let myname = "Anisha";
// let sentence = "This sentence tells us your name" + myname;//concatenation
// let sentence2 = `this sentence tells us your name is ${myname}`;//template literals

//use google to help you
//write a function that returns a randon number
//the number will represent an index value for one of the items in the Product.allProducts array

function RandomProductIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

//write a function to render our images
//have the images to be chosen randomly from our Product.allProducts array
//hint, use randomProductIndex() and bracket notation to access the item in the array

function renderImages() {
  //get three random indexes for my product array
  let productIdx1 = RandomProductIndex();
  let productIdx2 = RandomProductIndex();
  let productIdx3 = RandomProductIndex();

  //make sure none of them are the same
  while (
    productIdx1 === productIdx2 ||
    productIdx1 === productIdx3 ||
    productIdx2 === productIdx3
  ) {
    productIdx2 = RandomProductIndex();
    productIdx3 = RandomProductIndex();
  }

  //retrieve our image elements
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");

  //change the src attribute of img1,img2 & img3 to be the src from our random products
  console.log(productIdx1);
  img1.src = Product.allProducts[productIdx1].src;
  img2.src = Product.allProducts[productIdx2].src;
  img3.src = Product.allProducts[productIdx3].src;

  img1.alt = Product.allProducts[productIdx1].name;
  img2.alt = Product.allProducts[productIdx2].name;
  img3.alt = Product.allProducts[productIdx3].name;
}

renderImages();

function handleClick(event) {
  //increase the clicks on the clicked product object (for loop and clicks++ check the event.target.alt)
  //make sure the user is clicking on one of the images
  if (event.target === imgContainer) {
    alert("Please click on the images,not inbetween the images");
    return; //this return stops the function
  }

  //check every single products "name" against the alt tag of the target and increase the clicks

  for (let i = 0; i < Product.allProducts.length; i++) {
    if (event.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].clicks++;
      break; //stops the loop beacuse we found our product
    }
  }
  //get three new images
  renderImages();
}

const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);

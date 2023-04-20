var display = false;
var display2 = false;
// all element
const popular_product = document.querySelector(".Popular_product");
const Art_collection = document.querySelector(".Art_collection");
const Diary_collection = document.querySelector(".Diary_collection");
const contact = document.querySelector(".contact");
const home = document.querySelector(".home");
const cartbtn = document.querySelector(".cart");
const cart = document.querySelector(".Cart");
const shop = document.querySelector(".Shop");
const collection = document.getElementsByTagName("li");
const sub = document.querySelector(".sub");
const plus = document.querySelector(".plus");
const Quantity = document.querySelector(".display");
const elemArray = [popular_product, Art_collection, Diary_collection];
const total = document.querySelector(".Total");
const Price = document.querySelector(".price");

var index = 0;
Quantity.innerText = index;
total.innerText = `$${index * JSON.parse(Price.innerText)}`;
const scrollValArr = [
  { name: "home", val: 0 },
  { name: "product", val: 650 },
  { name: "about", val: 1000 },
  { name: "service", val: 2500 },
];
sub.addEventListener("click", () => {
  index > 0 ? (index -= 1) : null;
  Quantity.innerText = index;
  total.innerText = `$${index * JSON.parse(Price.innerText)}`;
});
plus.addEventListener("click", () => {
  index >= 0 ? (index += 1) : null;
  Quantity.innerText = index;
  total.innerText = `$${index * JSON.parse(Price.innerText)}`;
});
collection[0].addEventListener("click", () => {
  elemArray.forEach((e) => {
    e.classList.remove("hidden");
  });
  if (!display2) {
    cart.classList.remove("hidden");
    cart.classList.add("flex");
  } else {
    cart.classList.remove("flex");
    cart.classList.add("hidden");
  }
  !display2 ? (display2 = true) : (display2 = false);
});
cartbtn.addEventListener(
  "click",
  () => {
    smooth_Scroll(-1, 590);

    if (!display2) {
      cart.classList.remove("hidden");
      cart.classList.add("flex");
    } else {
      cart.classList.remove("flex");
      cart.classList.add("hidden");
    }
    elemArray.forEach((e) => {
      e.classList.add("hidden");
    });
    !display2 ? (display2 = true) : (display2 = false);
  },
  true
);
shop.addEventListener("click", () => {
  smooth_Scroll(-1, 1200);
});
Array.from(collection).forEach((element, index) => {
  element.addEventListener("click", (e) => {
    index < 4 ? smooth_Scroll(index) : null;
  });
});

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const scrollDiv = document.querySelector(".row_container");
var val = 0;

const elem = document.querySelector(".navElem");
const ToggleImage = document.querySelector("#ToggleMenu");
const line = document.querySelector(".toogle");

line.addEventListener(
  "click",
  () => {
    console.log("click");
    !display ? elem.classList.remove("hidden") : elem.classList.add("hidden");
    !display
      ? (ToggleImage.src = `./images/close.svg`)
      : (ToggleImage.src = `./images/menu.svg`);
    !display ? (display = true) : (display = false);
  },
  true
);
//scroll cards....
Scroll_x(previous, -500);
Scroll_x(next, 500);

function Scroll_x(element, value) {
  element.addEventListener("click", () => {
    val += value;
    scrollDiv.scrollTo({
      left: val /*top value */,
      behavior: "smooth",
    });
  });
}

function smooth_Scroll(index, val) {
  index >= 0
    ? window.scrollTo({
        top: scrollValArr[index].val /*top value */,
        behavior: "smooth",
      })
    : window.scrollTo({
        top: val /*top value */,
        behavior: "smooth",
      });
}

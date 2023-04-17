var display = false;
// all element
const popular_product = document.querySelector(".Popular_product");
const Art_collection = document.querySelector(".Art_collection");
const contact = document.querySelector(".contact");
const home = document.querySelector(".home");
const collection = document.getElementsByTagName("li");
Array.from(collection).forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
  });
});

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const scrollDiv = document.querySelector(".row_container");
var val = 0;

const elem = document.querySelector(".navElem");
const ToggleImage = document.querySelector(".ToggleMenu");
const line = document.querySelector(".toogle");

line.addEventListener(
  "click",
  () => {
    console.log("click");
    !display ? elem.classList.remove("hidden") : elem.classList.add("hidden");
    !display ? (ToggleImage.src = "close.svg") : (ToggleImage.src = "menu.svg");
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

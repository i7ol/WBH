const sliderItem = document.querySelectorAll(".slider-item");
console.log(sliderItem);
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
const arrowRight = document.querySelector(".ri-arrow-right-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-fill");
let i = 0;
arrowRight.addEventListener("click", () => {
  if (i < sliderItem.length - 1) {
    i++;
    sliderMove(i);
  } else {
    return false;
  }
});

arrowLeft.addEventListener("click", () => {
  if (i < 0) {
    return false;
  } else {
    i--;
    sliderMove(i);
  }
});
function autoSlider() {
  if (i < sliderItem.length) {
    i++;
    sliderMove(i);
  } else {
    i = 0;
    sliderMove(i);
  }
}
function sliderMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
setInterval(autoSlider(), 1000);
//Menubar responsive
const Menubar = document.querySelector(".header-bar-icon");
const headerNav = document.querySelector(".header-nav");
Menubar.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

//sticky header
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    document.querySelector("#header").classList.add("active");
  } else {
    document.querySelector("#header").classList.remove("active");
  }
});

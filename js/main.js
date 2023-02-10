// Button (Scroll to Up)
let btnUp = document.querySelector(".btn-up");
window.onscroll = () => {
  if(window.scrollY >= 500) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};

btnUp.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
};
// Button (Scroll to Up)

// Sliders
let sliderContainer = document.querySelectorAll(".landing .slider");
console.log(sliderContainer);
let slideLength = sliderContainer.length;
let currentSlide = 1;

let nextSlideBtn = document.querySelector(".nextslide");
let prevSlideBtn = document.querySelector(".prevslide");

let slideList = document.querySelectorAll(".indecator li");
for(let i = 0;i < sliderContainer.length;i++) {
  slideList[i].setAttribute("index", i);
}

for(let i = 0;i < sliderContainer.length;i++) {
  sliderContainer[i].setAttribute("index", i);
}

check();

nextSlideBtn.addEventListener("click", prevSlide);
prevSlideBtn.addEventListener("click", nextSlide);
function nextSlide() {
  if(nextSlideBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    check();
  }
}

function prevSlide() {
  if(prevSlideBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    check();
  }
}

function check() {
  removeActive();
  sliderContainer[currentSlide - 1].classList.add("active");
  slideList[currentSlide - 1].classList.add("active");
  if(currentSlide == 1) {
    prevSlideBtn.classList.add("disabled");
  } else {
    prevSlideBtn.classList.remove("disabled");
  }
  if(currentSlide == slideLength) {
    nextSlideBtn.classList.add("disabled");
  } else {
    nextSlideBtn.classList.remove("disabled");
  }
}

function removeActive() {
  sliderContainer.forEach((slider) => {
    slider.classList.remove("active");
  });
  slideList.forEach((li) => {
    li.classList.remove("active");
  });
}
// Sliders
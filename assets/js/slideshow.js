// slide-show selection
var sliders = document.getElementsByClassName('slide-show');
console.log(sliders);
// pagination min and max value declaration
var pagination_min_val = 1;
var pagination_max_val = sliders.length;
// pagination min and max value DOM selections
var min_page_val = document.getElementById('min_page');
var max_page_val = document.getElementById('max_page');
// min and max value assignment to the DOM selections
min_page_val.innerHTML = pagination_min_val;
max_page_val.innerHTML = pagination_max_val;
// arrow selectors
var arrow_left = document.getElementsByClassName('arrow-left')[0];
var arrow_right = document.getElementsByClassName('arrow-right')[0];

// left arrow selector click handler event
arrow_left.addEventListener('click', function () {
  if (pagination_min_val > 1) {
    pagination_min_val--;
    min_page_val.innerHTML = pagination_min_val;
    updateArrowState(pagination_min_val);
  }
});
// right arrow selector click handler event
arrow_right.addEventListener('click', function () {
  if (pagination_min_val < pagination_max_val) {
    pagination_min_val++;
    min_page_val.innerHTML = pagination_min_val;
    updateArrowState(pagination_min_val);
  }
});

function updateArrowState(val) {
  if (val === 1) {
    arrow_left.classList.add("disable");
  } else {
    arrow_left.classList.remove("disable")
  }

  if (val === pagination_max_val) {
    arrow_right.classList.add("disable");
  } else {
    arrow_right.classList.remove("disable");
  }

  updateCarousel(val);
}

function updateCarousel(val) {
  // val - 1 since the index of slide_show starts from 0
  var currentSlide = document.getElementsByClassName("active")[0];
  currentSlide.classList.remove("active");
  currentSlide.classList.add("inactive");
  // currentSlide[0].classList.remove("active");
  // currentSlide[0].classList.add("inactive");
  console.log(sliders[val - 1]);
  sliders[val - 1].classList.remove("inactive");
  sliders[val - 1].classList.add("active");
  // sliders[val - 1].classList.add("slidy");
}

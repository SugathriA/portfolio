(function(){
  // slide-show selection
  var sliders = document.getElementsByClassName("slide-show");
  var circle_container = document.getElementById("circle_container");

  console.log(sliders);

  for (var i = 0; i < sliders.length; i++) {
    var node = document.createElement("div");
    node.className = "p_circle";
    node.id = "c_" + i;
    node.number = i;
    if(i===0) node.classList.add("active");
    circle_container.appendChild(node);
  }

  var circles = document.getElementsByClassName("p_circle");

  document.addEventListener("click", function(e) {
    if (e.target && e.target.className == "p_circle") {
      computeScrollDirection(e.target.number);
    }
  });

  function computeScrollDirection(new_val) {
    var currentSlide = document.getElementsByClassName("slide-show active")[0];
    var currentActiveCircle = null;

    var old_val = currentSlide.id;

    if (new_val > old_val) {
      // slide right
      currentActiveCircle = document.getElementsByClassName("p_circle active")[0];
      updateCarousel(currentSlide, currentActiveCircle, new_val, "right");
    }

    if (new_val < old_val) {
      // slide left
      currentActiveCircle = document.getElementsByClassName("p_circle active")[0];
      updateCarousel(currentSlide, currentActiveCircle, new_val, "left");
    }
  }

  function updateCarousel(currentSlide, currentActiveCircle, val, direction) {
    var circles = document.getElementsByClassName("p_circle");
    // remove active class for current active slide
    // remove active class for circle
    // clear slide direction class
    currentSlide.classList.remove("active");
    currentSlide.classList.remove("slide-right", "slide-left");
    currentSlide.classList.add("inactive");
    currentActiveCircle.classList.remove("active");

    // add active class for the new slide
    // add active class for the new circle 
    // add slide direction class  
    sliders[val].classList.remove("inactive");
    circles[val].classList.remove("inactive");
    circles[val].classList.add("active");
    direction === "right"
      ? sliders[val].classList.add("active", "slide-right")
      : sliders[val].classList.add("active", "slide-left");
  }
}());
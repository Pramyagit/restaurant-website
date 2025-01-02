document.documentElement.style.scrollBehavior = "smooth";
function Slider() {
  const carouselSlides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  const dotsSlide = document.querySelector(".dots-container");
  let currentSlide = 0;

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
    carouselSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
    currentSlide++;
    if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  btnPrev.addEventListener("click", function () {
    currentSlide--;
    if (0 >= currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activeDot(slide);
    }
  });
}
Slider();

// food items
const item = document.querySelector(".food-menu-container");
async function fetchData() {
  const res = await fetch("./data.json");
  const datas = await res.json();
  console.log(datas);
  datas.forEach((post) => {
    // console.log(post.picture);
    const contain = `<div class="food-menu-item">
    <div class="food-img d-block max-h-100">
    <img class=" w-100 h-100 object-position-center object-cover " src=${post.picture} alt="" />
    </div>
    <div class="food-description">
    <h2 class="food-titile text-red-500 sm:text-2xl md:text-xl">${post.item}</h2>
    <p>
    ${post.description}
    </p>
    <p class="food-price">Price: &#8377; ${post.price}</p>
    
    </div>`;
    item.insertAdjacentHTML("beforeend", contain);
  });
}
fetchData();

// testimonial

const testimonial = document.querySelector(".testimonial-container");
async function fetchtest() {
  const res = await fetch("./testimonial.json");
  const data = await res.json();
  // console.log(datas);
  let tests = data.length;
  console.log(tests);
  data.forEach((post) => {
    const container = `<div class="testimonial-box">
            <div class="customer-detail">
              <div class="customer-photo">
                <img src=${post.picture} alt="" />
                <p class="customer-name">${post.name}</p>
              </div>
            </div>
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
             ${post.opinion}.
            </p>
          </div>`;
    testimonial.insertAdjacentHTML("beforeend", container);
  });
  // console.log(post);
}
fetchtest();

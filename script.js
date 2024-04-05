const searchForm = document.querySelector(".search-form");/* search forma ulaştık */
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

/* buttons*/
const searchBtn = document.querySelector("#search-btn");/* search butona ulaştık */
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");/*search butona tıklayınca açılır*/ 
  document.addEventListener("click", function (e) {
    if (/*Tıkladığımızı bulmak için composedpath*/
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)/*butona sforma tıklayıncakalır */
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
 
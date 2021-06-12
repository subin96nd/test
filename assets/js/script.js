$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 3,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

// navigation

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-mobile");
const navOverlay = document.querySelector(".nav-overlay");
const closeNav = document.querySelector(".close");

navToggle.addEventListener("click", () => {
  navShow();
});

closeNav.addEventListener("click", () => {
  hideNav();
});

navOverlay.addEventListener("click", () => {
  hideNav();
});

function navShow() {
  navOverlay.classList.add("open");
  nav.classList.add("open");
  navOverlay.style.transition = "all 0.5s ease";
  nav.style.transition = "all 0.3s ease 0.5s";
}

function hideNav() {
  navOverlay.classList.remove("open");
  nav.classList.remove("open");
  navOverlay.style.transition = "all 0.5s ease";
  nav.style.transition = "all 0.3s ease 0.5s";
}

// slide

// call-api
const teaAPI = "https://food-server-db.herokuapp.com/tea";
fetch(teaAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (teas) {
    var teaHtmls = teas.map(function (tea) {
      return `
      <div class="product-box" id-product="${tea.id}">
      <!-- img -->
      <div class="product-img">
          <!-- add cart -->
          <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${tea.id},${tea.price})">
              <i class="fas fa-shopping-cart"></i>
          </a>
          <a href="javascript: void (0)" class="add-view">
              <i class="fas fa-eye"></i>
          </a>
          <img src="${tea.url}" alt="">
      </div>
      <div class="product-details">
          <a href="javascript: void (0)" class="p-name">${tea.name}</a>
          <p class="product-price">${tea.price}.000₫</p>
      </div>
  </div>
      `;
    });
    document.getElementById("tea").innerHTML = teaHtmls.join("");
  });

fetch(teaAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (cakes) {
    let htmls = cakes.map(function (cake, index) {
      if (index >= 0 && index < 6) {
        return `
        <div class="swiper-slide" id-product="${cake.id}">
          <div class="product-box">
              <!-- img -->
              <div class="product-img">
                  <!-- add cart -->
                  <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${cake.id},${cake.price})">
                      <i class="fas fa-shopping-cart"></i>
                  </a>
                  <a href="javascript: void (0)" class="add-view">
                      <i class="fas fa-eye"></i>
                  </a>
                  <img src="${cake.url}" alt="">
              </div>
              <div class="product-details">
                  <a href="javascript: void (0)" class="p-name">${cake.name}</a>
                  <p class="product-price">${cake.price}.000₫</p>
              </div>
          </div>
      </div>
        `;
      }
    });
    document.querySelector(".swiper-wrapper").innerHTML = htmls.join("");

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

const cakeAPI = "https://food-server-db.herokuapp.com/cake";
fetch(cakeAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (cakes) {
    var cakeHtmls = cakes.map(function (cake) {
      return `
        <div class="product-box" id-product="${cake.id}">
        <!-- img -->
        <div class="product-img">
            <!-- add cart -->
            <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${cake.id},${cake.price})">
                <i class="fas fa-shopping-cart"></i>
            </a>
            <a href="javascript: void (0)" class="add-view">
                <i class="fas fa-eye"></i>
            </a>
            <img src="${cake.url}" alt="">
        </div>
        <div class="product-details">
            <a href="javascript: void (0)" class="p-name">${cake.name}</a>
            <p class="product-price">${cake.price}.000₫</p>
        </div>
    </div>
        `;
    });
    document.getElementById("cake").innerHTML = cakeHtmls.join("");
  });

const creamAPI = "https://food-server-db.herokuapp.com/cream";
fetch(creamAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (creams) {
    var creamHtmls = creams.map(function (cream) {
      return `
      <div class="product-box" id-product="${cream.id}">
      <!-- img -->
      <div class="product-img">
          <!-- add cart -->
          <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${cream.id},${cream.price})">
              <i class="fas fa-shopping-cart"></i>
          </a>
          <a href="javascript: void (0)" class="add-view">
              <i class="fas fa-eye"></i>
          </a>
          <img src="${cream.url}" alt="">
      </div>
      <div class="product-details">
          <a href="javascript: void (0)" class="p-name">${cream.name}</a>
          <p class="product-price">${cream.price}.000₫</p>
      </div>
  </div>
      `;
    });
    document.getElementById("cream").innerHTML = creamHtmls.join("");
  });

const coffeAPI = "https://food-server-db.herokuapp.com/coffe";
fetch(coffeAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (coffes) {
    var coffeHtmls = coffes.map(function (coffe) {
      return `
        <div class="product-box" id-product="${coffe.id}">
        <!-- img -->
        <div class="product-img">
            <!-- add cart -->
            <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${coffe.id},${coffe.price})">
                <i class="fas fa-shopping-cart"></i>
            </a>
            <a href="javascript: void (0)" class="add-view">
                <i class="fas fa-eye"></i>
            </a>
            <img src="${coffe.url}" alt="">
        </div>
        <div class="product-details">
            <a href="javascript: void (0)" class="p-name">${coffe.name}</a>
            <p class="product-price">${coffe.price}.000₫</p>
        </div>
    </div>
        `;
    });
    document.getElementById("coffe").innerHTML = coffeHtmls.join("");
  });

const drinkAPI = "https://food-server-db.herokuapp.com/drink";
fetch(drinkAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (drinks) {
    const drinkHtmls = drinks.map(function (drink) {
      return `
          <div class="product-box" id-product="${drink.id}">
            <!-- img -->
            <div class="product-img">
                <!-- add cart -->
                <a href="javascript: void (0)" class="add-cart" onclick="addToCart(${drink.id},${drinks.price})">
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="javascript: void (0)" class="add-view">
                    <i class="fas fa-eye"></i>
                </a>
                <img src="${drink.url}" alt="">
            </div>
            <div class="product-details">
                <a href="javascript: void (0)" class="p-name">${drink.name}</a>
                <p class="product-price">${drink.price}.000₫</p>
            </div>
        </div>
          `;
    });
    document.getElementById("drink").innerHTML = drinkHtmls.join("");
  });

// tab-link

function changProductList(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = "#fff";
  }
  element.style.background = "var(--main-color)";

  document.getElementById(type).style.display = "flex";
  switch (type) {
    case "cake":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "tea":
      document.getElementById("cake").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "cream":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "coffe":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "drink":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      break;
  }
}

let mobileItem = document.querySelector('select[name="mobile-tab"]');
mobileItem.addEventListener("change", function (e) {
  document.getElementById(e.target.value).style.display = "flex";
  switch (e.target.value) {
    case "cake":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "tea":
      document.getElementById("cake").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "cream":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "coffe":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("cream").style.display = "none";
      document.getElementById("drink").style.display = "none";
      break;
    case "drink":
      document.getElementById("tea").style.display = "none";
      document.getElementById("cake").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      document.getElementById("coffe").style.display = "none";
      break;
  }
});

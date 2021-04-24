var openBasketButton = document.getElementById("open-basket-button");
var productContainer = document.getElementById("container");
var basketCount = document.getElementById("basket-count");
var totalpriceH1 = document.getElementById("total-price");
var basketProducts = [];
var productsGlobal = [];
var productsGlobalForSearch = [];
var productsHtml = "";
var searchInput = document.getElementById("search-input");
var modal = document.getElementById("modal");
function homePage() {
  window.location.href = "home.html";
}
function loadProducts() {
  var products = localStorage.getItem("products");
  products = JSON.parse(products);
  productsGlobal = products.slice();
  productsGlobalForSearch = products.slice();
  var initialProducts = [];
  for (var i = 0; i < 20; i++) {
    initialProducts.push(productsGlobalForSearch[i]);
  }
  addProductsToPage(initialProducts);
}

function addProductsToPage(products) {
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    productsHtml +=
      "<div class='product-card'><div class='product-card-item'><div class='photo-div'>" +
      "<img class='book-photo' src='" +
      p.imagePath +
      "'></div><div class='text-div'><p class='price-text'>" +
      p.price +
      " AZN</p><p class='name-text'>" +
      p.name +
      "</p><p class='desc-text'>" +
      p.description +
      "</p>" +
      "<div style='text-align:center;'><button class='btn btn-primary' onclick='onAddToBasket(" +
      p.id +
      ")'>Səbətə at</button></div></div></div></div>";
  }
  productContainer.innerHTML = productsHtml;
}
loadProducts();

function onAddToBasket(productId) {
  var localProduct = null;
  for (var i = 0; i < productsGlobal.length; i++) {
    if (productId === productsGlobal[i].id) {
      localProduct = productsGlobal[i];
      break;
    }
  }
  var productExists = false;
  for (var i = 0; i < basketProducts.length; i++) {
    if (productId === basketProducts[i].product.id) {
      basketProducts[i].count++;
      productExists = true;
      break;
    }
  }
  if (productExists) {
  } else {
    basketProducts.push({ count: 1, product: localProduct });
  }
  addToBasketAction();
  console.log(basketProducts);
  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
}
function addToBasketAction() {
  openBasketButton.style.display = "none";
  setTimeout(function () {
    openBasketButton.style.display = "block";
    basketCount.innerHTML = basketProducts.length;
  }, 200);
}

var begin = 0;
var length = 20;

function loadNextProducts() {
  // 1000
  begin += 20;
  if (begin + length > productsGlobalForSearch.length) {
    console.log("asdfg");

    var initialProducts = [];
    for (var i = begin; i < productsGlobalForSearch.length; i++) {
      initialProducts.push(productsGlobalForSearch[i]);
    }
    addProductsToPage(initialProducts);
  } else {
    var initialProducts = [];
    for (var i = begin; i < begin + length; i++) {
      initialProducts.push(productsGlobalForSearch[i]);
    }
    addProductsToPage(initialProducts);
  }
}

var counter = 0;
var allowScroll = true;
window.addEventListener("scroll", function () {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;
  const clientHeight = document.documentElement.clientHeight;
  if (allowScroll) {
    if (distanceToBottom < clientHeight + 100) {
      allowScroll = false;
      setTimeout(function () {
        loadNextProducts();
        allowScroll = true;
      }, 1000);
    }
  }

  //counter++;
  //console.log('scroll = '+counter);
  //console.log('height = '+distanceToBottom+', '+clientHeight);
});

function searchProducts(searchInputValue) {
  productsHtml = "";
  begin = 0;
  var productsLocal = productsGlobal.slice();
  var productsLocalFinded = [];
  for (var i = 0; i < productsLocal.length; i++) {
    var p = productsLocal[i];
    if (p.name.includes(searchInputValue)) {
      productsLocalFinded.push(p);
    }
  }

  productsGlobalForSearch = productsLocalFinded.slice();

  var initialProducts = [];
  if (productsGlobalForSearch.length < 20) {
    initialProducts = productsGlobalForSearch;
  } else {
    for (var i = 0; i < 20; i++) {
      initialProducts.push(productsGlobalForSearch[i]);
    }
  }
 // document.getElementById("search-input").value = "";
  //document.getElementById("search-input").placeholder = "Axtarış...";
  //document.getElementById("search-input").placeholder = "Axtarılır...";
  productContainer.innerHTML = "<div id='search-message'><div class='spinner-border text-center'></div></div>";
  setTimeout(function () {
    addProductsToPage(initialProducts);
    console.log(
      "axtarisdan tapilanlarin sayi = " + productsGlobalForSearch.length
    );

    //document.getElementById("search-input").placeholder = "Axtarış... ";
  }, 1000);
  
}

var basketModal = document.getElementById("basket-modal");
var modalCloseButton = document.getElementById("modal-close-button");
var basketProductsTableBody = document.getElementById(
  "basket-products-table-body"
);

modalCloseButton.addEventListener("click", function () {
  basketModal.style.display = "none";
});

function onOpenBasket() {
  if (basketProducts.length == 0) {
    $("#modal").fadeIn(650);

    $("#modal").fadeOut(2000);
  } else {
    basketModal.style.display = "block";
    refreshProductsBasket();
  }
}

var basketProductsString = localStorage.getItem("basketProducts");
if (basketProductsString == null) {
  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
} else {
  basketProducts = JSON.parse(basketProductsString);
}
addToBasketAction();
function refreshProductsBasket() {
  basketProductsTableBody.innerHTML = "";
  basketProductsTableBodyHtml = "";
  for (let index = 0; index < basketProducts.length; index++) {
    const b = basketProducts[index];
    basketProductsTableBodyHtml += "<tr><td>" + b.product.id;
    basketProductsTableBodyHtml +=
      '</td><td><img class="basket-product-image" src="' +
      b.product.imagePath +
      '"/>';
    basketProductsTableBodyHtml += "</td><td>" + b.product.name;
    basketProductsTableBodyHtml += "</td><td>" + b.product.price;
    basketProductsTableBodyHtml +=
      ' AZN</td><td><input min="1" max="10000" type="number" value="' +
      b.count +
      '" ' +
      ' onchange="productCountChanged(this,' +
      b.product.id +
      ')" onkeypress="checkCount(event)" />';
    basketProductsTableBodyHtml +=
      '</td><td id="product-total-price-' +
      b.product.id +
      '">' +
      b.product.price * b.count;
    basketProductsTableBodyHtml +=
      ' AZN</td><td><button onclick="deleteBasketProduct(' +
      b.product.id +
      ')" class="btn btn-danger">Sil</button></td><tr>';
  }
  basketProductsTableBody.innerHTML = basketProductsTableBodyHtml;
  totalpricef();
}

function checkCount(event) {
  var code = event.charCode;
  if (code >= 48 && code <= 57) {
  } else {
    event.returnValue = false;
  }

  if (Number(event.target.value + "" + event.key) > 10000) {
    event.target.value = "1";
    event.returnValue = false;
  }
}

function productCountChanged(countInput, productId) {
  if (countInput.value == "" || countInput.value == "0") {
    countInput.value = "1";
  }

  for (let index = 0; index < basketProducts.length; index++) {
    const b = basketProducts[index];
    if (b.product.id === productId) {
      b.count = Number(countInput.value);
      document.getElementById("product-total-price-" + b.product.id).innerHTML =
        "" + b.count * b.product.price + " AZN";
      break;
    }
  }

  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  totalpricef();
}

function deleteBasketProduct(productId) {
  for (let index = 0; index < basketProducts.length; index++) {
    const b = basketProducts[index];
    if (b.product.id === productId) {
      basketProducts.splice(index, 1);
      break;
    }
  }

  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  refreshProductsBasket();
  addToBasketAction();
  if (basketProducts.length === 0) {
    basketModal.style.display = "none";
  }
}

function totalpricef() {
  var totalprice = 0;
  for (let index = 0; index < basketProducts.length; index++) {
    const b = basketProducts[index];
    totalprice += b.product.price * b.count;
  }
  totalpriceH1.innerHTML =
    '<h1 id="total-price" style="margin: 10px;font-size: 25px;">Umumi qiymet:' +
    totalprice +
    "</h1>";
}

function tesdiqPage() {
  document.getElementById("lightbox").style.display = "block";
  basketModal.style.display = "none";
}
function closeconfirm() {
  document.getElementById("lightbox").style.display = "none";
}
function deleteall() {
  basketProducts.splice(0, basketProducts.length);

  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  refreshProductsBasket();
  addToBasketAction();
  if (basketProducts.length === 0) {
    basketModal.style.display = "none";
  }
}

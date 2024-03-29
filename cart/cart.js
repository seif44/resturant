const products = document.querySelector("table tbody");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCont = document.querySelector('.cartCont');
const price = document.querySelector('.price')
renderProducts(cart);
checkEmptyCart()
function removeAll() {
    cart = [];
    checkEmptyCart();
    saveCart();
}
function checkEmptyCart() {
    if (cart.length == 0) {
        cartCont.innerHTML = `<h3 class='text-center'>cart is empty</h3>`
    }
}
console.log(cartCont)

function increaseProduct(id, btn) {
    const obj = cart.find((product) => product.id == id);
    obj.quantity++;
    const parent = btn.closest(".cart-product-amount");
    const quantityElement = parent.querySelector(".quantity");
    quantityElement.innerHTML = obj.quantity;
    saveCart();
}

function decreaseProduct(id, btn) {
    const obj = cart.find((product) => product.id == id);
    const parent = btn.closest(".cart-product-amount");
    const quantityElement = parent.querySelector(".quantity");
    if (obj.quantity > 1) {
        obj.quantity--;
        quantityElement.innerHTML = obj.quantity;
        saveCart();
    }
    saveCart();
}

function removeproduct(id, btn) {
    cart = cart.filter(product => product.id != id);
    const productElement = btn.closest('.cart-product');
    productElement.remove();
    checkEmptyCart()
    saveCart();
    Swal.fire({
        title: "تم حذف المنتج !",
        text: "!اضغط للتخطي",
        icon: "error"
    });
    setTimeout(() => {
        Swal.close();
    }, 2000);
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function renderProducts(prod) {
    prod.forEach((product) => {
        products.innerHTML += `
    <tr class="cart-product ">
                <td>
                  <div class="img-product">
                    <img class="CartImg" src="${product.thumbnail}"alt="product-photo">
                    <h4 class="cart-title">${product.title}</h4>
                  </div>
                </td>

                <td class="counter">
                  <div class="cart-product-amount">
                    <span class="btn-quantity" onclick="decreaseProduct(${product.id} , this)">-</span>
                    <span class="quantity">${product.quantity}</span>
                      <span class="btn-quantity" onclick="increaseProduct(${product.id} , this)">+</span>
                  </div>
                </td>

                <td>
                  <div class="column gap-3">
                    <span class="price">$${product.price}</span>
                    <span class="btn btn-danger" onclick="removeproduct(${product.id} , this)">Remove</span>
                  </div>
                </td>
              </tr>
        `;
    });
}

function renderPro(data) {
    data.forEach((el, idx) => {
        products.innerHTML += `
    <tr class="cart-product ">
                <td>
                  <div class="img-product">
                    <img class="CartImg" src="${el.img}"alt="product-photo">
                    <h4 class="cart-title">${el.name}</h4>
                  </div>
                </td>

                <td class="counter">
                  <div class="cart-product-amount">
                    <span class="btn-quantity" onclick="decreaseProduct(${product.id} , this)">-</span>
                    <span class="quantity">${product.quantity}</span>
                      <span class="btn-quantity" onclick="increaseProduct(${product.id} , this)">+</span>
                  </div>
                </td>

                <td>
                  <div class="column">
                    <span class="price">$${el.price}</span>
                    <span class="btn btn-danger" onclick="removeproduct(${product.id} , this)">Remove</span>
                  </div>
                </td>
              </tr>
    `
    });
}
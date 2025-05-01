const cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₾${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">წაშლა</button>`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `სულ თანხა: ₾${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartDisplay();
}
let CartItems = [];

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  list.innerHTML = '';
  let totalAmount = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ₾${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">წაშლა</button>`;
    list.appendChild(li);
    totalAmount += item.price;
  });

  total.textContent = `სულ: ₾${totalAmount.toFixed(2)}`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

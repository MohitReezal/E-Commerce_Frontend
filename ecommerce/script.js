// script.js

let cartItems = [];
let cartTotal = 0;

function addToCart(product, price) {
    cartItems.push({ product, price });
    cartTotal += price;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');

    // Clear the current cart list
    cartList.innerHTML = '';

    // Populate the cart list with updated items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    // Update the total amount
    totalSpan.textContent = cartTotal.toFixed(2);
}

function checkout() {
    alert(`Total: $${cartTotal.toFixed(2)} - Thank you for your purchase!`);
    // You would typically send this information to a server for further processing
    // and clear the cart for the next purchase.
    cartItems = [];
    cartTotal = 0;

    updateCart();
}


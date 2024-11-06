// Example: Update the cart count when "Add to Cart" is clicked
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const cartCount = document.getElementById('cart-count');
      let currentCount = parseInt(cartCount.innerText);
      cartCount.innerText = currentCount + 1;
      button.disabled = true; // Disable the button
    });
  });
  
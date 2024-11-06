document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
      const quantityElem = button.parentNode.querySelector('.quantity');
      quantityElem.innerText = parseInt(quantityElem.innerText) + 1;
      updateCartTotal();
    });
  });
  
  function updateCartTotal() {
    // Example: calculate and update the total cost in the cart
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').innerText);
      const price = parseFloat(item.dataset.price);
      total += quantity * price;
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
  }
  
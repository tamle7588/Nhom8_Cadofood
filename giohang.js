document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartList = document.querySelector('.danhsach');
    const totalQuantityDisplay = document.getElementById('totalQuantity');
    const totalPriceDisplay = document.getElementById('totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product-detail');
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('.price').textContent);
            const quantity = parseInt(product.querySelector('#quantity').value);

            totalQuantity += quantity;
            totalPrice += productPrice * quantity;

            // Tạo một mục mới trong giỏ hàng
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="name">${productName}</div>
                <div class="totalPrice">${productPrice * quantity}.000</div>
                <div class="quantity">${quantity}</div>`;
            cartList.appendChild(cartItem);

            // Cập nhật tổng số lượng và tổng tiền
            totalQuantityDisplay.textContent = totalQuantity;
            totalPriceDisplay.textContent = totalPrice.toFixed(3); // Hiển thị tổng tiền với 3 chữ số thập phân
        });
    });
});

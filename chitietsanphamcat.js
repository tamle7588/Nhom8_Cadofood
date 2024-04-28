let listProductHTML = document.querySelector('.sanpham1');
let listCartHTML = document.querySelector('.danhsach');
let iconCartSpan = document.querySelector('#cart-btn span');
listProductHTML.addEventListener('click', (event) => {
    console.log("Button clicked!");
    let target = event.target;
    if (target.classList.contains('addCart')) {
        let productId = parseInt(target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Mảng chứa danh sách sản phẩm
let products = [
    {
        id: 1,
        name: "Hạt ANF Cat 6 Free Indoor Adult 6kg",
        image: "Image/meotc/meott2.png",
        price: 375.000
    }
];

// Mảng chứa giỏ hàng
let cart = [];

// Hàm thêm dữ liệu vào HTML
const addDataToHTML = () => {
    // Xóa danh sách sản phẩm hiện có
    listProductHTML.innerHTML = '';

    // Hiển thị danh sách sản phẩm
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('card');
            newProduct.innerHTML =
                `<div class="card-content">
                    <div class="img">
                        <img src="${product.image}" alt="" class="card-img">
                    </div>
                    <h1 class="card-title">${product.name}</h1>
                    <div class="card-body">
                        <p class="card-price">${product.price}.000</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-border addCart" data-id="${product.id}">Giỏ hàng</button>
                    </div>
                </div>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

// Hàm thêm sản phẩm vào giỏ hàng
const addToCart = (productId) => {
    let existingItem = cart.find(item => item.product_id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product_id: productId, quantity: 1 });
    }
    updateCart();
}

// Hàm cập nhật giỏ hàng
const updateCart = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        let product = products.find(product => product.id === item.product_id);
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <div class="image">
                <img src="${product.image}">
            </div>
            <div class="name">
                ${product.name}
            </div>
            <div class="totalPrice">${product.price * item.quantity}.000</div>
            <div class="quantity">
                <button class="minus" data-id="${product.id}">-</button>
                <span>${item.quantity}</span>
                <button class="plus" data-id="${product.id}">+</button>
            </div>`;
        listCartHTML.appendChild(newItem);

        totalQuantity += item.quantity;
        totalPrice += product.price * item.quantity;
    });

    iconCartSpan.innerText = totalQuantity;
    document.getElementById('totalQuantity').innerText = totalQuantity;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(3); // Display total price with 3 decimal places
}

// Hàm khởi tạo ứng dụng
const initApp = () => {
    updateCart();
}

// Sự kiện khi click vào nút "Thêm vào giỏ hàng"
listProductHTML.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('addCart')) {
        let productId = parseInt(target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Sự kiện khi click vào nút "Thanh toán"
document.querySelector('.checkout').addEventListener('click', () => {
    // Xử lý thanh toán ở đây (ví dụ: gửi thông tin đơn hàng đến máy chủ, xử lý thanh toán v.v.)

    // Làm sạch giỏ hàng
    cart = [];

    // Cập nhật giao diện giỏ hàng
    updateCart();
});

// Khởi tạo ứng dụng
initApp();
// Thêm dữ liệu vào HTML
const percentage = Math.round((value / max) * 100);
document.querySelector('.overlay').style.width = `${100 - percentage}%`;
/*đánh giá sp*/
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Lấy dữ liệu từ biểu mẫu
    var ten = document.getElementById('ten').value;
    var danhGia = document.getElementById('danhGia').value;
    var ngayGio = new Date().toLocaleString('vi-VN');
  
    // Tạo phần tử đánh giá mới
    var danhGiaItem = document.createElement('li');
    var reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');
    reviewContent.innerHTML = '<strong>' + ten + '</strong><br>' +
                              '<span class="review-date">' + ngayGio + '</span><br>' +
                              '<span class="review-text">' + danhGia + '</span>';
  
    // Thêm đánh giá vào danh sách
    danhGiaItem.appendChild(reviewContent);
    document.getElementById('danhGiaList').appendChild(danhGiaItem);
  
    // Hiển thị thông báo phiếu đánh giá đã được gửi
    var notification = document.getElementById('notification');
    notification.innerText = "Phiếu đánh giá đã được gửi.";
    
    // Xóa nội dung biểu mẫu sau khi gửi đánh giá
    document.getElementById('reviewForm').reset();
});



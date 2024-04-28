
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);

var lastScrollTop = 0; // Lưu giữ vị trí cuối cùng của cuộn trang

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Vị trí cuộn hiện tại

    // Kiểm tra hướng cuộn trang
    if (scrollTop > lastScrollTop) {
        footer.classList.add("hidden"); // Nếu cuộn xuống, ẩn footer
    } else {
        footer.classList.remove("hidden"); // Nếu cuộn lên, hiển thị footer
    }
    lastScrollTop = scrollTop; // Cập nhật vị trí cuộn cuối cùng
});

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });

    function filterProducts() {
        const selectedBrands = getSelectedCheckboxes('.thuonghieu');
        const selectedPrices = getSelectedCheckboxes('.giaban');
        const selectedTypes = getSelectedCheckboxes('.manhinh');
        
        const products = document.querySelectorAll('.card');
        
        products.forEach(function(product) {
            const brand = product.dataset.brand;
            const price = parseFloat(product.dataset.price);
            const type = product.dataset.type;
            
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand);
            const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(getPriceRange(price));
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(type);
            
            if (brandMatch && priceMatch && typeMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function getSelectedCheckboxes(className) {
        const checkboxes = document.querySelectorAll(className + ':checked');
        const values = Array.from(checkboxes).map(function(checkbox) {
            return checkbox.value;
        });
        return values;
    }

    function getPriceRange(price) {
        if (price < 100000) {
            return '1';
        } else if (price >= 100000 && price < 200000) {
            return '2';
        } else if (price >= 200000 && price < 300000) {
            return '3';
        } else {
            return '4';
        }
    }
});

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-box").addEventListener("input", function() {
        var searchValue = this.value.trim().toLowerCase();
        var cards = document.querySelectorAll(".card");
        
        cards.forEach(function(card) {
            var title = card.querySelector(".card-title").textContent.trim().toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin người dùng đã đăng nhập từ Local Storage
    const loggedInUser = localStorage.getItem('loggedInUser');
    // Hiển thị tên người dùng lên header của trang chủ
    const userEmailDisplay = document.getElementById('user-email');
    if (loggedInUser) {
        userEmailDisplay.textContent = loggedInUser;
    } else {
        userEmailDisplay.textContent = "Khách";
    }
});

// Hàm đăng xuất
function logout() {
    // Xóa thông tin người dùng khỏi Local Storage
    localStorage.removeItem('loggedInUser');
    // Cập nhật giao diện để hiển thị rằng không có người dùng đăng nhập
    const userEmailDisplay = document.getElementById('user-email');
    userEmailDisplay.textContent = "Khách";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Đổi hình 
}

function plusSlides(n) {
    slideIndex += n;
    var slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}




let giohang = document.querySelector('.giohang');
let listProductHTML = document.querySelector('.sanpham1');
let listCartHTML = document.querySelector('.danhsach');
let iconCartSpan = document.querySelector('#cart-btn span');

document.querySelector('#cart-btn').onclick = () => {
    giohang.classList.toggle('active');
}

let products = [
    {
        id: 1,
        name: "Hạt Grandmagic cho chó 1kg",
        image: "Image/spnb/spnb_1.png",
        price: 80.000
    },
    {
        id: 2,
        name: "Hạt ANF Cat 6 Free Indoor Adult 6kg",
        image: "Image/spnb/spnb2.png",
        price: 105.000
    },
    {
        id: 3,
        name: "Hạt ANF Nature's Kitchen cho chó 2kg",
        image: "Image/spnb/spnb3.png",
        price: 375.000
    },
    {
        id: 4,
        name: "Hạt ANF 6 Free Dog cá hồi 2kg",
        image: "Image/spnb/spnb4.png",
        price: 460.000
    },
    {
        id: 5,
        name: "Pate Snappy Tom Premium cho mèo lon 85g",
        image: "Image/spnb/spnb5.png",
        price: 19.000
    },
];

let cart = [];

const addDataToHTML = () => {
    // Clear existing product list
    listProductHTML.innerHTML = '';

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

const addToCart = (productId) => {
    let existingItem = cart.find(item => item.product_id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product_id: productId, quantity: 1 });
    }
    updateCart();
}

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

const initApp = () => {
    updateCart();
}

listProductHTML.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('addCart')) {
        let productId = parseInt(target.getAttribute('data-id'));
        addToCart(productId);
    }
});

listCartHTML.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('minus')) {
        let productId = parseInt(target.getAttribute('data-id'));
        decreaseQuantity(productId);
    } else if (target.classList.contains('plus')) {
        let productId = parseInt(target.getAttribute('data-id'));
        increaseQuantity(productId);
    }
});

const decreaseQuantity = (productId) => {
    let existingItem = cart.find(item => item.product_id === productId);
    if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
            cart = cart.filter(item => item.product_id !== productId);
        }
        updateCart();
    }
}

const increaseQuantity = (productId) => {
    let existingItem = cart.find(item => item.product_id === productId);
    if (existingItem) {
        existingItem.quantity++;
        updateCart();
    }
}

initApp();
addDataToHTML();

// Function để lấy thông tin sản phẩm
const getProductInfo = () => {
    let info = "";
    let totalPriceAllProducts = 0; // Biến để lưu tổng tiền của tất cả các sản phẩm
    cart.forEach(item => {
        let product = products.find(product => product.id === item.product_id);
        let totalPricePerItem = item.quantity * product.price; // Tính thành tiền cho từng sản phẩm
        totalPriceAllProducts += totalPricePerItem; // Cập nhật tổng tiền
        info += `${product.name} - Số lượng: ${item.quantity} - Thành tiền: ${totalPricePerItem}.000 VND\n`;
    });
    info += `Tổng tiền: ${totalPriceAllProducts}.000 VND`; // Thêm thông tin tổng tiền vào cuối chuỗi thông tin
    return info;
};


// Thêm sự kiện cho nút thanh toán
document.querySelector('.checkout').addEventListener('click', () => {
    // Hiển thị thông báo thành công và thông tin sản phẩm
    alert("Bạn đã thanh toán thành công!\nThông tin sản phẩm:\n" + getProductInfo());

    // Xóa dữ liệu trong giỏ hàng
    cart = [];

    // Cập nhật giao diện giỏ hàng
    updateCart(); // Bạn cần định nghĩa hàm updateCart để cập nhật giao diện giỏ hàng tại đây
});

//đăng kí ưu đãi
document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#newsletter button");
    button.addEventListener("click", function() {
        alert("Bạn đã đăng kí nhận ưu đãi thành công");
        var input = document.querySelector("#newsletter input[type='text']");
            input.value = "";
    });
});
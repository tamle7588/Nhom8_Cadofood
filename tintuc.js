

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
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
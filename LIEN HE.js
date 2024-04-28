document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // validation form login
    const inputUsername = document.querySelector(".input-login-username");
    const inputPassword = document.querySelector(".input-login-password");
    const btnLogin = document.querySelector(".login__signInButton");

    const registerForm = document.querySelector('.sign-up form');
    const loginForm = document.querySelector('.sign-in form');

    const registerSuccessMessage = document.getElementById('registerSuccessMessage');

    // Thêm sự kiện cho form đăng ký
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = registerForm.querySelector('input[type="text"]');
        const emailInput = registerForm.querySelector('input[type="email"]');
        const passwordInput = registerForm.querySelector('input[type="password"]');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Kiểm tra xem có điền đầy đủ thông tin không
        if (name === "" || email === "" || password === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Kiểm tra xem email có đúng định dạng không
        if (!validateEmail(email)) {
            alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email @gmail.com");
            return;
        }

        // Thực hiện đăng ký - ở đây có thể lưu thông tin đăng ký vào cơ sở dữ liệu hoặc localStorage
        // Trong ví dụ này, tôi sẽ giả sử lưu thông tin vào localStorage
        localStorage.setItem('registeredEmail', email);
        registerSuccessMessage.style.display = 'block'; // Hiển thị thông báo đăng ký thành công

        // Ẩn thông báo sau 3 giây
        setTimeout(function() {
            registerSuccessMessage.style.display = 'none';
        }, 3000);

        // Chuyển hướng đến phần đăng nhập
        showLoginPanel();
    });

    // Thêm sự kiện cho form đăng nhập
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = loginForm.querySelector('input[type="email"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Lấy email đã đăng ký từ localStorage
        const registeredEmail = localStorage.getItem('registeredEmail');

        // Kiểm tra xem email và password nhập vào có trùng khớp với thông tin đăng ký không
        if (email === registeredEmail) {
            alert("Đăng nhập thành công!");
            // Chuyển hướng đến trang chủ
            window.location.href = "Cado_Shop.html"; // Đổi đường dẫn tới trang chủ của bạn
        } else {
            alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
        }
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        return regex.test(email);
    }

    // Hiển thị panel đăng nhập
    function showLoginPanel() {
        const loginPanel = document.querySelector('.toggle-panel.toggle-left');
        const registerPanel = document.querySelector('.toggle-panel.toggle-right');
        loginPanel.classList.add('active');
        registerPanel.classList.remove('active');
    }
    // Sau khi đăng nhập thành công
if (email === registeredEmail) {
    alert("Đăng nhập thành công!");
    // Lưu thông tin người dùng vào Local Storage
    localStorage.setItem('loggedInUser', email);
    // Chuyển hướng đến trang chủ
    window.location.href = "Cado_Shop.html";
} else {
    alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
}

});

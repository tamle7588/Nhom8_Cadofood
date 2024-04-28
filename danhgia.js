document.addEventListener('DOMContentLoaded', function() {
    const post = document.querySelector('.post');
    const starRating = document.querySelector('.star-rating');
    const editIcon = document.querySelector('.edit');
    const form = document.querySelector('form');
  
    // Ẩn form đánh giá khi trang được tải
    starRating.style.display = "block";
    post.style.display = "none";
  
    // Xử lý sự kiện khi người dùng bấm vào biểu tượng chỉnh sửa
    editIcon.addEventListener('click', function() {
      // Hiển thị form đánh giá và ẩn thông báo
      starRating.style.display = "block";
      post.style.display = "none";
    });
  
    // Xử lý sự kiện khi người dùng gửi đánh giá
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Hiển thị thông báo "Cảm ơn bạn đã đánh giá"
      starRating.style.display = "none";
      post.style.display = "block";
    });
  });
  
/* Đợi cho toàn bộ trang web được tải xong */
document.addEventListener("DOMContentLoaded", () => {

    /* Lấy ô tìm kiếm từ HTML */
    const searchInput = document.getElementById("searchInput");

    /* Chỉ chạy code nếu ô tìm kiếm tồn tại */
    if (searchInput) {
        
        /* Thêm sự kiện 'keyup' (kích hoạt mỗi khi bạn gõ một phím) */
        searchInput.addEventListener("keyup", () => {
            
            // 1. Lấy nội dung bạn gõ vào, đổi sang chữ thường
            const filterText = searchInput.value.toLowerCase();

            // 2. Lấy tất cả các mục <li> trong danh sách tài liệu
            const docList = document.getElementById("document-list");
            const items = docList.getElementsByTagName("li");

            // 3. Lặp qua từng mục (từng file tài liệu)
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                
                // Lấy nội dung text bên trong thẻ <a>
                const linkText = item.getElementsByTagName("a")[0].textContent || item.getElementsByTagName("a")[0].innerText;
                
                // 4. So sánh text với nội dung tìm kiếm
                if (linkText.toLowerCase().indexOf(filterText) > -1) {
                    // Nếu tìm thấy, cho nó HIỆN ra
                    item.style.display = "";
                } else {
                    // Nếu không tìm thấy, ẨN nó đi
                    item.style.display = "none";
                }
            }
        });
    }
});
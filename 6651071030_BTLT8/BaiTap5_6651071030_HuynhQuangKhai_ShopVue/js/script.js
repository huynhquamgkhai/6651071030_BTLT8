/* ==========================================================================
   BÀI TẬP 5: SHOP PHỤ KIỆN ĐIỆN THOẠI MINI - GIỎ HÀNG ĐỘNG VỚI VUE.JS
   ========================================================================== */

const { createApp } = Vue;

createApp({
    data() {
        return {
            // Từ khóa tìm kiếm (kết nối 2 chiều với v-model)
            tuKhoa: '',

            // Mảng chứa các sản phẩm trong giỏ hàng
            cart: [],

            // Mảng chứa tối thiểu 8 sản phẩm phụ kiện điện thoại (Yêu cầu 4)
            products: [
                { id: 1, ten: "ELECTRIC BLUE CASE", gia: 250000, hinhAnh: "../images/case-blue.jpg", moTa: "Ốp lưng điện thoại màu xanh dương bảo vệ chống va đập." },
                { id: 2, ten: "SILVER IPHONE CASE", gia: 250000, hinhAnh: "../images/silver-case.jpg", moTa: "Ốp lưng màu bạc sang trọng dành cho dòng máy cao cấp." },
                { id: 3, ten: "WIRELESS CHARGER PAD", gia: 250000, hinhAnh: "../images/wire.jpg", moTa: "Đế sạc không dây nhanh chuẩn Qi tiện lợi." },
                { id: 4, ten: "ACTIVE TWS EARBUDS", gia: 250000, hinhAnh: "../images/earbub.jpg", moTa: "Tai nghe Bluetooth không dây âm thanh chất lượng cao." },
                { id: 5, ten: "MATTE BLACK CASE", gia: 250000, hinhAnh: "../images/black-case.jpg", moTa: "Ốp lưng đen nhám chống bám vân tay." },
                { id: 6, ten: "FAST CHARGING CABLE", gia: 250000, hinhAnh: "../images/fast.jpg", moTa: "Cáp sạc nhanh Type-C siêu bền bọc dù." },
                { id: 7, ten: "TEMPERED GLASS FILM", gia: 150000, hinhAnh: "../images/glass.jpg", moTa: "Kính cường lực full màn hình chống trầy xước." },
                { id: 8, ten: "POWER BANK 10000MAH", gia: 450000, hinhAnh: "../images/POWER.jpg", moTa: "Sạc dự phòng dung lượng lớn hỗ trợ sạc nhanh." }
            ]
        };
    },

    computed: {
        /*
         * Computed property: Tính tổng số lượng sản phẩm trong giỏ hàng.
         * Tự động cập nhật ở Header khi mảng cart thay đổi.
         */
        cartCount() {
            return this.cart.length;
        },

        /*
         * Computed property: Tính tổng tiền các sản phẩm trong giỏ hàng. (Yêu cầu 7)
         * Sử dụng reduce để cộng dồn giá tiền.
         */
        tongTien() {
            return this.cart.reduce((sum, item) => sum + item.gia, 0);
        },

        /*
         * Computed property: Lọc danh sách sản phẩm theo từ khóa (tuKhoa). (Yêu cầu 8)
         * Không phân biệt hoa/thường (toLowerCase).
         * Giúp thể hiện tinh thần "UI = function of data".
         */
        danhSachLoc() {
            return this.products.filter(p => 
                p.ten.toLowerCase().includes(this.tuKhoa.toLowerCase())
            );
        }
    },

    methods: {
        /*
         * Method: Thêm sản phẩm vào mảng cart. (Yêu cầu 6)
         * GIẢI THÍCH REACTIVITY vs VANILLA JS (Yêu cầu 11):
         * - Trong Vanilla JS: Mỗi lần click nút thêm, ta phải viết thủ công:
         *   querySelector('#cart-count').innerText = count;
         *   querySelector('#cart-list').appendChild(...);
         *   querySelector('#total-price').innerText = total;
         * - Trong Vue.js: Ta chỉ cần push sản phẩm vào mảng `this.cart.push(sanPham)`.
         *   Vue sẽ tự động phát hiện dữ liệu thay đổi và cập nhật lại toàn bộ giao diện (UI)
         *   tương ứng (Header counter, Danh sách giỏ hàng, Tổng tiền) nhờ cơ chế Reactivity.
         */
        themVaoGio(sanPham) {
            this.cart.push(sanPham);
        },

        /*
         * Method: Xóa 1 sản phẩm khỏi giỏ dựa vào vị trí index. (Yêu cầu 7)
         */
        xoaKhoiGio(index) {
            this.cart.splice(index, 1);
        },

        /*
         * Method bổ trợ: Định dạng số tiền thành chuỗi dễ đọc (ví dụ: 250,000)
         */
        formatGia(gia) {
            return gia.toLocaleString('vi-VN');
        }
    }
}).mount('#app');
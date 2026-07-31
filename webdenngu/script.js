// Lấy các phần tử DOM
const toggleBtn = document.getElementById('toggleBtn');
const lampLight = document.getElementById('lampLight');
const statusText = document.getElementById('statusText');

let isRunning = false;

toggleBtn.addEventListener('click', () => {
  if (isRunning) return; // Tránh bấm liên tục khi đang chạy
  isRunning = true;

  // Bước 1: Kích hoạt cảm biến -> Bật ánh sáng dịu nhẹ (Warm Light)
  statusText.innerText = "状態: 1. やさしい光 (Warm Light)";
  lampLight.style.background = "#ffb347";
  lampLight.style.boxShadow = "0 0 30px #ffb347";

  // Bước 2: Sau 3 giây tự động chuyển sang ánh sáng trắng (White Light)
  setTimeout(() => {
    statusText.innerText = "状態: 2. 白い光 (White Light)";
    lampLight.style.background = "#ffffff";
    lampLight.style.boxShadow = "0 0 50px #ffffff";
  }, 3000);

  // Bước 3: Sau 6 giây tự động tắt (Off)
  setTimeout(() => {
    statusText.innerText = "状態: 消灯中 (Off)";
    lampLight.style.background = "#333333";
    lampLight.style.boxShadow = "none";
    isRunning = false;
  }, 6000);
});
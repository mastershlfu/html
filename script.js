document.addEventListener('DOMContentLoaded', () => {
	// === CÁC HẰNG SỐ ===
  const mainContainer = document.getElementById('main-container');
	const decorativeImage = document.getElementById('decorative-image'); // Div trang trí mới

	// Logo và Nút điều hướng
	const logoImg = document.getElementById('logo-img');
	const homeBtn = document.getElementById('home-btn');
	const featuresBtn = document.getElementById('features-btn');
	const aboutBtn = document.getElementById('about-btn');

	// Các màn hình (Views)
	const homeScreen = document.getElementById('home-screen');
	const featuresScreen = document.getElementById('features-screen');
	const aboutScreen = document.getElementById('about-screen');

	// Các phần tử cần animation
	const featureBoxes = document.querySelectorAll('.feature-box');
	const aboutSections = document.querySelectorAll('.about-section');

	// === HÀM TIỆN ÍCH ===
	const resetAnimations = () => {
		const animatedElements = document.querySelectorAll('.animate-slide-up');
		animatedElements.forEach((el) => el.classList.remove('animate-slide-up'));
	};

	// === HÀM CHÍNH ĐỂ THAY ĐỔI VIEW ===
	const setActiveView = (viewName) => {
		// 1. Ẩn tất cả các màn hình
		homeScreen.classList.add('hidden');
		featuresScreen.classList.add('hidden');
		aboutScreen.classList.add('hidden');

		// 2. Xóa các animation cũ
		resetAnimations();

		// 3. Ẩn hình ảnh trang trí cũ (nếu có)
		decorativeImage.classList.remove('visible');

		// 4. Thiết lập hình ảnh và màn hình mới sau một khoảng trễ ngắn
		// để hiệu ứng fade-out kịp diễn ra
		setTimeout(() => {
			switch (viewName) {
				case 'home':
					homeScreen.classList.remove('hidden');
          mainContainer.style.backgroundImage = "url('./images/bg.png')";
					decorativeImage.style.backgroundImage = "url('./images/teddie.png')";
					break;
				case 'features':
					featuresScreen.classList.remove('hidden');
					featureBoxes.forEach((box) => box.classList.add('animate-slide-up'));
					break;
				case 'about':
					aboutScreen.classList.remove('hidden');
					aboutSections.forEach((section) =>
						section.classList.add('animate-slide-up')
					);
					break;
			}
			// Hiện hình ảnh trang trí mới
			decorativeImage.classList.add('visible');
		}, 300); // 300ms trễ
	};

	// === TRÌNH LẮNG NGHE SỰ KIỆN (EVENT LISTENERS) ===
	logoImg.addEventListener('click', () => setActiveView('home'));
	homeBtn.addEventListener('click', () => setActiveView('home'));
	featuresBtn.addEventListener('click', () => setActiveView('features'));
	aboutBtn.addEventListener('click', () => setActiveView('about'));

	// === TRẠNG THÁI KHỞI ĐẦU ===
	// Bắt đầu tại màn hình Home
	setActiveView('home');
});
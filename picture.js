// 요소 선택
const viewport = document.querySelector('.viewport');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');

// 초기값 설정
let currentIndex = 1; // 복제된 슬라이드 때문에 실제 첫 슬라이드가 인덱스 1
const slideWidth = slides[1].offsetWidth;

// 초기 설정: 첫 번째 실제 슬라이드로 스크롤
viewport.scrollLeft = currentIndex * slideWidth;

// 슬라이드로 스크롤 이동
function scrollToSlide(index) {
    viewport.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
    });
}

// 순환 스크롤 처리
function adjustForClones() {
    if (currentIndex === 0) {
        // 복제된 마지막 슬라이드에서 실제 마지막 슬라이드로 점프
        currentIndex = slides.length - 2;
        viewport.scrollLeft = currentIndex * slideWidth;
    } else if (currentIndex === slides.length - 1) {
        // 복제된 첫 슬라이드에서 실제 첫 슬라이드로 점프
        currentIndex = 1;
        viewport.scrollLeft = currentIndex * slideWidth;
    }
}

// 네비게이션 버튼 동작
function goToSlide(direction) {
    if (direction === 'prev') {
        currentIndex--;
    } else if (direction === 'next') {
        currentIndex++;
    }
    scrollToSlide(currentIndex);
}

// 스크롤 이벤트 리스너
viewport.addEventListener('scroll', () => {
    clearTimeout(viewport.timer);
    viewport.timer = setTimeout(adjustForClones, 200); // 스크롤이 멈춘 후 처리
});

// 버튼 이벤트 리스너
prevButton.addEventListener('click', () => goToSlide('prev'));
nextButton.addEventListener('click', () => goToSlide('next'));

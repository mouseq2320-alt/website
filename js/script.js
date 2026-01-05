document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById('newsImage');
console.log(img);
const items = document.querySelectorAll('.news-ul li');
console.log(items)

const images = [
    './images/news1.jpg.jpg',
    './images/news2.jpg.jpg',
    './images/news3.jpg.jpg',
    './images/news4.jpg.jpg',
    './images/news5.jpg.jpg',
    './images/news6.jpg.jpg'
];

items.forEach((li, index) => {
    li.addEventListener('mouseenter', () => {
        img.src = images[index];
    });
});
})


/*------------------------------------------------------*/




// 1. 초기 인덱스 설정 (0: 첫 번째 이미지)
let currentIndex = 0;

// 2. 슬라이드 변경 함수
function changeSlide(direction) {
    // 배경 이미지들과 제목 요소를 가져옵니다.
    const images = document.querySelectorAll('.bg-img');
    const titleElement = document.getElementById('intro-title');
    
    // 사진 순서에 맞게 바뀔 제목들을 배열로 만듭니다.
    const titles = [
        "충주박물관<br>소개",
        "",      // images/museum-intro.jpg 일 때
        ""        // images/collection.jpg 일 때
    ];

    // [Step 1] 현재 활성화된 이미지에서 active 클래스 제거
    images[currentIndex].classList.remove('active');

    // [Step 2] 다음 인덱스 계산
    currentIndex += direction;

    // 마지막 이미지에서 다음을 누르면 처음으로, 첫 번째에서 이전을 누르면 마지막으로 보냄
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // [Step 3] 새로운 이미지에 active 클래스 추가
    images[currentIndex].classList.add('active');

    // [Step 4] 제목 텍스트 변경
    if (titleElement) {
        titleElement.innerHTML = titles[currentIndex];
    }
}





document.addEventListener('DOMContentLoaded', function() {
    const handle = document.getElementById('handle'); // 슬라이더 input
    const mainView = document.querySelector('.main-view'); // 중앙 메인 이미지
    const bar = document.querySelector('.bar'); // 흰색 세로선

    // 슬라이더 조작 시 실행
    handle.addEventListener('input', function(e) {
        const val = e.target.value; // 0 ~ 100 사이의 값
        
        // 1. 흰색 선 위치 이동
        bar.style.left = val + "%";

        // 2. 중앙 이미지(main-view) 깎기 로직
        if (val > 50) {
            // 오른쪽으로 밀 때: 메인의 오른쪽을 깎아서 '전시관 소개' 노출
            // 중앙(50%)에서 100%까지 갈 때 0%에서 100%가 깎여야 함
            const clipAmount = (val - 50) * 2; 
            mainView.style.clipPath = `inset(0 ${clipAmount}% 0 0)`;
        } 
        else if (val < 50) {
            // 왼쪽으로 밀 때: 메인의 왼쪽을 깎아서 '소장품' 노출
            const clipAmount = (50 - val) * 2;
            mainView.style.clipPath = `inset(0 0 0 ${clipAmount}%)`;
        } 
        else {
            // 정확히 중앙(50%)일 때는 깎지 않음
            mainView.style.clipPath = `inset(0 0 0 0)`;
        }
    });
});
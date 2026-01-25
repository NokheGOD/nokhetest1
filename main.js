document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const suggestButton = document.getElementById('suggest-button');
    const suggestionText = document.getElementById('suggestion-text');
    const suggestionImage = document.getElementById('suggestion-image');

    const dinnerOptions = [
        '치킨', '피자', '햄버거', '초밥', '파스타', '라면', '김치찌개', '된장찌개', '삼겹살', '족발', '보쌈', '떡볶이', '순대', '튀김', '혼자 집밥'
    ];

    suggestButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
        const selectedOption = dinnerOptions[randomIndex];
        
        suggestionText.textContent = selectedOption;

        if (selectedOption === '혼자 집밥') {
            suggestionImage.style.display = 'block';
        } else {
            suggestionImage.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const suggestButton = document.getElementById('suggest-button');
    const suggestionText = document.getElementById('suggestion-text');

    const dinnerOptions = [
        '치킨', '피자', '햄버거', '초밥', '파스타', '라면', '김치찌개', '된장찌개', '삼겹살', '족발', '보쌈', '떡볶이', '순대', '튀김'
    ];

    suggestButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
        suggestionText.textContent = dinnerOptions[randomIndex];
    });
});
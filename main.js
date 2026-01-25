document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const languageSelect = document.getElementById('language-select');

    const translations = {
        en: {
            pageTitle: "What should I eat for dinner?",
            pageHeader: "What should I eat for dinner?",
            suggestionText: "Press the button to get a dinner suggestion!",
            suggestButton: "Get a suggestion",
            dinnerOptions: [
                'Chicken', 'Pizza', 'Hamburger', 'Sushi', 'Pasta', 'Ramen', 'Kimchi Jjigae', 'Doenjang Jjigae', 'Samgyeopsal', 'Jokbal', 'Bossam', 'Tteokbokki', 'Sundae', 'Fries', 'Eating at home'
            ]
        },
        ko: {
            pageTitle: "오늘 저녁 뭐 먹지?",
            pageHeader: "오늘 저녁 뭐 먹지?",
            suggestionText: "버튼을 눌러 저녁 메뉴를 추천 받으세요!",
            suggestButton: "메뉴 추천 받기",
            dinnerOptions: [
                '치킨', '피자', '햄버거', '초밥', '파스타', '라면', '김치찌개', '된장찌개', '삼겹살', '족발', '보쌈', '떡볶이', '순대', '튀김', '혼자 집밥'
            ]
        }
    };

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });
        document.title = translations[lang].pageTitle;
        dinnerOptions = translations[lang].dinnerOptions;
    };

    languageSelect.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const suggestButton = document.getElementById('suggest-button');
    const suggestionText = document.getElementById('suggestion-text');
    const suggestionImage = document.getElementById('suggestion-image');
    const foodImage = document.getElementById('food-image');

    let dinnerOptions = translations[languageSelect.value].dinnerOptions;

    suggestButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
        const selectedOption = dinnerOptions[randomIndex];
        
        suggestionText.textContent = selectedOption;

        if (selectedOption === '혼자 집밥' || selectedOption === 'Eating at home') {
            suggestionImage.style.display = 'block';
            foodImage.style.display = 'none';
        } else {
            suggestionImage.style.display = 'none';
            foodImage.style.display = 'block';
        }
    });

    // Initial language setup
    updateLanguage(languageSelect.value);
});
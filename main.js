document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const languageSelect = document.getElementById('language-select');

    const translations = {
        en: {
            pageTitle: "Hobby Recommendation",
            pageHeader: "Hobby Recommendation",
            suggestionText: "Press the button to get a hobby recommendation!",
            suggestButton: "Get a recommendation",
            selectButton: "Select",
            hobbyOptions: [
                'Reading', 'Writing', 'Drawing', 'Painting', 'Playing a musical instrument', 'Singing', 'Dancing', 'Cooking', 'Baking', 'Gardening', 'Hiking', 'Camping', 'Knitting', 'Sewing', 'Photography', 'Yoga', 'Meditation', 'Coding', 'Gaming', 'Watching movies'
            ]
        },
        ko: {
            pageTitle: "취미 추천",
            pageHeader: "취미 추천",
            suggestionText: "버튼을 눌러 취미를 추천 받으세요!",
            suggestButton: "취미 추천 받기",
            selectButton: "선택",
            hobbyOptions: [
                '독서', '글쓰기', '그림 그리기', '페인팅', '악기 연주', '노래 부르기', '춤추기', '요리', '베이킹', '정원 가꾸기', '하이킹', '캠핑', '뜨개질', '바느질', '사진 촬영', '요가', '명상', '코딩', '게임', '영화 감상'
            ]
        }
    };

    let currentHobbies = translations[languageSelect.value].hobbyOptions;
    let lastSuggestedHobby = '';

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.title = translations[lang].pageTitle;
        currentHobbies = translations[lang].hobbyOptions;
    };

    languageSelect.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const suggestButton = document.getElementById('suggest-button');
    const selectButton = document.getElementById('select-button');
    const suggestionText = document.getElementById('suggestion-text');

    suggestButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * currentHobbies.length);
        const selectedHobby = currentHobbies[randomIndex];
        
        suggestionText.textContent = selectedHobby;
        lastSuggestedHobby = selectedHobby;
        selectButton.style.display = 'inline-block'; // Show the select button
    });

    selectButton.addEventListener('click', () => {
        const formspreeUrl = 'https://formspree.io/f/your_form_id';
        const redirectUrl = `${formspreeUrl}?hobby=${encodeURIComponent(lastSuggestedHobby)}`;
        window.location.href = redirectUrl;
    });

    // Initial language setup
    updateLanguage(languageSelect.value);
});
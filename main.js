const translations = {
    en: {
        title: "MBTI Survey",
        resultTitle: "Your MBTI Type is:",
        "nav-tests": "TESTS ▾",
        "nav-mbti": "MBTI Personality Test",
        "nav-coffee": "Coffee Personality Test",
        "nav-sns": "SNS Personality Test",
        "nav-kpop-pos": "K-POP Position Test",
        "nav-kpop-con": "Debut Concept Test",
        "nav-blog": "BLOG",
        "nav-contact": "CONTACT",
        "footer-contact": "Contact Us",
        "page-title": "MBTI Personality Test",
        "page-subtitle": "Find your true self in 1 minute.",
        "result-title": "Your MBTI Type is:",
        "form-guide": "Do you want to save your result via email?",
        "placeholder-email": "your@email.com",
        "btn-send": "Send Result",
        "retry-btn": "Retry",
        questions: [
            // E vs I
            { question: "At a party, I...", options: { E: "Talk to many people, including strangers", I: "Stick with people I know" } },
            { question: "I usually...", options: { E: "Initiate conversations", I: "Wait to be approached" } },
            { question: "After a long social event, I feel...", options: { E: "Energized", I: "Drained" } },
            // S vs N
            { question: "I am more interested in...", options: { S: "What is actual and real", N: "What is possible and imagined" } },
            { question: "I prefer to trust...", options: { S: "Experience", N: "Hunches" } },
            { question: "I tend to be more...", options: { S: "Practical", N: "Imaginative" } },
            // T vs F
            { question: "I make decisions based on...", options: { T: "Logic and reasoning", F: "Feelings and values" } },
            { question: "Which is a bigger compliment?", options: { T: "You are very competent", F: "You are very kind" } },
            { question: "I am more convinced by...", options: { T: "Objective evidence", F: "Emotional appeal" } },
            // J vs P
            { question: "I prefer my schedule to be...", options: { J: "Structured and planned", P: "Flexible and open" } },
            { question: "I usually work...", options: { J: "First, play later", P: "Whenever bursts of energy hit" } },
            { question: "In a group project, I...", options: { J: "Want to finalize things", P: "Want to explore more options" } }
        ]
    },
    ko: {
        title: "MBTI 성격 유형 검사",
        resultTitle: "당신의 MBTI 유형은:",
        "nav-tests": "테스트 ▾",
        "nav-mbti": "MBTI 성격 검사",
        "nav-coffee": "커피 성격 테스트",
        "nav-sns": "SNS 성격 테스트",
        "nav-kpop-pos": "K-POP 포지션 테스트",
        "nav-kpop-con": "데뷔 컨셉 테스트",
        "nav-blog": "블로그",
        "nav-contact": "문의하기",
        "footer-contact": "문의하기",
        "page-title": "MBTI 성격 유형 검사",
        "page-subtitle": "1분 만에 당신의 진짜 모습을 찾아보세요.",
        "result-title": "당신의 MBTI 유형은:",
        "form-guide": "결과를 이메일로 받아보거나 저장하시겠습니까?",
        "placeholder-email": "your@email.com",
        "btn-send": "결과 전송하기",
        "retry-btn": "다시 하기",
        questions: [
            // E vs I
            { question: "주말에 갑자기 잡혀있던 약속이 취소되었다면?", options: { E: "아쉽다. 다른 친구에게 연락해볼까?", I: "오히려 좋아! 집에서 푹 쉬어야지." } },
            { question: "새로운 모임에 처음 나갔을 때 나는?", options: { E: "먼저 다가가서 인사하고 말을 건다.", I: "어색하게 웃으며 누군가 말을 걸어주길 기다린다." } },
            { question: "친구들과 신나게 놀고 집에 돌아오는 길, 나의 기분은?", options: { E: "여전히 흥분이 가라앉지 않아 더 놀고 싶다.", I: "재미있었지만 기가 빨려서 빨리 눕고 싶다." } },
            // S vs N
            { question: "멍하니 있을 때 주로 하는 생각은?", options: { S: "오늘 저녁 뭐 먹지? 내일 할 일은?", N: "만약 좀비 사태가 터진다면? 우주는 끝이 있을까?" } },
            { question: "맛집을 찾을 때 나는?", options: { S: "리뷰 많고 검증된 유명 맛집을 간다.", N: "간판이나 분위기가 왠지 끌리는 곳으로 들어간다." } },
            { question: "영화를 볼 때 더 중요하게 생각하는 것은?", options: { S: "개연성이 맞는지, 현실적인지 따지며 본다.", N: "영화가 주는 메시지와 숨겨진 의미를 찾으며 본다." } },
            // T vs F
            { question: "친구가 우울해서 머리를 잘랐다고 했을 때 나는?", options: { T: "왜? 무슨 일 있어? (이유가 궁금함)", F: "저런.. 기분 전환은 좀 됐어? (기분을 살핌)" } },
            { question: "나를 더 화나게 하는 말은?", options: { T: "일 처리를 왜 이렇게 비효율적으로 해?", F: "너는 왜 이렇게 공감능력이 없어?" } },
            { question: "논쟁이 격해졌을 때 나는?", options: { T: "내 논리가 맞다는 것을 끝까지 증명하려 한다.", F: "상대방이 상처받을까 봐 적당히 마무리한다." } },
            // J vs P
            { question: "여행 중 가고 싶었던 맛집이 문을 닫았다면?", options: { J: "당황하지만 미리 알아봐 둔 2순위 식당으로 간다.", P: "어쩔 수 없지. 근처에 맛있어 보이는 곳 아무데나 간다." } },
            { question: "2주 뒤가 마감인 과제가 주어졌을 때 나는?", options: { J: "오늘부터 조금씩 자료 조사를 시작한다.", P: "아직 2주나 남았네? 일단 논다." } },
            { question: "방 청소를 하기로 마음먹었을 때 나는?", options: { J: "계획한 구역별로 순서대로 청소한다.", P: "눈에 보이는 지저분한 것부터 치우다가 추억 여행을 한다." } }
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const mbtiType = document.getElementById('mbti-type');
const mainTitle = document.querySelector('h1');
const resultTitleText = document.querySelector('#result-container h2');
const progressBar = document.getElementById('progress-bar');
const langBtn = document.getElementById('lang-toggle');
const root = document.documentElement;

// Initialize language on load
document.documentElement.setAttribute('lang', currentLang);

function updateUIText(lang) {
    const t = translations[lang];
    
    // Update Text Content for data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    
    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    // Update Lang Button
    if(langBtn) langBtn.textContent = lang === 'en' ? 'KR' : 'EN';
}

function renderSurvey() {
    const t = translations[currentLang];
    
    // Update static text (managed by data-i18n mostly now, but keeping for safety if data-i18n missing on these)
    // mainTitle.textContent = t.title; // Removed as h1 has data-i18n="page-title"
    // resultTitleText.textContent = t.resultTitle; // Removed as h2 has data-i18n="result-title"

    // Check if finished
    if (currentQuestionIndex >= t.questions.length) {
        showResult();
        return;
    }

    const q = t.questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex) / t.questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    let surveyHtml = `
        <div class="question-card fade-in">
            <p class="question-text">Q${currentQuestionIndex + 1}. ${q.question}</p>
            <div class="options">
    `;
    
    for (const key in q.options) {
        surveyHtml += `
            <label class="option-label" onclick="selectOption('${key}')">
                <input type="radio" name="question" value="${key}">
                <span class="custom-radio"></span>
                <span class="option-text">${q.options[key]}</span>
            </label>
        `;
    }
    
    surveyHtml += `
            </div>
        </div>
    `;
    
    surveyContainer.innerHTML = surveyHtml;
}

// Global function to handle option selection
window.selectOption = function(value) {
    if (isTransitioning) return; // Prevent double-clicks
    isTransitioning = true;
    
    userAnswers[currentQuestionIndex] = value;
    
    // Slight delay for visual feedback
    setTimeout(() => {
        currentQuestionIndex++;
        renderSurvey();
        isTransitioning = false;
    }, 300);
};

function calculateResult() {
    const type = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    for (const key in userAnswers) {
        type[userAnswers[key]]++;
    }
    let result = '';
    result += type.E > type.I ? 'E' : 'I';
    result += type.S > type.N ? 'S' : 'N';
    result += type.T > type.F ? 'T' : 'F';
    result += type.J > type.P ? 'J' : 'P';
    return result;
}

function showResult() {
    const result = calculateResult();
    mbtiType.textContent = result;
    
    // Fill the hidden input for Formspree
    const hiddenInput = document.getElementById('hidden-mbti');
    if (hiddenInput) hiddenInput.value = result;

    surveyContainer.innerHTML = ''; // Clear survey
    progressBar.parentElement.style.display = 'none'; // Hide progress bar
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// Formspree Submission Logic
const resultForm = document.getElementById('result-form');
const formStatus = document.getElementById('form-status');

if (resultForm) {
    resultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const submitBtn = document.getElementById('send-form-btn');
        
        submitBtn.disabled = true;
        submitBtn.textContent = '전송 중...';
        
        fetch('https://formspree.io/f/xzdelnob', {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                formStatus.textContent = "성공적으로 전송되었습니다! 🔥";
                formStatus.style.color = "var(--accent-color)";
                resultForm.reset();
            } else {
                formStatus.textContent = "전송에 실패했습니다. 다시 시도해주세요.";
                formStatus.style.color = "#ff4d4d";
            }
        }).catch(error => {
            formStatus.textContent = "오류가 발생했습니다.";
            formStatus.style.color = "#ff4d4d";
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = '결과 전송하기';
        });
    });
}

window.toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    root.setAttribute('lang', currentLang);
    
    // Update UI elements
    updateUIText(currentLang);
    
    // Re-render survey (translating current question)
    renderSurvey();
};

document.addEventListener('DOMContentLoaded', () => {
    updateUIText(currentLang);
    renderSurvey();
});
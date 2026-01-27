const translations = {
    en: {
        title: "MBTI Survey",
        resultTitle: "Your MBTI Type is:",
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
        questions: [
            // E vs I
            { question: "파티나 모임에서 나는...", options: { E: "새로운 사람들을 포함해 많은 사람과 어울린다", I: "이미 알고 있는 소수의 사람들과 어울린다" } },
            { question: "대화를 시작할 때 나는...", options: { E: "먼저 말을 거는 편이다", I: "상대방이 말을 걸 때까지 기다리는 편이다" } },
            { question: "사람들을 많이 만난 후 나는...", options: { E: "에너지가 생긴다", I: "기가 빨려서 혼자만의 시간이 필요하다" } },
            // S vs N
            { question: "나는 다음 중 무엇에 더 관심이 가나요?", options: { S: "현실적이고 실제적인 것", N: "미래의 가능성과 상상" } },
            { question: "나는 무엇을 더 신뢰하나요?", options: { S: "과거의 경험과 데이터", N: "나의 직감과 영감" } },
            { question: "나를 더 잘 표현하는 말은?", options: { S: "실용적인 사람", N: "창의적인 사람" } },
            // T vs F
            { question: "결정을 내릴 때 나는...", options: { T: "논리와 이성을 중시한다", F: "감정과 가치를 중시한다" } },
            { question: "더 듣기 좋은 칭찬은?", options: { T: "너 정말 똑똑하다/유능하다", F: "너 정말 착하다/배려심 깊다" } },
            { question: "상대방을 설득할 때 나는...", options: { T: "객관적인 사실을 제시한다", F: "감정에 호소한다" } },
            // J vs P
            { question: "여행 계획을 짤 때 나는...", options: { J: "세부적인 일정까지 미리 계획한다", P: "큰 틀만 잡고 상황에 따라 움직인다" } },
            { question: "일을 처리하는 스타일은?", options: { J: "미리미리 끝내놓고 쉰다", P: "마감 기한이 닥쳐야 능률이 오른다" } },
            { question: "변수가 생겼을 때 나는...", options: { J: "계획이 틀어져서 스트레스를 받는다", P: "새로운 상황을 즐기며 유연하게 대처한다" } }
        ]
    }
};

let currentLang = 'ko'; 
let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const mbtiType = document.getElementById('mbti-type');
const mainTitle = document.querySelector('h1');
const resultTitleText = document.querySelector('#result-container h2');
const progressBar = document.getElementById('progress-bar');

function renderSurvey() {
    const t = translations[currentLang];
    
    // Update static text
    mainTitle.textContent = t.title;
    resultTitleText.textContent = t.resultTitle;

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
    // Reset test when changing language for consistency, or just translate current question?
    // For simplicity, let's keep the index but the questions text changes.
    // However, if the user was mid-test, the text changes.
    renderSurvey();
    updateLangBtnText();
};

function updateLangBtnText() {
    const btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = currentLang === 'en' ? '한글' : 'English';
}

document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
    updateLangBtnText();
});
const translations = {
    en: {
        title: "MBTI Survey",
        submitBtn: "Show Result",
        resultTitle: "Your MBTI Type is:",
        alert: "Please answer all questions.",
        questions: [
            {
                question: "When you're at a party, do you prefer to:",
                options: {
                    E: "Interact with many people, including strangers",
                    I: "Interact with a few, known people"
                }
            },
            {
                question: "Are you more of a:",
                options: {
                    S: "Realistic person",
                    N: "Imaginative person"
                }
            },
            {
                question: "Is it worse to:",
                options: {
                    T: "Have your head in the clouds",
                    F: "Be out of touch with your feelings"
                }
            },
            {
                question: "Do you prefer to:",
                options: {
                    J: "Make decisions quickly",
                    P: "Keep your options open"
                }
            },
        ]
    },
    ko: {
        title: "MBTI 성격 유형 검사",
        submitBtn: "결과 확인하기",
        resultTitle: "당신의 MBTI 유형은:",
        alert: "모든 질문에 답해주세요!",
        questions: [
            {
                question: "파티에서 당신은 어떤 편인가요?",
                options: {
                    E: "모르는 사람을 포함해 많은 사람과 어울린다",
                    I: "이미 알고 있는 소수의 사람들과 어울린다"
                }
            },
            {
                question: "당신은 어떤 사람에 더 가깝나요?",
                options: {
                    S: "현실적인 사람",
                    N: "상상력이 풍부한 사람"
                }
            },
            {
                question: "어떤 것이 더 나쁜가요?",
                options: {
                    T: "현실감 없이 뜬구름 잡는 것",
                    F: "감정이 메말라 공감하지 못하는 것"
                }
            },
            {
                question: "결정을 내릴 때 당신의 스타일은?",
                options: {
                    J: "빠르게 결정하고 계획대로 움직인다",
                    P: "상황에 따라 유연하게 대처하기 위해 미룬다"
                }
            },
        ]
    }
};

let currentLang = 'ko'; // Default to Korean
const surveyContainer = document.getElementById('survey-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const mbtiType = document.getElementById('mbti-type');
const mainTitle = document.querySelector('h1');
const resultTitleText = document.querySelector('#result-container h2');

let userAnswers = {};

function renderSurvey() {
    const t = translations[currentLang];
    
    // Update static text
    mainTitle.textContent = t.title;
    submitBtn.textContent = t.submitBtn;
    resultTitleText.textContent = t.resultTitle;

    let surveyHtml = '';
    t.questions.forEach((q, index) => {
        surveyHtml += `
            <div class="question-card" style="animation-delay: ${index * 0.1}s">
                <p class="question-text">Q${index + 1}. ${q.question}</p>
                <div class="options">
        `;
        for (const key in q.options) {
            // Check if this option was previously selected to maintain state during lang switch
            const isChecked = userAnswers[index] === key ? 'checked' : '';
            surveyHtml += `
                <label class="option-label">
                    <input type="radio" name="question${index}" value="${key}" ${isChecked}>
                    <span class="custom-radio"></span>
                    <span class="option-text">${q.options[key]}</span>
                </label>
            `;
        }
        surveyHtml += `
                </div>
            </div>
        `;
    });
    surveyContainer.innerHTML = surveyHtml;

    // Re-attach listeners to new radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const questionIndex = e.target.name.replace('question', '');
            userAnswers[questionIndex] = e.target.value;
        });
    });
}

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

submitBtn.addEventListener('click', () => {
    const t = translations[currentLang];
    if (Object.keys(userAnswers).length < translations[currentLang].questions.length) {
        alert(t.alert);
        return;
    }

    const result = calculateResult();
    mbtiType.textContent = result;
    
    // Fill the hidden input for Formspree
    const hiddenInput = document.getElementById('hidden-mbti');
    if (hiddenInput) hiddenInput.value = result;

    // Simple animation for result
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
});

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
        
        // IMPORTANT: Replace with your actual Formspree ID
        fetch('https://formspree.io/f/xwvldazp', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
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

// Expose toggle function to global scope for HTML button
window.toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    renderSurvey();
    updateLangBtnText();
};

function updateLangBtnText() {
    const btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = currentLang === 'en' ? '한글' : 'English';
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
    updateLangBtnText();
});
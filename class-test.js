const questions = [
    {
        question: "몬스터가 나타났다! 당신의 첫 반응은?",
        options: {
            warrior: "검을 뽑아들고 앞장서서 돌진한다.",
            mage: "뒤로 물러나 약점을 분석하고 주문을 외운다.",
            rogue: "그림자 속으로 숨어 기습할 기회를 노린다.",
            healer: "동료들의 상태를 살피고 보호막을 준비한다."
        }
    },
    {
        question: "당신이 가장 선호하는 무기는?",
        options: {
            warrior: "묵직하고 강력한 대검",
            mage: "마력이 깃든 지팡이",
            rogue: "가볍고 날카로운 단검",
            healer: "신성한 기운이 감도는 메이스"
        }
    },
    {
        question: "파티에서 당신의 역할은 무엇인가요?",
        options: {
            warrior: "내가 모든 공격을 받아낼게! 탱커",
            mage: "한방에 쓸어버리겠어! 광역 딜러",
            rogue: "중요한 목표만 암살한다. 단일 딜러",
            healer: "다치지 마세요! 힐러 및 서포터"
        }
    },
    {
        question: "보물 상자를 발견했다! 어떻게 할까?",
        options: {
            warrior: "함정 따위, 그냥 부숴서 연다.",
            mage: "마법으로 잠금 장치를 해제한다.",
            rogue: "능숙한 손놀림으로 자물쇠를 딴다.",
            healer: "저주가 걸려있지 않은지 정화부터 한다."
        }
    }
];

const surveyContainer = document.getElementById('survey-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const classType = document.getElementById('class-type');
const classDesc = document.getElementById('class-desc');

let userAnswers = {};

function renderSurvey() {
    let surveyHtml = '';
    questions.forEach((q, index) => {
        surveyHtml += `
            <div class="question-card" style="animation-delay: ${index * 0.1}s">
                <p class="question-text">Q${index + 1}. ${q.question}</p>
                <div class="options">
        `;
        for (const key in q.options) {
            surveyHtml += `
                <label class="option-label">
                    <input type="radio" name="question${index}" value="${key}">
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

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const questionIndex = e.target.name.replace('question', '');
            userAnswers[questionIndex] = e.target.value;
        });
    });
}

function calculateResult() {
    const scores = { warrior: 0, mage: 0, rogue: 0, healer: 0 };
    
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }

    // Find the key with the highest score
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}

const resultDescriptions = {
    warrior: {
        title: "용맹한 전사 (Warrior)",
        desc: "당신은 두려움을 모르는 선봉장입니다. 강한 체력과 리더십으로 동료를 이끌며, 어떤 역경에도 굴하지 않고 맞서 싸웁니다."
    },
    mage: {
        title: "지혜로운 마법사 (Mage)",
        desc: "당신은 지식과 마법을 탐구하는 현자입니다. 냉철한 판단력으로 상황을 분석하고, 강력한 한 방으로 전세를 뒤집습니다."
    },
    rogue: {
        title: "날렵한 도적 (Rogue)",
        desc: "당신은 자유롭고 실리적인 전략가입니다. 규칙에 얽매이지 않고 임기응변에 능하며, 누구보다 빠르게 목표를 달성합니다."
    },
    healer: {
        title: "고결한 성직자 (Healer)",
        desc: "당신은 타인을 위하는 따뜻한 마음의 소유자입니다. 팀의 균형을 맞추고 위기 상황에서 모두를 구원하는 없어서는 안 될 존재입니다."
    }
};

submitBtn.addEventListener('click', () => {
    if (Object.keys(userAnswers).length < questions.length) {
        alert("모든 질문에 답해주세요!");
        return;
    }

    const resultKey = calculateResult();
    const resultData = resultDescriptions[resultKey];

    classType.textContent = resultData.title;
    classDesc.textContent = resultData.desc;
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
});
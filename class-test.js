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
    },
    {
        question: "새로운 기술을 배울 기회가 생겼다. 무엇을 배울까?",
        options: {
            warrior: "더 강한 파괴력을 가진 필살기",
            mage: "고대 언어로 된 새로운 주문",
            rogue: "발자국 소리를 없애는 은신술",
            healer: "모두를 한 번에 치유하는 기적"
        }
    },
    {
        question: "강력한 보스 몬스터와의 대결! 당신의 전략은?",
        options: {
            warrior: "보스의 시선을 끌며 정면 승부한다.",
            mage: "멀리서 강력한 마법 폭격을 퍼붓는다.",
            rogue: "보스의 등 뒤로 돌아가 급소를 노린다.",
            healer: "파티원의 체력을 유지하며 버틴다."
        }
    },
    {
        question: "마을에서 휴식을 취할 때 당신은?",
        options: {
            warrior: "대련장에 가서 몸을 푼다.",
            mage: "도서관에서 마법 서적을 읽는다.",
            rogue: "주점에서 정보를 수집(하거나 돈을 딴)한다.",
            healer: "성당이나 신전에서 기도를 드린다."
        }
    },
    {
        question: "모험을 떠나는 이유는 무엇인가요?",
        options: {
            warrior: "나의 힘을 증명하고 명예를 얻기 위해",
            mage: "세상의 모든 지식과 진리를 탐구하기 위해",
            rogue: "엄청난 보물과 부를 얻기 위해",
            healer: "고통받는 사람들을 구원하기 위해"
        }
    },
    {
        question: "길이 막혀있다. 어떻게 할까?",
        options: {
            warrior: "힘으로 장애물을 밀어버린다.",
            mage: "텔레포트 마법으로 건너간다.",
            rogue: "벽을 타고 넘어가거나 개구멍을 찾는다.",
            healer: "지나가는 사람에게 도움을 요청한다."
        }
    },
    {
        question: "선호하는 방어구 스타일은?",
        options: {
            warrior: "전신을 감싸는 튼튼한 판금 갑옷",
            mage: "화려한 문양이 수놓아진 로브",
            rogue: "움직임이 편한 가죽 갑옷",
            healer: "성스러운 기운이 깃든 사제복"
        }
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const classType = document.getElementById('class-type');
const classDesc = document.getElementById('class-desc');
const progressBar = document.getElementById('progress-bar');

function renderSurvey() {
    // Check if finished
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
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

window.selectOption = function(value) {
    if (isTransitioning) return;
    isTransitioning = true;

    userAnswers[currentQuestionIndex] = value;
    
    setTimeout(() => {
        currentQuestionIndex++;
        renderSurvey();
        isTransitioning = false;
    }, 300);
};

function calculateResult() {
    const scores = { warrior: 0, mage: 0, rogue: 0, healer: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
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

function showResult() {
    const resultKey = calculateResult();
    const resultData = resultDescriptions[resultKey];

    // Split title by parenthesis for line break
    if (resultData.title.includes('(')) {
        const parts = resultData.title.split('(');
        const mainText = parts[0].trim();
        const subText = '(' + parts[1];
        classType.innerHTML = `<span class="result-main">${mainText}</span><span class="result-sub">${subText}</span>`;
    } else {
        classType.textContent = resultData.title;
    }

    classDesc.textContent = resultData.desc;
    
    surveyContainer.innerHTML = '';
    progressBar.parentElement.style.display = 'none';
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
});
const questions = [
    {
        question: "아침에 일어나서 가장 먼저 하는 생각은?",
        options: {
            americano: "오늘 할 일이 뭐더라... (계획 확인)",
            latte: "아 조금만 더 자고 싶다... (이불 속 뒹굴)",
            espresso: "빨리 일어나서 움직여야 해! (바로 기상)",
            cappuccino: "오늘 날씨 좋은데 뭐 입지? (기분파)"
        }
    },
    {
        question: "카페에 가서 메뉴를 고를 때 당신은?",
        options: {
            americano: "늘 먹던 걸로 주세요. (아메리카노)",
            latte: "부드럽고 달달한 게 땡겨. (시그니처 라떼)",
            espresso: "카페인 충전이 시급해. (진한 커피)",
            cappuccino: "이 카페에서 제일 예쁜 음료는 뭐죠? (비주얼 중시)"
        }
    },
    {
        question: "친구가 갑자기 약속 시간에 늦는다고 연락했다. 당신의 반응은?",
        options: {
            americano: "알겠어. 얼마나 걸려? (정확한 시간 체크)",
            latte: "괜찮아~ 천천히 와! (너그러움)",
            espresso: "아... 내 시간 낭비... (살짝 짜증)",
            cappuccino: "그럼 나 먼저 구경하고 있을게! (오히려 좋아)"
        }
    },
    {
        question: "주말에 쉬는 방법은?",
        options: {
            americano: "밀린 집안일을 하거나 자기계발을 한다.",
            latte: "집에서 넷플릭스 보며 힐링한다.",
            espresso: "운동을 하거나 활동적인 취미를 즐긴다.",
            cappuccino: "친구들을 만나 수다를 떤다."
        }
    },
    {
        question: "업무나 과제를 처리하는 스타일은?",
        options: {
            americano: "효율적으로 빠르고 정확하게 끝낸다.",
            latte: "여유를 가지고 편안한 환경에서 한다.",
            espresso: "짧은 시간에 엄청난 집중력을 발휘한다.",
            cappuccino: "창의적인 아이디어를 내며 즐겁게 한다."
        }
    },
    {
        question: "선호하는 패션 스타일은?",
        options: {
            americano: "깔끔하고 단정한 미니멀 룩",
            latte: "포근하고 부드러운 니트나 캐주얼 룩",
            espresso: "각이 잡힌 슈트나 시크한 블랙 룩",
            cappuccino: "유니크하고 화려한 포인트 룩"
        }
    },
    {
        question: "좋아하는 영화 장르는?",
        options: {
            americano: "사실 기반의 다큐멘터리나 범죄/스릴러",
            latte: "마음이 따뜻해지는 로맨스나 드라마",
            espresso: "긴장감 넘치는 액션이나 느와르",
            cappuccino: "웃음이 터지는 코미디나 판타지 뮤지컬"
        }
    },
    {
        question: "이상적인 휴가 장소는?",
        options: {
            americano: "볼거리가 많은 유명한 도시 투어",
            latte: "조용한 휴양지 리조트",
            espresso: "새로운 도전이 있는 오지 탐험",
            cappuccino: "사람 많고 활기찬 축제 현장"
        }
    },
    {
        question: "스트레스를 받았을 때 해소법은?",
        options: {
            americano: "원인을 분석하고 해결책을 찾는다.",
            latte: "친한 친구에게 털어놓으며 위로받는다.",
            espresso: "땀 흘리며 운동하거나 매운 음식을 먹는다.",
            cappuccino: "노래방을 가거나 쇼핑을 하며 기분을 푼다."
        }
    },
    {
        question: "자신을 한 단어로 표현한다면?",
        options: {
            americano: "Simple (단순함)",
            latte: "Warm (따뜻함)",
            espresso: "Strong (강인함)",
            cappuccino: "Fun (즐거움)"
        }
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const resultType = document.getElementById('result-type');
const resultDesc = document.getElementById('result-desc');
const progressBar = document.getElementById('progress-bar');

function renderSurvey() {
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
    const scores = { americano: 0, latte: 0, espresso: 0, cappuccino: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
    return Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
}

const resultDescriptions = {
    americano: {
        title: "깔끔한 아메리카노 (Ice Americano)",
        desc: "당신은 실용적이고 깔끔한 성격의 소유자입니다. 복잡한 것보다는 단순하고 명확한 것을 선호하며, 효율성을 중요시합니다. 겉으로는 차가워 보일 수 있지만, 속은 누구보다 깊고 진국인 사람입니다."
    },
    latte: {
        title: "부드러운 라떼 (Soft Latte)",
        desc: "당신은 따뜻하고 배려심 깊은 평화주의자입니다. 갈등을 싫어하고 주변 사람들과 조화롭게 지내는 것을 좋아합니다. 부드러운 우유 거품처럼 주변을 편안하게 만들어주는 매력이 있습니다."
    },
    espresso: {
        title: "강렬한 에스프레소 (Intense Espresso)",
        desc: "당신은 열정적이고 에너지가 넘치는 리더형입니다. 목표가 생기면 뒤돌아보지 않고 직진하며, 강한 집중력을 발휘합니다. 때로는 쓰라린 직언도 서슴지 않지만, 그만큼 확실한 성과를 만들어냅니다."
    },
    cappuccino: {
        title: "톡톡 튀는 카푸치노 (Bubbly Cappuccino)",
        desc: "당신은 사교적이고 호기심 많은 분위기 메이커입니다. 새로운 것을 시도하는 것을 두려워하지 않으며, 거품처럼 톡톡 튀는 매력으로 어디서나 주목받습니다. 당신과 함께라면 지루할 틈이 없습니다."
    }
};

function showResult() {
    const resultKey = calculateResult();
    const resultData = resultDescriptions[resultKey];

    resultType.textContent = resultData.title;
    resultDesc.textContent = resultData.desc;
    
    surveyContainer.innerHTML = '';
    progressBar.parentElement.style.display = 'none';
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
});
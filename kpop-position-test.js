const questions = [
    {
        question: "노래방에 갔을 때 당신의 스타일은?",
        options: {
            vocal: "고음 폭발! 발라드나 가창력 뽐내는 곡 예약",
            dance: "템포 빠른 댄스곡으로 분위기 띄우며 춤춘다",
            leader: "리모컨 잡고 애들 노래 예약해주고 호응 유도한다",
            visual: "사실 노래보단 셀카 찍거나 탬버린 흔드는 게 좋다",
            variety: "웃긴 노래나 성대모사로 모두를 뒤집어 놓는다"
        }
    },
    {
        question: "조별 과제를 할 때 나는?",
        options: {
            vocal: "발표 자료 조사 및 대본 작성 (내용 충실)",
            dance: "PPT 디자인 및 영상 편집 (감각적)",
            leader: "조장 맡아서 일정 관리하고 연락 돌린다",
            visual: "발표 담당 (신뢰감 주는 목소리와 외모)",
            variety: "아이디어 뱅크 & 분위기 메이커 (간식 담당)"
        }
    },
    {
        question: "길을 걷다가 갑자기 넘어졌다! 반응은?",
        options: {
            vocal: "아... 쪽팔려... (조용히 일어나서 아무 일 없는 척)",
            dance: "반사신경으로 낙법을 시도하거나 벌떡 일어난다",
            leader: "주변에 누가 봤나 살피고 다친 데 없나 확인한다",
            visual: "넘어진 모습도 화보처럼... (옷 매무새 정리)",
            variety: "으악! 하고 소리 지르며 넘어져서 친구들을 웃긴다"
        }
    },
    {
        question: "친구들과 여행 갈 때 가장 중요하게 챙기는 것은?",
        options: {
            vocal: "블루투스 스피커와 플레이리스트",
            dance: "편한 신발과 활동성 좋은 옷",
            leader: "상비약, 여행 일정표, 총무 역할",
            visual: "인생샷을 위한 옷들과 고데기, 화장품",
            variety: "보드게임, 마이크, 파티 용품"
        }
    },
    {
        question: "무인도에 딱 하나만 가져갈 수 있다면?",
        options: {
            vocal: "일기장과 펜 (내 감성을 기록해)",
            dance: "맥가이버 칼 (생존을 위한 도구)",
            leader: "무전기 (구조 요청을 위해)",
            visual: "거울 (내 얼굴은 소중하니까)",
            variety: "친구 (심심한 건 못 참아)"
        }
    },
    {
        question: "가장 듣기 좋은 칭찬은?",
        options: {
            vocal: "목소리가 너무 좋아, 꿀보이스야.",
            dance: "너 춤선이 진짜 예쁘다/멋있다.",
            leader: "너랑 있으면 든든하고 믿음직스러워.",
            visual: "와... 진짜 연예인 같다. 너무 잘생겼어/예뻐.",
            variety: "너 때문에 진짜 배꼽 빠지게 웃었어."
        }
    },
    {
        question: "SNS에 사진을 올릴 때 나는?",
        options: {
            vocal: "감성적인 풍경 사진이나 노래 가사 캡션",
            dance: "운동하거나 몸을 움직이는 역동적인 릴스",
            leader: "친구들과 함께 찍은 단체 사진",
            visual: "보정이 완벽한 얼빡샷(셀카)",
            variety: "엽사나 웃긴 짤방, 재미있는 일상 공유"
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
    const scores = { vocal: 0, dance: 0, leader: 0, visual: 0, variety: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
    return Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
}

const resultDescriptions = {
    vocal: {
        title: "🎤 감성 보컬 (Main Vocal)",
        desc: "당신은 팀의 목소리를 담당하는 메인 보컬! 풍부한 감수성과 뛰어난 표현력으로 대중의 마음을 울립니다. 평소엔 조용하다가도 노래만 부르면 눈빛이 변하는 반전 매력의 소유자입니다."
    },
    dance: {
        title: "🕺 퍼포먼스 킹/퀸 (Main Dancer)",
        desc: "당신은 무대를 장악하는 메인 댄서! 타고난 리듬감과 운동 신경으로 시선을 강탈합니다. 말보다는 행동으로 보여주는 스타일이며, 연습벌레로 불릴 만큼 열정적입니다."
    },
    leader: {
        title: "🫡 든든한 리더 (Leader)",
        desc: "당신은 팀의 중심을 잡는 카리스마 리더! 멤버들을 챙기고 이끄는 책임감이 강합니다. 위기 상황에서 침착하게 대처하며, 모두에게 신뢰받는 멘탈 지주 역할을 합니다."
    },
    visual: {
        title: "✨ 확신의 센터상 (Visual Center)",
        desc: "당신은 존재 자체만으로 빛나는 비주얼 센터! 사람을 끌어당기는 매력과 아우라가 있습니다. 카메라가 당신을 사랑하며, 엔딩 요정은 따놓은 당상입니다."
    },
    variety: {
        title: "🤪 해피 바이러스 (Variety Member)",
        desc: "당신은 팀의 입담을 담당하는 예능 특화 멤버! 어디로 튈지 모르는 엉뚱함과 재치로 팬들을 웃게 만듭니다. 친화력이 좋아 예능 프로그램 섭외 1순위입니다."
    }
};

function showResult() {
    const resultKey = calculateResult();
    const resultData = resultDescriptions[resultKey];

    if (resultData.title.includes('(')) {
        const parts = resultData.title.split('(');
        const mainText = parts[0].trim();
        const subText = '(' + parts[1];
        resultType.innerHTML = `<span class="result-main">${mainText}</span><span class="result-sub">${subText}</span>`;
    } else {
        resultType.textContent = resultData.title;
    }

    resultDesc.textContent = resultData.desc;
    
    surveyContainer.innerHTML = '';
    progressBar.parentElement.style.display = 'none';
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
});
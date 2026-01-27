const questions = [
    {
        question: "게임이 시작되었습니다. 당신이 가장 선호하는 라인(위치)은?",
        options: {
            top: "나만의 섬, 탑(Top)에서 묵묵히 성장한다.",
            jungle: "맵 전체를 누비며 판을 설계하는 정글(Jungle).",
            mid: "화려한 피지컬로 중앙을 지배하는 미드(Mid).",
            adc: "팀의 후반 캐리를 담당하는 원딜(ADC).",
            support: "팀원을 보호하고 시야를 밝히는 서포터(Support)."
        }
    },
    {
        question: "적 챔피언과 1:1로 마주쳤다! 당신의 선택은?",
        options: {
            top: "도망치지 않는다. 맞서 싸워 힘으로 제압한다.",
            jungle: "주변 지형지물을 이용해 기습하거나 빠진다.",
            mid: "스킬 콤보를 쏟아부어 순식간에 녹인다.",
            adc: "거리를 유지하며 카이팅(Hit & Run) 한다.",
            support: "일단 핑을 찍어 아군을 부르고 버틴다."
        }
    },
    {
        question: "한타(대규모 전투)가 벌어졌다. 당신의 포지션은?",
        options: {
            top: "맨 앞에서 적진 한가운데로 파고든다.",
            jungle: "적의 뒤나 옆을 노려 핵심 딜러를 문다.",
            mid: "광역 스킬로 다수의 적에게 큰 피해를 입힌다.",
            adc: "가장 안전한 뒤쪽에서 지속적으로 딜을 넣는다.",
            support: "아군 딜러 옆에서 적의 진입을 차단하고 힐을 준다."
        }
    },
    {
        question: "당신이 생각하는 승리의 1등 공신은?",
        options: {
            top: "상대 탑을 박살내고 고속도로를 뚫은 나.",
            jungle: "모든 라인을 터트리고 다닌 나.",
            mid: "압도적인 딜량으로 상대를 찍어누른 나.",
            adc: "끝까지 살아남아 넥서스를 깬 나.",
            support: "완벽한 시야 장악과 이니시에이팅을 한 나."
        }
    },
    {
        question: "아군이 실수를 해서 죽었다. 당신의 반응은?",
        options: {
            top: "묵묵히 내 할 일(cs 먹기)을 한다.",
            jungle: "다른 이득을 챙기러 반대편 정글로 간다.",
            mid: "\"아...\" 탄식을 내뱉지만 채팅은 참는다.",
            adc: "\"서폿 뭐함?\" (속으로 생각하거나 말하거나)",
            support: "\"괜찮아요!\"라며 멘탈을 케어해준다."
        }
    },
    {
        question: "가장 듣기 좋은 칭찬은?",
        options: {
            top: "\"탑 차이 오지네\"",
            jungle: "\"동선 미쳤다\"",
            mid: "\"캐리 머신 그 자체\"",
            adc: "\"딜량 실화냐?\"",
            support: "\"서폿님이 사람 만들었네\""
        }
    },
    {
        question: "불리한 상황, 역전의 발판을 마련하려면?",
        options: {
            top: "사이드 운영으로 적을 분산시킨다.",
            jungle: "바론이나 용 스틸을 노린다.",
            mid: "상대 핵심 챔피언을 끊어먹는다.",
            adc: "풀템이 나올 때까지 악착같이 버틴다.",
            support: "기적 같은 이니시에이팅 각을 본다."
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
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    let surveyHtml = "
        <div class=\"question-card fade-in\">
            <p class=\"question-text\">Q" + (currentQuestionIndex + 1) + ". " + q.question + "</p>
            <div class=\"options\">
    ";
    
    // Shuffle options to not always show positions in same order? 
    // Maybe keeps it ordered for consistency in logic, but UI-wise random might be better.
    // For now, keep fixed order as defined in object keys (usually insertion order).
    
    for (const key in q.options) {
        surveyHtml += "
            <label class=\"option-label\" onclick=\"selectOption('\"" + key + "\"')\">
                <input type=\"radio\" name=\"question\" value=\"" + key + "\">
                <span class=\"custom-radio\"></span>
                <span class=\"option-text\">" + q.options[key] + "</span>
            </label>
        ";
    }
    
    surveyHtml += "
            </div>
        </div>
    ";
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
    const scores = { top: 0, jungle: 0, mid: 0, adc: 0, support: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
    // Return key with max value
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}

const resultDescriptions = {
    top: {
        title: "고독한 전사 (Top Laner)",
        desc: "당신은 RPG에서 '탱커'나 '브루저'가 제격입니다. 든든한 맷집과 강력한 한 방으로 팀의 방패가 되어주며, 혼자서도 난관을 헤쳐나가는 강인한 정신력을 가졌습니다. (대표 챔피언: 가렌, 다리우스)"
    },
    jungle: {
        title: "전장의 지휘자 (Jungler)",
        desc: "당신은 RPG에서 '암살자'나 '전략가'가 어울립니다. 전체적인 흐름을 읽고 적재적소에 개입하여 판을 유리하게 만드는 능력이 탁월합니다. (대표 챔피언: 리 신, 비에고)"
    },
    mid: {
        title: "화려한 마법사 (Mid Laner)",
        desc: "당신은 RPG에서 '마법사'나 '누커'입니다. 팀의 중심에서 압도적인 화력으로 적들을 쓸어버리는 주인공 기질을 가지고 있습니다. 피지컬과 판단력이 모두 뛰어납니다. (대표 챔피언: 아리, 페이커...아니 르블랑)"
    },
    adc: {
        title: "냉철한 명사수 (ADC)",
        desc: "당신은 RPG에서 '궁수'나 '건너'입니다. 초반엔 약할지라도 꾸준한 성장을 통해 결국 최강의 딜러로 거듭납니다. 중요한 순간에 엄청난 집중력을 발휘합니다. (대표 챔피언: 징크스, 애쉬)"
    },
    support: {
        title: "성스러운 수호자 (Support)",
        desc: "당신은 RPG에서 '힐러'나 '버퍼'입니다. 자신의 희생을 통해 팀을 승리로 이끄는 숨은 영웅입니다. 넓은 시야와 따뜻한 마음씨로 파티의 멘탈과 체력을 모두 책임집니다. (대표 챔피언: 소라카, 쓰레쉬)"
    }
};

function showResult() {
    const resultKey = calculateResult();
    const resultData = resultDescriptions[resultKey];

    // Split title by parenthesis for line break styling if needed
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

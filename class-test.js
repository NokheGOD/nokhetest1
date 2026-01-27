const translations = {
    ko: {
        title: "롤 캐릭터 테스트",
        resultTitle: "당신의 롤 캐릭터는:",
        questions: [
            {
                question: "새로운 팀 프로젝트를 시작할 때, 당신의 모습은?",
                options: {
                    garen: "팀의 기강을 잡고 정해진 규칙대로 이끈다.",
                    ahri: "사람들의 반응을 살피며 유연하게 분위기를 주도한다.",
                    yasuo: "나에게 주어진 역할만 완벽하게 수행하고 싶다.",
                    lux: "긍정적인 에너지를 전하며 모두가 즐겁게 일하도록 돕는다.",
                    zed: "가장 빠르고 효율적으로 목표를 달성할 방법을 찾는다.",
                    soraka: "팀원들이 힘들어하는 부분은 없는지 챙기며 돕는다."
                }
            },
            {
                question: "갈등 상황이 발생했을 때 당신의 대처법은?",
                options: {
                    garen: "무엇이 옳고 그른지 명확히 따져서 해결한다.",
                    ahri: "적절한 타협안을 제시하며 상황을 부드럽게 넘긴다.",
                    yasuo: "복잡한 건 딱 질색, 그냥 내 방식대로 밀고 나간다.",
                    lux: "웃음으로 분위기를 풀며 화해를 유도한다.",
                    zed: "감정은 배제하고 문제의 근본적인 원인부터 제거한다.",
                    soraka: "상대방의 마음을 먼저 위로하고 이야기를 들어준다."
                }
            },
            {
                question: "주말을 보내는 가장 선호하는 방식은?",
                options: {
                    garen: "규칙적인 생활을 유지하며 자기계발을 한다.",
                    ahri: "사람들과 어울리며 즐거운 시간을 보낸다.",
                    yasuo: "혼자만의 공간에서 방해받지 않고 자유를 즐긴다.",
                    lux: "밝은 야외에서 새로운 경험을 하며 에너지를 얻는다.",
                    zed: "철저한 계획 하에 목표했던 취미 활동을 끝낸다.",
                    soraka: "편안한 환경에서 누군가를 돕거나 봉사하며 보람을 느낀다."
                }
            },
            {
                question: "누군가 당신에게 무리한 부탁을 한다면?",
                options: {
                    garen: "내 원칙에 어긋난다면 단호하게 거절한다.",
                    ahri: "기분 나쁘지 않게 돌려서 거절하거나 조건을 붙인다.",
                    yasuo: "대답할 가치도 없다고 느끼면 무시한다.",
                    lux: "최대한 도와주려 노력하지만, 안 되면 미안해한다.",
                    zed: "나에게 득이 되는지 실이 되는지 따져보고 결정한다.",
                    soraka: "내가 조금 힘들더라도 상대를 위해 기꺼이 수락한다."
                }
            },
            {
                question: "성공을 위해 가장 중요한 덕목은 무엇이라고 생각하나?",
                options: {
                    garen: "흔들리지 않는 신념과 정의감",
                    ahri: "상황을 읽는 통찰력과 매력",
                    yasuo: "누구도 따라올 수 없는 압도적인 실력",
                    lux: "함께하는 사람들과의 소통과 긍정",
                    zed: "감정에 휘둘리지 않는 냉철한 결단력",
                    soraka: "타인을 향한 헌신과 포용력"
                }
            }
        ],
        results: {
            garen: {
                title: "데마시아의 힘, 가렌 (Garen)",
                desc: "당신은 정의롭고 우직하며, 자신의 신념을 끝까지 지키는 강직한 성격입니다. 규칙과 원칙을 중시하며, 공동체를 위해 헌신하는 리더 타입입니다."
            },
            ahri: {
                title: "구미호, 아리 (Ahri)",
                desc: "당신은 매력적이고 사교적이며, 어떤 상황에서도 유연하게 대처하는 능력이 탁월합니다. 독립적인 성향이 강하면서도 주변 사람들을 매료시키는 힘을 가졌습니다."
            },
            yasuo: {
                title: "용서받지 못한 자, 야스오 (Yasuo)",
                desc: "당신은 자유로운 영혼의 소유자이며, 타인의 시선보다는 자신의 길을 묵묵히 가는 스타일입니다. 고독을 즐길 줄 알며 실력으로 자신을 증명하는 타입입니다."
            },
            lux: {
                title: "광명의 소녀, 럭스 (Lux)",
                desc: "당신은 밝고 긍정적인 에너지를 가진 팀의 활력소입니다. 어려운 상황에서도 희망을 잃지 않으며, 사람들을 화합하게 만드는 특별한 재능이 있습니다."
            },
            zed: {
                title: "그림자의 주인, 제드 (Zed)",
                desc: "당신은 매우 효율적이고 냉철한 전략가입니다. 불필요한 감정 소모를 싫어하며, 목표를 위해서라면 과감하게 행동하고 결과를 만들어내는 능력자입니다."
            },
            soraka: {
                title: "별의 아이, 소라카 (Soraka)",
                desc: "당신은 따뜻한 마음과 깊은 공감 능력을 가진 치유자 타입입니다. 타인의 고통을 외면하지 못하며, 자신을 희생해서라도 소중한 사람들을 지키려 노력합니다."
            }
        }
    },
    en: {
        title: "LoL Character Personality Test",
        resultTitle: "Your LoL Character is:",
        questions: [
            {
                question: "When starting a new team project, how do you act?",
                options: {
                    garen: "Establish discipline and lead by the rules.",
                    ahri: "Read the room and lead the atmosphere flexibly.",
                    yasuo: "Focus solely on performing my role perfectly.",
                    lux: "Spread positive energy to help everyone enjoy work.",
                    zed: "Find the most efficient way to achieve the goal quickly.",
                    soraka: "Check on teammates and help those who are struggling."
                }
            },
            {
                question: "How do you handle conflict?",
                options: {
                    garen: "Determine clearly what is right and wrong.",
                    ahri: "Propose a compromise and smooth things over.",
                    yasuo: "I hate complications; I just do it my way.",
                    lux: "Use humor to lighten the mood and encourage reconciliation.",
                    zed: "Exclude emotions and remove the root cause.",
                    soraka: "Comfort the other person first and listen to them."
                }
            },
            {
                question: "What is your preferred way to spend a weekend?",
                options: {
                    garen: "Maintain a regular schedule and self-improve.",
                    ahri: "Hang out with people and have a good time.",
                    yasuo: "Enjoy freedom alone in my own space.",
                    lux: "Get energy from new experiences outdoors.",
                    zed: "Finish planned hobbies under a strict schedule.",
                    soraka: "Feel rewarded by helping others or volunteering."
                }
            },
            {
                question: "If someone asks for an unreasonable favor?",
                options: {
                    garen: "Refuse firmly if it goes against my principles.",
                    ahri: "Politely decline or attach conditions.",
                    yasuo: "Ignore it if it's not worth answering.",
                    lux: "Try to help, but feel bad if I can't.",
                    zed: "Weigh the pros and cons before deciding.",
                    soraka: "Accept it willingly for them, even if it's hard for me."
                }
            },
            {
                question: "What is the most important virtue for success?",
                options: {
                    garen: "Unwavering conviction and justice",
                    ahri: "Insight and charm to read the situation",
                    yasuo: "Overwhelming skill that no one can match",
                    lux: "Communication and positivity with others",
                    zed: "Cold decision-making without emotion",
                    soraka: "Dedication and tolerance for others"
                }
            }
        ],
        results: {
            garen: {
                title: "The Might of Demacia, Garen",
                desc: "You are righteous and honest, sticking to your beliefs. A leader type who values rules and principles and dedicates themselves to the community."
            },
            ahri: {
                title: "The Nine-Tailed Fox, Ahri",
                desc: "You are charming and social, with excellent adaptability. You have a strong independent streak but also the power to captivate those around you."
            },
            yasuo: {
                title: "The Unforgiven, Yasuo",
                desc: "You are a free spirit who walks your own path regardless of others' views. You know how to enjoy solitude and prove yourself through skill."
            },
            lux: {
                title: "The Lady of Luminosity, Lux",
                desc: "You are the team's energizer, bright and positive. You never lose hope in difficult situations and have a special talent for bringing people together."
            },
            zed: {
                title: "The Master of Shadows, Zed",
                desc: "You are a highly efficient and cold strategist. You dislike unnecessary emotional expenditure and act boldly to achieve results."
            },
            soraka: {
                title: "The Starchild, Soraka",
                desc: "You are a healer with a warm heart and deep empathy. You cannot ignore others' pain and try to protect your loved ones even at your own sacrifice."
            }
        }
    }
};

let currentLang = 'ko';
let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const classType = document.getElementById('class-type');
const classDesc = document.getElementById('class-desc');
const progressBar = document.getElementById('progress-bar');
const mainTitle = document.querySelector('header h1');
const subTitle = document.querySelector('header .subtitle');
const resultTitleHeader = document.querySelector('#result-container h2');

function renderSurvey() {
    const t = translations[currentLang];
    
    // Update Header Text
    if(mainTitle) mainTitle.textContent = t.title;
    if(resultTitleHeader) resultTitleHeader.textContent = t.resultTitle;
    
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
    const scores = { garen: 0, ahri: 0, yasuo: 0, lux: 0, zed: 0, soraka: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}

function showResult() {
    const t = translations[currentLang];
    const resultKey = calculateResult();
    const resultData = t.results[resultKey];

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

window.toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
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
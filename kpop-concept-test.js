const translations = {
    ko: {
        "nav-tests": "테스트 ▾",
        "nav-mbti": "MBTI 성격 검사",
        "nav-coffee": "커피 성격 테스트",
        "nav-sns": "SNS 성격 테스트",
        "nav-kpop-pos": "K-POP 포지션 테스트",
        "nav-kpop-con": "데뷔 컨셉 테스트",
        "nav-blog": "블로그",
        "nav-contact": "문의하기",
        "footer-contact": "문의하기",
        title: "데뷔 컨셉 테스트",
        subtitle: "무대 위 당신은 어떤 분위기일까요?",
        resultTitle: "당신의 데뷔 컨셉은:",
        "retry-btn": "다시 테스트하기",
        "other-test-btn": "✨ 다른 테스트 보러 가기",
        questions: [
            {
                question: "가장 좋아하는 계절과 날씨는?",
                options: {
                    refreshing: "햇살 쨍쨍하고 바람 시원한 초여름",
                    crush: "비가 오거나 흐린 센치한 가을 밤",
                    dreamy: "안개 낀 새벽이나 별이 쏟아지는 겨울 밤",
                    lovely: "꽃이 만개하는 따뜻한 봄날 오후"
                }
            },
            {
                question: "옷장을 열었을 때 가장 많은 색깔은?",
                options: {
                    refreshing: "흰색, 파란색, 데님 계열 (Clean)",
                    crush: "검정색, 가죽, 짙은 레드 (Chic)",
                    dreamy: "보라색, 파스텔톤, 홀로그램 (Mystic)",
                    lovely: "핑크, 노랑, 밝은 베이지 (Cute)"
                }
            },
            {
                question: "카페에서 주문하고 싶은 음료는?",
                options: {
                    refreshing: "톡 쏘는 블루 레몬 에이드",
                    crush: "진하고 쌉싸름한 에스프레소나 흑맥주",
                    dreamy: "색이 변하는 오로라 티",
                    lovely: "휘핑크림 잔뜩 올라간 딸기 스무디"
                }
            },
            {
                question: "좋아하는 영화 장르는?",
                options: {
                    refreshing: "청춘 성장물이나 스포츠 영화",
                    crush: "액션, 스릴러, 느와르",
                    dreamy: "판타지, SF, 미스터리",
                    lovely: "로맨틱 코미디, 애니메이션"
                }
            },
            {
                question: "선호하는 향기 스타일은?",
                options: {
                    refreshing: "시트러스(감귤)나 쿨 워터 향",
                    crush: "우디(나무)나 머스크, 가죽 향",
                    dreamy: "라벤더, 몽환적인 인센스 향",
                    lovely: "달콤한 과일이나 플로럴(꽃) 향"
                }
            },
            {
                question: "파티에 초대받았다! 당신의 역할은?",
                options: {
                    refreshing: "신나는 음악 틀고 분위기 띄우는 DJ",
                    crush: "구석에서 멋있게 칵테일 마시며 관망",
                    dreamy: "조용히 사라졌다가 의외의 장소에서 발견됨",
                    lovely: "사람들에게 선물 나눠주고 사진 찍어주기"
                }
            },
            {
                question: "가장 끌리는 단어는?",
                options: {
                    refreshing: "Energy (에너지)",
                    crush: "Power (파워)",
                    dreamy: "Secret (비밀)",
                    lovely: "Sweet (달콤함)"
                }
            }
        ],
        results: {
            refreshing: {
                title: "🌊 청량 하이틴 (Refreshing High-teen)",
                desc: "당신은 보기만 해도 기분이 좋아지는 인간 이온음료! 푸른 하늘과 학교 운동장이 떠오르는 청량한 에너지가 가득합니다. 당신의 미소는 팬들의 더위를 날려버릴 거예요."
            },
            crush: {
                title: "🔥 걸크러쉬/다크 (Girl/Boy Crush)",
                desc: "당신은 무대를 씹어먹는 카리스마의 소유자! 강렬한 퍼포먼스와 시크한 표정으로 팬들의 심장을 저격합니다. '멋있다'는 말이 가장 잘 어울리는 압도적인 존재감입니다."
            },
            dreamy: {
                title: "🔮 몽환 신비주의 (Dreamy/Mystic)",
                desc: "당신은 알 수 없는 매력으로 호기심을 자극하는 신비주의 컨셉! 몽환적인 눈빛과 우아한 춤선이 특징입니다. 판타지 소설 속 주인공 같은 분위기로 덕후들을 끌어모읍니다."
            },
            lovely: {
                title: "🍭 큐티 러블리 (Cute/Lovely)",
                desc: "당신은 숨만 쉬어도 귀여운 모태 아이돌! 사탕처럼 달콤하고 사랑스러운 매력으로 모두를 무장해제 시킵니다. '주머니에 넣고 다니고 싶다'는 말을 밥 먹듯이 듣겠네요."
            }
        }
    },
    en: {
        "nav-tests": "TESTS ▾",
        "nav-mbti": "MBTI Personality Test",
        "nav-coffee": "Coffee Personality Test",
        "nav-sns": "SNS Personality Test",
        "nav-kpop-pos": "K-POP Position Test",
        "nav-kpop-con": "Debut Concept Test",
        "nav-blog": "BLOG",
        "nav-contact": "CONTACT",
        "footer-contact": "Contact Us",
        title: "Debut Concept Test",
        subtitle: "What would be your vibe on stage?",
        resultTitle: "Your Debut Concept is:",
        "retry-btn": "Retry",
        "other-test-btn": "✨ Check other tests",
        questions: [
            {
                question: "Favorite season and weather?",
                options: {
                    refreshing: "Sunny and breezy early summer.",
                    crush: "Rainy or cloudy sentimental autumn night.",
                    dreamy: "Foggy dawn or starry winter night.",
                    lovely: "Warm spring afternoon with flowers blooming."
                }
            },
            {
                question: "Most dominant color in your wardrobe?",
                options: {
                    refreshing: "White, Blue, Denim (Clean).",
                    crush: "Black, Leather, Deep Red (Chic).",
                    dreamy: "Purple, Pastel, Hologram (Mystic).",
                    lovely: "Pink, Yellow, Bright Beige (Cute)."
                }
            },
            {
                question: "Drink you want to order at a cafe?",
                options: {
                    refreshing: "Sparkling Blue Lemonade.",
                    crush: "Rich Espresso or Dark Beer.",
                    dreamy: "Color-changing Aurora Tea.",
                    lovely: "Strawberry Smoothie with whipped cream."
                }
            },
            {
                question: "Favorite movie genre?",
                options: {
                    refreshing: "Youth coming-of-age or Sports.",
                    crush: "Action, Thriller, Noir.",
                    dreamy: "Fantasy, Sci-Fi, Mystery.",
                    lovely: "Romantic Comedy, Animation."
                }
            },
            {
                question: "Preferred scent style?",
                options: {
                    refreshing: "Citrus or Cool Water.",
                    crush: "Woody, Musk, Leather.",
                    dreamy: "Lavender, Dreamy Incense.",
                    lovely: "Sweet Fruit or Floral."
                }
            },
            {
                question: "Invited to a party! Your role?",
                options: {
                    refreshing: "DJ playing exciting music.",
                    crush: "Watching coolly from the corner with a cocktail.",
                    dreamy: "Quietly disappearing and found in unexpected places.",
                    lovely: "Giving gifts and taking photos for people."
                }
            },
            {
                question: "Word you are most drawn to?",
                options: {
                    refreshing: "Energy",
                    crush: "Power",
                    dreamy: "Secret",
                    lovely: "Sweet"
                }
            }
        ],
        results: {
            refreshing: {
                title: "🌊 Refreshing High-teen",
                desc: "You are a human sports drink that makes people feel good just by looking! Full of refreshing energy like blue sky and school playground. Your smile will blow away the heat."
            },
            crush: {
                title: "🔥 Girl/Boy Crush",
                desc: "You have charisma that devours the stage! You snipe fans' hearts with intense performance and chic expressions. An overwhelming presence that fits the word 'Cool'."
            },
            dreamy: {
                title: "🔮 Dreamy/Mystic",
                desc: "You stimulate curiosity with unknown charm! Dreamy eyes and elegant dance lines are characteristic. You attract fans with an atmosphere like a fantasy novel protagonist."
            },
            lovely: {
                title: "🍭 Cute/Lovely",
                desc: "You are a born idol just by breathing! You disarm everyone with sweet and lovely charm like candy. You must hear 'I want to put you in my pocket' all the time."
            }
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentQuestionIndex = 0;
let userAnswers = {};
let isTransitioning = false;

const surveyContainer = document.getElementById('survey-container');
const resultContainer = document.getElementById('result-container');
const resultType = document.getElementById('result-type');
const resultDesc = document.getElementById('result-desc');
const progressBar = document.getElementById('progress-bar');
const langBtn = document.getElementById('lang-toggle');
const root = document.documentElement;

// Initialize language
document.documentElement.setAttribute('lang', currentLang);

function updateUIText(lang) {
    const t = translations[lang];
    
    // Update Text Content for data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update Lang Button
    if(langBtn) langBtn.textContent = lang === 'en' ? 'KR' : 'EN';
}

function renderSurvey() {
    const t = translations[currentLang];

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
    const scores = { refreshing: 0, crush: 0, dreamy: 0, lovely: 0 };
    for (const key in userAnswers) {
        scores[userAnswers[key]]++;
    }
    return Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
}

function showResult() {
    const t = translations[currentLang];
    const resultKey = calculateResult();
    const resultData = t.results[resultKey];

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

window.toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    root.setAttribute('lang', currentLang);
    
    updateUIText(currentLang);
    renderSurvey();
};

function updateLangBtnText() {
    const btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = currentLang === 'en' ? 'KR' : 'EN';
}

document.addEventListener('DOMContentLoaded', () => {
    updateUIText(currentLang);
    renderSurvey();
});

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
        title: "SNS 성격 테스트",
        subtitle: "나의 소통 스타일로 알아보는 SNS 유형 테스트",
        resultTitle: "당신의 SNS 유형은:",
        "retry-btn": "다시 테스트하기",
        "other-test-btn": "✨ 다른 테스트 보러 가기",
        questions: [
            {
                question: "맛있는 음식을 먹으러 갔을 때 나는?",
                options: {
                    insta: "일단 사진부터 예쁘게 찍어서 스토리에 올린다.",
                    twitter: "가게 이름이랑 맛 평가를 짧고 굵게 남긴다.",
                    linkedin: "이 식당의 비즈니스 모델이나 서비스 방식을 분석한다.",
                    tiktok: "먹방 영상을 찍거나 재미있는 챌린지를 시도한다."
                }
            },
            {
                question: "내가 선호하는 정보 습득 방식은?",
                options: {
                    insta: "감각적인 이미지와 짧은 글",
                    twitter: "실시간 트렌드와 사람들의 솔직한 반응",
                    linkedin: "전문적인 인사이트와 커리어 관련 뉴스",
                    tiktok: "짧고 강렬한 숏폼 영상"
                }
            },
            {
                question: "새로운 사람을 만났을 때 나는?",
                options: {
                    insta: "서로의 계정을 팔로우하고 '좋아요'를 누른다.",
                    twitter: "관심사가 맞는지 덕질 토크를 해본다.",
                    linkedin: "명함을 교환하거나 하는 일을 물어본다.",
                    tiktok: "함께 유행하는 챌린지를 찍자고 제안한다."
                }
            },
            {
                question: "나에게 '성공'이란?",
                options: {
                    insta: "남들에게 부러움을 사는 멋진 라이프스타일",
                    twitter: "내 의견에 공감해주는 수많은 리트윗",
                    linkedin: "업계에서 인정받는 전문성과 네트워크",
                    tiktok: "전 세계적으로 터지는 바이럴과 인기도"
                }
            },
            {
                question: "가장 선호하는 콘텐츠 형식은?",
                options: {
                    insta: "감성적인 사진이나 릴스",
                    twitter: "짧고 간결한 텍스트",
                    linkedin: "깊이 있는 칼럼이나 기사",
                    tiktok: "중독성 있는 음악이 깔린 댄스/유머 영상"
                }
            },
            {
                question: "유행하는 밈(Meme)을 봤을 때 반응은?",
                options: {
                    insta: "빠르게 확인하고 친구들을 태그한다.",
                    twitter: "그 밈에 대해 비평하거나 드립을 친다.",
                    linkedin: "이 밈이 마케팅적으로 왜 성공했는지 분석한다.",
                    tiktok: "당장 그 밈을 활용해 나만의 영상을 만든다."
                }
            },
            {
                question: "주말에 특별한 활동을 했다면?",
                options: {
                    insta: "가장 잘 나온 사진 한 장을 보정해서 올린다.",
                    twitter: "오늘 있었던 황당하거나 웃긴 일을 썰로 푼다.",
                    linkedin: "이번 활동이 나에게 어떤 영감을 주었는지 기록한다.",
                    tiktok: "활동 과정을 짧은 브이로그로 편집해 올린다."
                }
            },
            {
                question: "악플이나 부정적인 반응을 대처하는 법은?",
                options: {
                    insta: "조용히 차단하고 신경 쓰지 않는다.",
                    twitter: "인용 알티로 박제하고 조리돌림한다.",
                    linkedin: "정중하고 논리적으로 대응하거나 무시한다.",
                    tiktok: "그 반응조차 콘텐츠로 만들어 유쾌하게 받아친다."
                }
            },
            {
                question: "가장 자주 쓰는 이모지는?",
                options: {
                    insta: "✨, 💖, 🔥 (감성, 하트)",
                    twitter: "💀, 😭, 🤣 (해골, 오열)",
                    linkedin: "🤝, 📈, 👏 (악수, 상승, 박수)",
                    tiktok: "👀, 💃, 🤪 (눈치, 춤, 익살)"
                }
            },
            {
                question: "SNS를 하는 가장 큰 이유는?",
                options: {
                    insta: "나의 개성을 표현하고 기록하기 위해",
                    twitter: "사람들과 소통하고 정보를 얻기 위해",
                    linkedin: "커리어를 개발하고 기회를 찾기 위해",
                    tiktok: "심심함을 달래고 즐거움을 얻기 위해"
                }
            }
        ],
        results: {
            insta: {
                title: "감성 힙스터 '인스타그램' (Instagram)",
                desc: "당신은 시각적인 아름다움과 트렌드에 민감한 사람입니다. 자신의 일상을 멋지게 기록하고 공유하는 것을 즐기며, 보여지는 이미지를 중요하게 생각합니다. 센스 있다는 소리를 자주 듣는 편이시군요!"
            },
            twitter: {
                title: "솔직한 트렌드세터 'X (Twitter)'",
                desc: "당신은 자신의 생각과 감정을 거침없이 표현하는 사람입니다. 유머 감각이 뛰어나고, 관심 있는 분야에는 깊게 파고드는 덕후 기질이 있습니다. 실시간 소통과 정보 공유에 빠르시네요!"
            },
            linkedin: {
                title: "프로페셔널 야망가 '링크드인' (LinkedIn)",
                desc: "당신은 자신의 커리어와 성장을 중요시하는 목표 지향적인 사람입니다. 논리적이고 분석적이며, 인맥 관리와 자기 계발에 철저합니다. 성공을 위해 끊임없이 노력하는 모습이 멋집니다."
            },
            tiktok: {
                title: "에너지 넘치는 인싸 '틱톡' (TikTok)",
                desc: "당신은 넘치는 끼와 흥을 주체할 수 없는 분위기 메이커입니다. 짧고 강렬한 재미를 추구하며, 유행을 따르기보다 만드는 것을 좋아합니다. 창의적이고 활동적인 당신은 어디서나 주인공!"
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
        title: "SNS Personality Test",
        subtitle: "Find your SNS style based on your communication habits",
        resultTitle: "Your SNS Type is:",
        "retry-btn": "Retry",
        "other-test-btn": "✨ Check other tests",
        questions: [
            {
                question: "When you go to eat delicious food?",
                options: {
                    insta: "Take a pretty picture first and post it on story.",
                    twitter: "Leave a short, bold review of the taste.",
                    linkedin: "Analyze the restaurant's business model.",
                    tiktok: "Film a mukbang or try a fun challenge."
                }
            },
            {
                question: "Preferred way to get information?",
                options: {
                    insta: "Aesthetic images and short text.",
                    twitter: "Real-time trends and honest reactions.",
                    linkedin: "Professional insights and career news.",
                    tiktok: "Short, intense short-form videos."
                }
            },
            {
                question: "When meeting someone new?",
                options: {
                    insta: "Follow each other and hit 'Like'.",
                    twitter: "Check if fandoms match and talk about interests.",
                    linkedin: "Exchange business cards or ask what they do.",
                    tiktok: "Suggest filming a trending challenge together."
                }
            },
            {
                question: "What is 'Success' to you?",
                options: {
                    insta: "A cool lifestyle that others envy.",
                    twitter: "Numerous retweets agreeing with my opinion.",
                    linkedin: "Recognized expertise and network in the industry.",
                    tiktok: "Global virality and popularity."
                }
            },
            {
                question: "Preferred content format?",
                options: {
                    insta: "Emotional photos or Reels.",
                    twitter: "Short and concise text.",
                    linkedin: "In-depth columns or articles.",
                    tiktok: "Dance/Humor videos with addictive music."
                }
            },
            {
                question: "Reaction to a trending meme?",
                options: {
                    insta: "Check quickly and tag friends.",
                    twitter: "Critique it or make a joke about it.",
                    linkedin: "Analyze why it succeeded in marketing.",
                    tiktok: "Use it immediately to make my own video."
                }
            },
            {
                question: "Special weekend activity?",
                options: {
                    insta: "Edit and post the best photo.",
                    twitter: "Tell a funny story about what happened.",
                    linkedin: "Record what inspiration I got.",
                    tiktok: "Edit and post a short vlog."
                }
            },
            {
                question: "Dealing with negative comments?",
                options: {
                    insta: "Quietly block and ignore.",
                    twitter: "Quote retweet and shame them.",
                    linkedin: "Respond politely and logically or ignore.",
                    tiktok: "Turn even that into content and joke back."
                }
            },
            {
                question: "Most frequently used emoji?",
                options: {
                    insta: "✨, 💖, 🔥 (Aesthetic, Heart)",
                    twitter: "💀, 😭, 🤣 (Skull, Sob, Rofl)",
                    linkedin: "🤝, 📈, 👏 (Handshake, Chart, Clap)",
                    tiktok: "👀, 💃, 🤪 (Side-eye, Dance, Zany)"
                }
            },
            {
                question: "Biggest reason for using SNS?",
                options: {
                    insta: "To express and record my individuality.",
                    twitter: "To communicate and get information.",
                    linkedin: "To develop career and find opportunities.",
                    tiktok: "To cure boredom and have fun."
                }
            }
        ],
        results: {
            insta: {
                title: "Aesthetic Hipster 'Instagram'",
                desc: "You are sensitive to visual beauty and trends. You enjoy recording and sharing your daily life nicely, and value the image shown. You often hear that you have good sense!"
            },
            twitter: {
                title: "Honest Trendsetter 'X (Twitter)'",
                desc: "You express your thoughts and feelings without hesitation. You have a great sense of humor and dig deep into interests. You are fast at real-time communication!"
            },
            linkedin: {
                title: "Professional Ambitious 'LinkedIn'",
                desc: "You are goal-oriented and value career growth. Logical and analytical, you are thorough in networking and self-development. Your effort for success is admirable."
            },
            tiktok: {
                title: "Energetic Insider 'TikTok'",
                desc: "You are a mood maker with uncontrollable talent and excitement. You pursue short, intense fun and prefer making trends over following them. Creative and active, you are the protagonist!"
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

    // Static text update (optional now)
    // if(mainTitle) mainTitle.textContent = t.title;
    // if(resultTitleHeader) resultTitleHeader.textContent = t.resultTitle;

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
    const scores = { insta: 0, twitter: 0, linkedin: 0, tiktok: 0 };
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

    initShareButtons(`나의 SNS 유형은 ${resultData.title.split('(')[0].trim()}! 📱`, window.location.href);
}

window.toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    root.setAttribute('lang', currentLang);
    
    updateUIText(currentLang);
    renderSurvey();
};

function updateLangBtnText() {
    // Redundant but keeping for safety
    const btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = currentLang === 'en' ? 'KR' : 'EN';
}

document.addEventListener('DOMContentLoaded', () => {
    updateUIText(currentLang);
    renderSurvey();
});

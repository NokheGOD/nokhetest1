// SNS 공유 기능 유틸리티
function initShareButtons(resultText, pageUrl) {
    const container = document.getElementById('share-container');
    if (!container) return;

    const shareTitle = 'MBTI VIBE - 무료 심리 테스트';
    const shareText = `${resultText} | 나도 해봤어! 너도 해봐 👉 ${pageUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(resultText + ' | 나도 해봤어! 너도 해봐')}`;

    const hasWebShare = !!navigator.share;

    const safeResult = resultText.replace(/'/g, "\\'").replace(/"/g, '&quot;');

    container.innerHTML = `
        <div class="share-section">
            <p class="share-label">🔥 결과 공유하기</p>
            <div class="share-buttons">
                ${hasWebShare ? `
                <div class="share-native-row">
                    <button class="share-btn share-native" style="width:100%" onclick="nativeShare('${safeResult}', '${pageUrl}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        카카오톡 / 앱으로 공유
                    </button>
                </div>` : ''}
                <a class="share-btn share-twitter" href="${twitterUrl}" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    트위터
                </a>
                <a class="share-btn share-facebook" href="${facebookUrl}" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    페이스북
                </a>
                <a class="share-btn share-line" href="${lineUrl}" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                    라인
                </a>
                <button class="share-btn share-copy" onclick="copyShareLink('${pageUrl}', this)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    링크 복사
                </button>
            </div>
        </div>
    `;
}

window.nativeShare = async function(resultText, pageUrl) {
    try {
        await navigator.share({
            title: 'MBTI VIBE',
            text: resultText + ' | 나도 해봤어! 너도 해봐',
            url: pageUrl
        });
    } catch (e) {
        // 사용자가 취소했거나 미지원
    }
};

window.copyShareLink = function(url, btn) {
    navigator.clipboard.writeText(url).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 복사됨!`;
        btn.style.borderColor = 'var(--accent-color)';
        btn.style.color = 'var(--accent-color)';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 2000);
    });
};

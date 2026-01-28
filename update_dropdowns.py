import os
import re

files = [
    "index.html",
    "coffee-test.html",
    "sns-test.html",
    "kpop-position-test.html",
    "kpop-concept-test.html"
]

new_dropdown = """<div class="dropdown-content">
                    <a href="index.html">MBTI 성격 검사</a>
                    <a href="coffee-test.html">커피 성격 테스트</a>
                    <a href="sns-test.html">SNS 성격 테스트</a>
                    <a href="kpop-position-test.html">K-POP 포지션 테스트</a>
                    <a href="kpop-concept-test.html">데뷔 컨셉 테스트</a>
                </div>"""

# 정규표현식: <div class="dropdown-content"> ... </div> (여러 줄 포함)
pattern = re.compile(r'<div class="dropdown-content">[\s\S]*?</div>')

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 내용이 변경될 경우에만 쓰기
        new_content = pattern.sub(new_dropdown, content)
        
        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"No changes needed for {file_path}")
    else:
        print(f"Skipped {file_path} (not found)")

import os
import re

files = [
    "main.js",
    "coffee-test.js",
    "sns-test.js",
    "kpop-position-test.js",
    "kpop-concept-test.js"
]

# btn.textContent = currentLang === 'en' ? ... : ...;
# 문자열 패턴을 단순화
pattern = re.compile(r"btn\.textContent\s*=\s*currentLang\s*===\s*'en'\s*\?.*?;")
replacement = "btn.textContent = currentLang === 'en' ? 'KR' : 'EN';"

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub(replacement, content)
        
        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"No match found in {file_path}")
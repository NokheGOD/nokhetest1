import os

ga_code = """
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3N35W1T4NE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3N35W1T4NE');
    </script>
"""

# 현재 디렉토리의 모든 .html 파일 찾기
files = [f for f in os.listdir('.') if f.endswith('.html')]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 이미 GA 코드가 있는지 확인
    if 'G-3N35W1T4NE' in content:
        print(f"Skipping {file_path} (GA code already present)")
        continue

    # <head> 태그 뒤에 삽입 (대소문자 무시하지 않음, 보통 소문자)
    if '<head>' in content:
        new_content = content.replace('<head>', '<head>' + ga_code, 1)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"Warning: <head> tag not found in {file_path}")

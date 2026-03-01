import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract title
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    title = title_match.group(1) if title_match else ''
    
    # Extract description
    desc_match = re.search(r'<meta name="description" content="(.*?)">', content, re.IGNORECASE)
    desc = desc_match.group(1) if desc_match else ''
    
    # Extract canonical
    url_match = re.search(r'<link rel="canonical" href="(.*?)">', content, re.IGNORECASE)
    url = url_match.group(1) if url_match else f"https://nokhe.org/{file if file != 'index.html' else ''}"
    
    # Check if JSON-LD already exists
    if '<script type="application/ld+json">' in content:
        print(f"{file} already has JSON-LD. Skipping.")
        continue
        
    # Determine Schema Type based on filename
    schema_type = "WebSite"
    if "test" in file or file == "index.html":
        schema_type = "WebApplication" # Or SoftwareApplication, Quiz etc.
    elif "post" in file:
        schema_type = "Article"
    elif file == "blog.html":
        schema_type = "Blog"
        
    json_ld = f'''
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "{schema_type}",
      "name": "{title}",
      "url": "{url}",
      "description": "{desc}"
    }}
    </script>
'''
    
    # Insert JSON-LD right before </head>
    new_content = re.sub(r'(</head>)', json_ld + r'\1', content, flags=re.IGNORECASE)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Added JSON-LD to {file}")

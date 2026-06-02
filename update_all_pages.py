import os
import re

target_dir = r"c:\Users\sandy\Desktop\SCG 2\SCG\WebsiteRevamp-master\Symbiotic Old Website"

# The files we already fully customized
skip_files = ["index.html", "about.html", "services.html"]

# Get the new components from index.html
with open(os.path.join(target_dir, "index.html"), "r", encoding="utf-8") as f:
    index_content = f.read()

# Extract head contents (except title, but we can just add the CSS links if that's safer)
# Actually, the safest way is just to insert the CSS links if not present.
# But replacing the nav and footer is easier.

# Extract Nav
nav_match = re.search(r'(<!-- Navigation -->.*?)</nav>', index_content, re.DOTALL)
new_nav = nav_match.group(1) + "</nav>" if nav_match else ""

# Extract Footer
footer_match = re.search(r'(<!-- Footer -->.*?</footer>)', index_content, re.DOTALL)
new_footer = footer_match.group(1) if footer_match else ""

for filename in os.listdir(target_dir):
    if filename.endswith(".html") and filename not in skip_files:
        filepath = os.path.join(target_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        original_content = content
        
        # 1. Replace Nav
        content = re.sub(r'<!-- Navigation -->.*?</nav>', new_nav, content, flags=re.DOTALL)
        
        # 2. Replace Footer
        content = re.sub(r'<!-- Footer -->.*?</footer>', new_footer, content, flags=re.DOTALL)
        
        # 3. Inject CSS
        if 'css/design-system.css' not in content:
            content = content.replace('href="css/modern-business.css" rel="stylesheet">',
                                      'href="css/modern-business.css" rel="stylesheet">\n  <link href="css/design-system.css" rel="stylesheet">')
                                      
        # 4. Inject JS
        if 'js/animations.js' not in content:
            content = content.replace('</body>', '  <script src="js/animations.js"></script>\n</body>')
            
        # 5. Add class reveal-up to container if not there
        # content = content.replace('<div class="container">', '<div class="container reveal-up">')

        if content != original_content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated {filename}")

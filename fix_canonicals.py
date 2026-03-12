import os
import re

blog_dir = r"d:\Visual codes\leadgeneration website\Ramadan Majlis Website\src\app\[locale]\blog"

for root, _, files in os.walk(blog_dir):
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            if "alternates: {" in content:
                lines = content.split('\n')
                modified = False
                
                # Check if canonical is missing
                for i, line in enumerate(lines):
                    if "languages: {" in line and "alternates: {" in lines[i-1]:
                        # Get URL path to figure out slug
                        slug = ""
                        for j in range(i+1, min(i+5, len(lines))):
                            if "'en':" in lines[j] or '"en":' in lines[j]:
                                # Try to extract slug from it
                                match = re.search(r'/blog/([^\\\'"]+)', lines[j])
                                if match:
                                    slug = match.group(1)
                                break
                        
                        if slug:
                            # Insert canonical above languages!
                            lines.insert(i, f"            canonical: `https://www.tentnow.ae/${{locale}}/blog/{slug}`,")
                            modified = True
                            
                            # Update languages URLs if they are relative
                            for k in range(i+2, min(i+6, len(lines))):
                                if ("'en':" in lines[k] or '"en":' in lines[k]) and "https://www.tentnow.ae" not in lines[k]:
                                    lines[k] = lines[k].replace("'/en/blog/", "'https://www.tentnow.ae/en/blog/")
                                    lines[k] = lines[k].replace('"/en/blog/', '"https://www.tentnow.ae/en/blog/')
                                    modified = True
                                if ("'ar':" in lines[k] or '"ar":' in lines[k]) and "https://www.tentnow.ae" not in lines[k]:
                                    lines[k] = lines[k].replace("'/ar/blog/", "'https://www.tentnow.ae/ar/blog/")
                                    lines[k] = lines[k].replace('"/ar/blog/', '"https://www.tentnow.ae/ar/blog/')
                                    modified = True
                            
                        break

                if modified:
                    print(f"Fixed: {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(lines))

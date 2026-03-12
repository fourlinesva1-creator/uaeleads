import os
import re

app_dir = r"d:\Visual codes\leadgeneration website\Ramadan Majlis Website\src\app"

for root, _, files in os.walk(app_dir):
    for file in files:
        if file in ['page.tsx', 'layout.tsx']:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            if "alternates: {" in content:
                lines = content.split('\n')
                modified = False
                
                # We need to find alternates block that doesn't have canonical inside
                for i, line in enumerate(lines):
                    if "languages: {" in line and "alternates: {" in lines[i-1]:
                        # Figure out slug based on en/ar paths
                        url_path = ""
                        for j in range(i+1, min(i+5, len(lines))):
                            if "'en':" in lines[j] or '"en":' in lines[j] or "en:" in lines[j]:
                                # Try to extract the relative url or absolute url
                                match = re.search(r'[\'"]([^\'"]+)[\'"]', lines[j].split(':', 1)[1])
                                if match:
                                    en_url = match.group(1)
                                    # extract the part after /en or /en/
                                    if "www.tentnow.ae/en/" in en_url:
                                        url_path = en_url.split("www.tentnow.ae/en", 1)[1]
                                    elif en_url.startswith("/en/"):
                                        url_path = en_url.split("/en", 1)[1]
                                    elif "www.tentnow.ae/en" == en_url or en_url == "/en":
                                        url_path = ""
                                break
                        
                        if url_path is not None:
                            # Normalize url path to make sure it doesn't have a leading slash if not needed
                            if url_path.startswith('/'):
                                slug_url = f"${{locale}}{url_path}"
                            elif url_path == "":
                                slug_url = "${locale}"
                            else:
                                slug_url = f"${{locale}}/{url_path}"
                                
                            # check if it already has canonical
                            has_canonical = False
                            for k in range(max(0, i-3), i):
                                if "canonical:" in lines[k]:
                                    has_canonical = True
                                    break
                                    
                            if not has_canonical:
                                lines.insert(i, f"            canonical: `https://www.tentnow.ae/{slug_url}`,")
                                modified = True
                            else:
                                pass # Already has canonical
                                
                            # Now update relative URLs to absolute in languages
                            # We must adjust the indices because we might have inserted a line
                            offset = 1 if not has_canonical else 0
                            for k in range(i+1+offset, min(i+10+offset, len(lines))):
                                if "}" in lines[k]:
                                    break # end of languages block
                                    
                                if ("'en':" in lines[k] or '"en":' in lines[k] or "en:" in lines[k]) and "https://www.tentnow.ae" not in lines[k]:
                                    lines[k] = lines[k].replace("'/en", "'https://www.tentnow.ae/en")
                                    lines[k] = lines[k].replace('"/en', '"https://www.tentnow.ae/en')
                                    lines[k] = lines[k].replace("`https://www.tentnow.ae${baseUrl}/en", "`https://www.tentnow.ae/en")
                                    modified = True
                                if ("'ar':" in lines[k] or '"ar":' in lines[k] or "ar:" in lines[k]) and "https://www.tentnow.ae" not in lines[k]:
                                    lines[k] = lines[k].replace("'/ar", "'https://www.tentnow.ae/ar")
                                    lines[k] = lines[k].replace('"/ar', '"https://www.tentnow.ae/ar')
                                    modified = True

                        break

                if modified:
                    print(f"Fixed: {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(lines))

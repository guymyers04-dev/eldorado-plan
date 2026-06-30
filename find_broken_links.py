import re
import os
from collections import defaultdict

def find_broken_links(file_path):
    """Find all links in an HTML file and check if targets exist."""
    broken = []
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except:
        return []
    
    # Find all href links (excluding http/mailto/# anchors)
    links = re.findall(r'href="([^"]*)"', content)
    
    for link in links:
        # Skip external links, anchors, and special protocols
        if link.startswith(('http', 'mailto', '#', 'javascript', '/')):
            continue
        
        # Get the target file (remove anchors)
        target = link.split('#')[0]
        if not target:
            continue
        
        # Check if file exists
        if not os.path.exists(target):
            broken.append(link)
    
    return broken

# Scan key production pages
pages = ['index.html', 'economy.html', 'place.html', 'housing.html', 'finance.html']
all_broken = defaultdict(list)

for page in pages:
    if os.path.exists(page):
        broken = find_broken_links(page)
        if broken:
            all_broken[page] = broken

# Report
print("BROKEN LINKS IN PRODUCTION PAGES:")
print("=" * 50)
for page, links in all_broken.items():
    print(f"\n{page}:")
    for link in sorted(set(links)):
        print(f"  - {link}")

print("\n" + "=" * 50)
print(f"Total pages with broken links: {len(all_broken)}")
print(f"Total unique broken links: {len(set(sum(list(all_broken.values()), [])))}")

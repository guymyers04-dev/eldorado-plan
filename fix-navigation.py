#!/usr/bin/env python3
"""Fix navigation consistency across El Dorado pages"""

import re

# Files that need nav-mount upgrade and stylesheet update
phase11_pages = [
    'opportunities.html',
    'scenario-simulator.html',
    'labor-forecast.html'
]

# Files that need defer added to nav.min.js
pages_needing_defer = [
    'economy.html',
    'place.html',
    'housing.html',
    'people.html',
    'build.html',
    'finance.html',
    'region.html',
    'reference.html'
]

def upgrade_to_nav_mount(filepath):
    """Convert Phase 11 pages to nav-mount pattern"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern 1: Replace styles.css with modern system
    if 'css/styles.css' in content:
        content = content.replace(
            '<link rel="stylesheet" href="css/styles.css">',
            '<link rel="stylesheet" href="css/styles-modern.min.css">'
        )
        content = content.replace(
            'css/styles.css" as="style">',
            'css/styles-modern.min.css" as="style">'
        )

    # Pattern 2: Replace hardcoded minimal nav with nav-mount
    # Find the minimal nav pattern and replace it
    minimal_nav_pattern = r'<nav id="navbar">\s*<div class="nav-inner">.*?</ul>\s*</div>\s*</nav>'
    if re.search(minimal_nav_pattern, content, re.DOTALL):
        # Replace with nav-mount
        content = re.sub(
            minimal_nav_pattern,
            '<div id="nav-mount"></div>',
            content,
            flags=re.DOTALL
        )

    # Pattern 3: Add nav.min.js with defer at end of body (before </body>)
    if '<script src="js/nav.min.js"' not in content:
        # Add nav.min.js before closing body tag
        body_close = content.find('</body>')
        if body_close > -1:
            nav_script = '<script src="js/nav.min.js" defer></script>\n'
            content = content[:body_close] + nav_script + content[body_close:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'✅ {filepath}: Upgraded to nav-mount pattern')

def add_defer_to_nav(filepath):
    """Add defer attribute to nav.min.js"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if nav.min.js exists without defer
    if re.search(r'<script src="js/nav\.min\.js"(?!.*defer)([^>]*)>', content):
        # Add defer
        content = re.sub(
            r'<script src="js/nav\.min\.js"([^>]*)>',
            r'<script src="js/nav.min.js" defer\1>',
            content
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'✅ {filepath}: Added defer to nav.min.js')
    else:
        print(f'⏭️  {filepath}: nav.min.js already has defer or not found')

print('📍 Phase 3: Navigation Consistency Fixes\n')

print('Upgrading Phase 11 pages to nav-mount pattern:')
for page in phase11_pages:
    try:
        upgrade_to_nav_mount(page)
    except Exception as e:
        print(f'❌ {page}: {str(e)}')

print('\nAdding defer to nav.min.js on core pages:')
for page in pages_needing_defer:
    try:
        add_defer_to_nav(page)
    except Exception as e:
        print(f'❌ {page}: {str(e)}')

print('\n✅ Navigation fixes complete!')

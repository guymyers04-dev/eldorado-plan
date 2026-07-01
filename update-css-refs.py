#!/usr/bin/env python3
"""Update CSS references in all HTML files"""

import os
import glob

def update_css_refs(directory='.'):
    """Replace styles.min.css with styles-modern.min.css"""
    html_files = glob.glob(os.path.join(directory, '*.html'))
    updated = 0

    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'css/styles.min.css' in content:
            new_content = content.replace('css/styles.min.css', 'css/styles-modern.min.css')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated += 1
            print(f"✅ Updated: {os.path.basename(filepath)}")

    print(f"\n📊 Total files updated: {updated}")

if __name__ == '__main__':
    update_css_refs()

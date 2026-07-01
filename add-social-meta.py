#!/usr/bin/env python3
"""Add missing social meta tags (OG, Twitter) to El Dorado HTML files"""

import os
import glob
import re
from pathlib import Path

BASE_URL = 'https://eldorado2040.com'
OG_IMAGE = f'{BASE_URL}/img/og-preview.png'
TWITTER_CARD = 'summary_large_image'

def get_page_title(content):
    """Extract page title from HTML"""
    match = re.search(r'<title>([^<]+)</title>', content)
    return match.group(1) if match else 'El Dorado Vision 2040'

def get_meta_description(content):
    """Extract meta description from HTML"""
    match = re.search(r'<meta name="description" content="([^"]+)"', content)
    return match.group(1) if match else 'El Dorado, Kansas Vision 2040'

def get_html_filename(filepath):
    """Get filename from full path"""
    return os.path.basename(filepath)

def has_og_tags(content):
    """Check if page has any OG tags"""
    return 'property="og:' in content

def has_twitter_tags(content):
    """Check if page has Twitter card tags"""
    return 'name="twitter:' in content

def add_social_meta(content, filename):
    """Add missing social meta tags to HTML"""
    title = get_page_title(content)
    description = get_meta_description(content)
    page_url = f'{BASE_URL}/{filename}'

    # Social meta tags to add
    social_tags = f'''  <meta property="og:url" content="{page_url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="El Dorado Vision 2040" />
  <meta property="og:image" content="{OG_IMAGE}" />
  <meta name="twitter:card" content="{TWITTER_CARD}" />
  <meta name="twitter:image" content="{OG_IMAGE}" />'''

    # If page has NO OG tags at all, add full set after description
    if not has_og_tags(content):
        # Find the meta description line
        match = re.search(r'(<meta name="description" content="[^"]+" />)', content)
        if match:
            insert_point = match.end()
            content = content[:insert_point] + '\n  <meta property="og:title" content="' + title + '" />\n  <meta property="og:description" content="' + description + '" />\n' + social_tags + '\n' + content[insert_point:]
            return content

    # If page already has some OG tags, add missing ones
    if has_og_tags(content) and not 'property="og:url"' in content:
        # Find last OG tag and insert after it
        last_og_match = None
        for match in re.finditer(r'<meta property="og:[^"]+', content):
            last_og_match = match

        if last_og_match:
            insert_point = content.find('/>', last_og_match.start()) + 2
            missing_tags = ''

            if 'property="og:url"' not in content:
                missing_tags += f'\n  <meta property="og:url" content="{page_url}" />'
            if 'property="og:type"' not in content:
                missing_tags += '\n  <meta property="og:type" content="website" />'
            if 'property="og:site_name"' not in content:
                missing_tags += '\n  <meta property="og:site_name" content="El Dorado Vision 2040" />'
            if 'property="og:image"' not in content:
                missing_tags += f'\n  <meta property="og:image" content="{OG_IMAGE}" />'
            if 'name="twitter:card"' not in content:
                missing_tags += f'\n  <meta name="twitter:card" content="{TWITTER_CARD}" />'
            if 'name="twitter:image"' not in content:
                missing_tags += f'\n  <meta name="twitter:image" content="{OG_IMAGE}" />'

            content = content[:insert_point] + missing_tags + content[insert_point:]

    return content

def main():
    """Process all HTML files"""
    html_files = sorted([f for f in glob.glob('*.html')
                        if not f.endswith('.bak')
                        and 'backup' not in f
                        and 'LEAD_CAPTURE' not in f
                        and f != '404.html'])  # Skip 404 as it has custom structure

    updated = 0
    added_og = 0
    added_twitter = 0

    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            original_content = content
            had_og = has_og_tags(content)
            had_twitter = has_twitter_tags(content)

            content = add_social_meta(content, html_file)

            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                updated += 1

                if not had_og and has_og_tags(content):
                    added_og += 1
                if not had_twitter and has_twitter_tags(content):
                    added_twitter += 1

                print(f'✅ {html_file}: Added social meta tags')

        except Exception as e:
            print(f'❌ {html_file}: {str(e)}')

    print(f'\n📊 Summary:')
    print(f'   Files updated: {updated}/{len(html_files)}')
    print(f'   OG tags added: {added_og}')
    print(f'   Twitter tags added: {added_twitter}')
    print(f'   OG Image URL: {OG_IMAGE}')

if __name__ == '__main__':
    main()

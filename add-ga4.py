#!/usr/bin/env python3
"""
Add Google Analytics 4 to all El Dorado HTML files
Usage: python3 add-ga4.py
"""

import os
import re

GA4_SNIPPET = '''    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER-ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PLACEHOLDER-ID');
    </script>'''

FILES_MISSING_GA4 = [
    '404.html',
    'ai-support.html',
    'apps-marketplace.html',
    'baseline-metrics.html',
    'community-stories.html',
    'data-integrations.html',
    'governance.html',
    'investor-match.html',
    'opportunities.html',
    'phase-11-tools.html',
    'qol-dashboard.html',
    'risk-assessment.html',
    'skills-marketplace.html',
    'talent-match.html',
    'vision2040-ambassador.html',
    'vision2040-events.html',
    'vision2040-faq.html',
    'vision2040-get-involved.html',
    'vision2040-launch-hub.html',
    'vision2040-sponsor.html',
    'vision2040-what-is.html',
]

def add_ga4_to_file(filename):
    """Add GA4 snippet to a file"""
    filepath = os.path.join('/Users/guyh/eldorado-plan', filename)

    if not os.path.exists(filepath):
        print(f"❌ {filename}: File not found")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if GA4 already exists
    if 'google-analytics' in content or 'googletagmanager' in content:
        print(f"⏭️  {filename}: Already has GA4")
        return False

    # Find the closing </head> tag
    head_close = content.find('</head>')
    if head_close == -1:
        print(f"❌ {filename}: No </head> tag found")
        return False

    # Insert GA4 before </head>
    new_content = content[:head_close] + GA4_SNIPPET + '\n  ' + content[head_close:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ {filename}: GA4 added")
    return True

def main():
    print("🔧 Adding Google Analytics 4 to El Dorado Vision 2040 pages...\n")

    added = 0
    skipped = 0
    failed = 0

    for filename in FILES_MISSING_GA4:
        try:
            if add_ga4_to_file(filename):
                added += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"❌ {filename}: Error - {str(e)}")
            failed += 1

    print(f"\n📊 Summary:")
    print(f"   ✅ Added to {added} files")
    print(f"   ⏭️  Skipped {skipped} files")
    print(f"   ❌ Failed {failed} files")
    print(f"\n⚠️  Remember to replace 'G-PLACEHOLDER-ID' with your actual GA4 measurement ID in all files!")
    print(f"    Command: sed -i 's/G-PLACEHOLDER-ID/YOUR_ACTUAL_ID/g' *.html")

if __name__ == '__main__':
    main()

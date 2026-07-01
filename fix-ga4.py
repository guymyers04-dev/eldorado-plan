#!/usr/bin/env python3
"""
Fix GA4 on remaining files that don't have it
"""

import os
import re

GA4_SNIPPET = '''  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER-ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PLACEHOLDER-ID');
  </script>
'''

FILES_MISSING_GA4 = [
    'ai-community-agent.html',
    'ai-support.html',
    'apps-marketplace.html',
    'baseline-metrics.html',
    'community-stories.html',
    'data-integrations.html',
    'governance.html',
    'investor-match.html',
    'labor-forecast.html',
    'opportunities.html',
    'opportunity-scanner.html',
    'participatory-budget.html',
    'phase-11-tools.html',
    'qol-dashboard.html',
    'risk-assessment.html',
    'scenario-simulator.html',
    'skills-marketplace.html',
    'talent-match.html',
    'virtual-tours.html',
    'vision2040-ambassador.html',
    'vision2040-events.html',
    'vision2040-faq.html',
    'vision2040-get-involved.html',
    'vision2040-launch-hub.html',
    'vision2040-sponsor.html',
    'vision2040-what-is.html',
]

def add_ga4(filename):
    """Add GA4 snippet to a file"""
    filepath = os.path.join('/Users/guyh/eldorado-plan', filename)

    if not os.path.exists(filepath):
        print(f"❌ {filename}: File not found")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if GA4 already exists
    if 'googletagmanager' in content or 'Google Analytics 4' in content:
        print(f"⏭️  {filename}: Already has GA4")
        return False

    # Find where to insert - after Google Fonts link or the first <style> tag
    # Look for common patterns where GA4 should go
    insert_pos = None

    # Pattern 1: After Google Fonts link
    match = re.search(r'(</link>\s*\n\s*)</style>', content)
    if match:
        insert_pos = match.start(1)

    # Pattern 2: Before <style> tag
    if insert_pos is None:
        match = re.search(r'(<style[^>]*>)', content)
        if match:
            insert_pos = match.start(1)

    # Pattern 3: Before the first <script> tag
    if insert_pos is None:
        match = re.search(r'(<script[^>]*>)', content)
        if match:
            insert_pos = match.start(1)

    # Pattern 4: Before </head>
    if insert_pos is None:
        match = re.search(r'(</head>)', content)
        if match:
            insert_pos = match.start(1)

    if insert_pos is None:
        print(f"❌ {filename}: Could not find insertion point")
        return False

    # Insert GA4 snippet
    new_content = content[:insert_pos] + GA4_SNIPPET + '\n  ' + content[insert_pos:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ {filename}: GA4 added")
    return True

if __name__ == '__main__':
    print("🔧 Adding GA4 to remaining El Dorado Vision 2040 pages...\n")

    added = 0
    skipped = 0
    failed = 0

    for filename in FILES_MISSING_GA4:
        try:
            if add_ga4(filename):
                added += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"❌ {filename}: Error - {str(e)}")
            failed += 1

    print(f"\n📊 Summary:")
    print(f"   ✅ Added GA4 to {added} files")
    print(f"   ⏭️  Skipped {skipped} files")
    print(f"   ❌ Failed {failed} files")

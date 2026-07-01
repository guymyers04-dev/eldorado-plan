#!/usr/bin/env python3
"""Optimize performance: async CSS loading on core pages"""

import re

# Pages that need async CSS optimization
pages_to_optimize = [
    'economy.html',
    'place.html',
    'housing.html'
]

async_css_pattern = '''  <link rel="preload" href="css/components-advanced.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/components-advanced.min.css"></noscript>
  <link rel="preload" href="css/utilities.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/utilities.min.css"></noscript>'''

blocking_pattern_1 = '  <link rel="stylesheet" href="css/components-advanced.min.css">'
blocking_pattern_2 = '  <link rel="stylesheet" href="css/utilities.min.css">'

def optimize_css_loading(filepath):
    """Convert blocking CSS to async loading pattern"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if both blocking patterns exist
    if blocking_pattern_1 in content and blocking_pattern_2 in content:
        # Find both patterns and replace with async version
        # Need to be careful to replace in order
        content = content.replace(
            blocking_pattern_1 + '\n' + blocking_pattern_2,
            async_css_pattern
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'✅ {filepath}: Optimized CSS loading to async pattern')
        return True
    else:
        print(f'⏭️  {filepath}: CSS already optimized or pattern not found')
        return False

print('📍 Phase 4: Performance Optimization\n')
print('Converting blocking CSS to async loading:')

for page in pages_to_optimize:
    try:
        optimize_css_loading(page)
    except Exception as e:
        print(f'❌ {page}: {str(e)}')

print('\n✅ Performance optimizations complete!')
print('\nNote: Font woff2 preload skipped as it requires actual font file URLs.')
print('Prioritized async CSS loading which provides more immediate benefit.')

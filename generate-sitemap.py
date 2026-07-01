#!/usr/bin/env python3
"""Generate sitemap.xml for El Dorado Vision 2040 project"""

import os
import glob
from datetime import datetime

# Get all HTML files
html_files = sorted([f for f in glob.glob('*.html') if not f.endswith('.bak') and 'backup' not in f and 'LEAD_CAPTURE' not in f])

BASE_URL = 'https://eldorado2040.com/'
LASTMOD = datetime.now().strftime('%Y-%m-%d')

# Priority mapping based on file patterns
def get_priority(filename):
    if filename == 'index.html':
        return '1.0'
    # Core pillar pages
    elif filename in ['economy.html', 'place.html', 'people.html', 'housing.html', 'build.html', 'finance.html', 'region.html', 'reference.html']:
        return '0.9'
    # Strategic tools and dashboards
    elif filename in ['investor-portal.html', 'scenario-simulator.html', 'labor-forecast.html', 'opportunities.html', 'development-finder.html', 'brief.html']:
        return '0.85'
    # Initiative pages
    elif filename.startswith('initiative-'):
        return '0.7'
    # Place detail pages
    elif filename.startswith('place-'):
        return '0.75'
    # Zone and corridor pages
    elif filename.startswith('zone-') or filename.startswith('corridor-'):
        return '0.7'
    # Community/engagement pages
    elif filename in ['community.html', 'community-signals.html', 'community-engagement.html', 'community-stories.html', 'stakeholders.html']:
        return '0.8'
    # Playbooks and tools
    elif 'playbook' in filename.lower() or filename in ['comment-generator.html', 'project-tracker.html', 'metrics-dashboard.html']:
        return '0.75'
    # Other pages
    else:
        return '0.6'

# Generate XML
xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]

for html_file in html_files:
    url = BASE_URL + html_file
    priority = get_priority(html_file)
    xml_lines.append(f'  <url>')
    xml_lines.append(f'    <loc>{url}</loc>')
    xml_lines.append(f'    <lastmod>{LASTMOD}</lastmod>')
    xml_lines.append(f'    <priority>{priority}</priority>')
    xml_lines.append(f'  </url>')

xml_lines.append('</urlset>')

# Write to file
with open('sitemap.xml', 'w') as f:
    f.write('\n'.join(xml_lines))

print(f'✅ Generated sitemap.xml with {len(html_files)} URLs')
print(f'📍 Base URL: {BASE_URL}')
print(f'📅 Last modified: {LASTMOD}')

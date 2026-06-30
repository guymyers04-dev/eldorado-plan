#!/usr/bin/env python3

import os
import re
from pathlib import Path

# Files that need meta descriptions
files_to_fix = [
    './.superpowers/brainstorm/29142-1782709030/content/brainstorm_complete.html',
    './.superpowers/brainstorm/29142-1782709030/content/niche_ideas_landscape.html',
    './.superpowers/brainstorm/29142-1782709030/content/phase3_directions.html',
    './email-templates/inquiry-response-template.html',
    './tools/economic-simulator.html',
    './tools/feedback.html',
    './tools/ideas.html',
    './tools/jobs.html',
    './tools/recruitment-form.html',
    './tools/roi-calculator.html',
    './tools/tourism-survey.html',
]

# Default descriptions by category
descriptions = {
    'brainstorm_complete.html': 'El Dorado brainstorming session - strategic ideas for community development',
    'niche_ideas_landscape.html': 'Niche industry opportunities and development ideas for El Dorado',
    'phase3_directions.html': 'Phase 3 strategic directions for El Dorado Vision 2040',
    'inquiry-response-template.html': 'Email template for responding to inquiries about El Dorado',
    'economic-simulator.html': 'Economic simulation tool for modeling El Dorado growth scenarios',
    'feedback.html': 'Feedback form for El Dorado Vision 2040 community input',
    'ideas.html': 'Submit ideas and suggestions for El Dorado development',
    'jobs.html': 'Jobs board and employment opportunities in El Dorado',
    'recruitment-form.html': 'Recruitment form for employer inquiries',
    'roi-calculator.html': 'ROI calculator for investment opportunities in El Dorado',
    'tourism-survey.html': 'Tourism survey for visitor feedback and market research',
}

fixed = 0
for file_path in files_to_fix:
    if not os.path.exists(file_path):
        print(f"⏭️  SKIP (not found): {file_path}")
        continue
    
    # Read file
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Check if already has meta description
    if '<meta name="description"' in content:
        print(f"✅ SKIP (already has): {file_path}")
        continue
    
    # Get description
    filename = os.path.basename(file_path)
    desc = descriptions.get(filename, f'El Dorado Vision 2040 - {filename}')
    
    # Add meta description after charset meta tag
    meta_tag = f'<meta name="description" content="{desc}">\n'
    
    if '<meta charset' in content:
        content = re.sub(r'(<meta charset[^>]*>)', r'\1\n' + meta_tag, content)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ FIXED: {file_path}")
        fixed += 1
    else:
        print(f"⚠️  SKIP (no charset found): {file_path}")

print(f"\n✅ Total fixed: {fixed} files")

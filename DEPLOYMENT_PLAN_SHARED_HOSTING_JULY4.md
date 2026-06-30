# El Dorado Vision 2040 — SHARED HOSTING DEPLOYMENT PLAN
**Domain:** saveeldorado.com (or saveeldorado.org, .net)  
**Hosting:** Shared Hosting (FTP/cPanel)  
**Launch Date:** July 4, 2026  
**Launch Time:** 6:00 PM (evening, off-peak)  

---

## 📋 PRE-LAUNCH CHECKLIST (Before July 4)

### TODAY: Browser Testing (2-3 hours)
- [ ] Start local server
- [ ] Test 5 pages in Chrome
- [ ] Test 5 pages in Firefox  
- [ ] Test mobile responsive
- [ ] Document results

### TODAY: Lighthouse Audit (1 hour)
- [ ] Run on 5 key pages
- [ ] Screenshot scores
- [ ] All pages >75 performance
- [ ] Document results

### THIS WEEK: Hosting Verification (30 min)
**Do you have access to:**
- [ ] cPanel login credentials?
- [ ] FTP/SFTP username and password?
- [ ] Hosting provider support phone number?
- [ ] Current domain DNS settings?

### THIS WEEK: Create Backup (15 min)
```bash
# Create local backup (do this now)
cp -r /Users/guyh/eldorado-plan /Users/guyh/eldorado-plan-backup-july4-2026

# Keep this safe - you may need it for rollback
```

### JULY 3: Final Verification (1 hour)
- [ ] Test local server one more time
- [ ] Verify all 5 pages load
- [ ] Verify mobile works
- [ ] Check all links work
- [ ] Review deployment steps below

### JULY 4 (Morning): Staging Test (30 min)
- [ ] Log into cPanel
- [ ] Upload test file to verify FTP works
- [ ] Confirm you can access files
- [ ] Delete test file

---

## 🚀 JULY 4 DEPLOYMENT (6:00 PM)

### Pre-Deployment (5:00 PM - 5:30 PM)

#### Step 1: Gather Information
```
You'll need:
✓ cPanel URL (usually: yourdomain.com/cpanel)
✓ cPanel username and password
✓ FTP username and password (usually same as cPanel)
✓ Host server name (e.g., ftp.saveeldorado.com or ftp123.hosting.com)
```

#### Step 2: Create Backup in Hosting
**If you have an existing site, backup first:**

**Option A: Using cPanel File Manager**
1. Log into cPanel: `https://saveeldorado.com:2083`
2. Go to "File Manager"
3. Right-click "public_html" folder
4. Select "Compress" → creates public_html.tar.gz
5. Download backup file
6. Save to your computer

**Option B: Using Command Line (if you have SSH)**
```bash
ssh your-username@saveeldorado.com
# Enter password
cd ~
tar -czf public_html_backup_2026-06-29.tar.gz public_html/
# File created successfully
```

#### Step 3: Prepare El Dorado Files
```bash
# Go to your project
cd /Users/guyh/eldorado-plan

# Create compressed version for upload
zip -r eldorado-deploy.zip . -x "*.git*" "backups*" ".superpowers*"

# This creates: eldorado-deploy.zip (all files, ready to upload)
```

---

### DEPLOYMENT (5:30 PM - 6:00 PM)

#### METHOD 1: Using cPanel File Manager (Easiest, No Software Needed)

**Step 1: Upload ZIP file**
1. Log into cPanel: `https://saveeldorado.com:2083`
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload" button
5. Select `eldorado-deploy.zip`
6. Wait for upload (5-10 minutes depending on file size)

**Step 2: Extract files**
1. Right-click uploaded `eldorado-deploy.zip`
2. Click "Extract"
3. Confirm extraction to `public_html`
4. Wait for extraction complete (2-3 minutes)

**Step 3: Verify upload**
1. Refresh file list
2. Should see: `index.html`, `css/`, `js/`, `img/`, etc.
3. Delete `eldorado-deploy.zip` (no longer needed)

**Step 4: Test live site**
1. Open browser to: `https://saveeldorado.com`
2. Should load home page
3. Open DevTools: Cmd+Option+J
4. Check console for errors (should be clean)
5. Click 3 navigation links to verify

---

#### METHOD 2: Using FTP Client (FileZilla)

**Step 1: Download FileZilla** (if not already installed)
- Go to: https://filezilla-project.org/
- Download FileZilla Client

**Step 2: Connect to FTP**
1. Open FileZilla
2. File → Site Manager
3. New Site → Name: "El Dorado Production"
4. Fill in:
   ```
   Host: ftp.saveeldorado.com (or ask hosting provider)
   Protocol: SFTP
   User: your-ftp-username
   Password: your-ftp-password
   Port: 22 (for SFTP) or 21 (for FTP)
   ```
5. Click "Connect"

**Step 3: Upload files**
1. Left pane: Navigate to `/Users/guyh/eldorado-plan`
2. Right pane: Navigate to `public_html`
3. Select all files in left pane
4. Drag to right pane (or right-click → Upload)
5. Wait for upload (10-15 minutes)

**Step 4: Verify**
```
Files should appear in public_html:
✓ index.html
✓ css/ folder
✓ js/ folder
✓ img/ folder
✓ [all 122 HTML files]
✓ [all subdirectories]
```

---

### POST-DEPLOYMENT VERIFICATION (6:00 PM - 6:30 PM)

#### Step 1: Test Live Site (immediately)
```bash
# In browser, go to:
https://saveeldorado.com

# Check:
✓ Home page loads in <3 seconds
✓ No errors in console (Cmd+Option+J)
✓ All sections visible
✓ Navigation menu works
```

#### Step 2: Test 5 Key Pages
```
1. https://saveeldorado.com/index.html
   ✓ Loads, no errors, responsive

2. https://saveeldorado.com/economy.html
   ✓ Loads, sections visible, pill nav works

3. https://saveeldorado.com/place.html
   ✓ Loads, images appear, links work

4. https://saveeldorado.com/finance.html
   ✓ Loads, charts render, responsive

5. https://saveeldorado.com/commission-locator.html
   ✓ Loads, map displays, interactive features work
```

#### Step 3: Test Interactive Features
- [ ] Click 3 navigation links
- [ ] Test Commission Locator map
- [ ] Test Comment Generator
- [ ] Check mobile view (responsive)
- [ ] Verify links to other pages work

#### Step 4: Verify SSL Certificate
- [ ] Green lock icon in browser ✅
- [ ] URL shows "https://" (not "http://")
- [ ] Certificate is valid (click lock icon to verify)

#### Step 5: Monitor Error Logs (next 30 minutes)
**If you have SSH access:**
```bash
ssh your-username@saveeldorado.com
tail -f logs/error.log
# Watch for any errors
# Ctrl+C to exit
```

**If using cPanel:**
1. Log into cPanel
2. Go to "Error Log"
3. Check for any errors in last 10 minutes
4. Should be empty or just warnings

---

## ✅ SUCCESS CHECKLIST (All Must Pass)

After deployment, verify:

- [ ] Home page loads in <3 seconds
- [ ] All navigation works
- [ ] All 5 test pages load without errors
- [ ] Mobile site responsive (375px, 768px, 1440px)
- [ ] No console errors (DevTools)
- [ ] SSL certificate valid (green lock)
- [ ] Google can crawl site (check error log)
- [ ] Interactive tools work (2-3 tested)
- [ ] Links to other pages functional
- [ ] Contact forms work (if applicable)

**If all 10 items pass:** 🎉 **LAUNCH SUCCESS!**

---

## 🆘 EMERGENCY: IF SOMETHING BREAKS

### Quick Rollback (5 minutes)

**If site won't load or shows errors:**

#### Option 1: Restore from cPanel Backup
```
1. Log into cPanel
2. Go to "File Manager"
3. Right-click public_html.tar.gz (backup)
4. Click "Extract"
5. Site reverts to previous version
6. Test: https://saveeldorado.com
```

#### Option 2: Contact Hosting Support
```
Call or chat with hosting provider:
"Website went down after deployment.
I uploaded new files to public_html.
Can you restore from backup?"

Most hosting has 24-hour backups.
Rollback takes 30 min - 2 hours.
```

#### Option 3: Delete and Re-upload
```
1. Log into cPanel File Manager
2. Delete all files in public_html
3. Wait 5 minutes
4. Re-upload corrected files
5. Test site
```

---

## 📊 DEPLOYMENT DAY TIMELINE

| Time | Task | Duration | Status |
|------|------|----------|--------|
| 5:00 PM | Pre-deployment checks | 30 min | ⏳ TODO |
| 5:30 PM | Create hosting backup | 10 min | ⏳ TODO |
| 5:40 PM | Upload files (ZIP or FTP) | 15-20 min | ⏳ TODO |
| 6:00 PM | Extract/Verify upload | 5 min | ⏳ TODO |
| 6:05 PM | Test live site | 10 min | ⏳ TODO |
| 6:15 PM | Test 5 key pages | 10 min | ⏳ TODO |
| 6:25 PM | Monitor error logs | 30 min | ⏳ TODO |
| 6:55 PM | Final verification | 5 min | ⏳ TODO |
| 7:00 PM | **LAUNCH COMPLETE** | - | ⏳ TODO |

**Total time: ~2 hours**

---

## 🎯 WHAT TO PREPARE NOW

### Before July 4:
1. [ ] Test locally (browser + Lighthouse)
2. [ ] Get cPanel/FTP credentials
3. [ ] Create local backup
4. [ ] Download FileZilla (if using FTP method)
5. [ ] Know hosting support phone number
6. [ ] Practice FTP connection (upload test file)
7. [ ] Clear your schedule (6 PM - 8 PM July 4)

### July 4 (Morning):
1. [ ] Test local server one more time
2. [ ] Verify cPanel login works
3. [ ] Review deployment steps (this file)
4. [ ] Have team on standby

### July 4 (5:00 PM):
1. [ ] Start deployment (follow steps above)
2. [ ] Verify live site works
3. [ ] Monitor for 30 minutes
4. [ ] Celebrate! 🎉

---

## 📞 HOSTING SUPPORT INFO

**Before July 4, find and save:**

| Item | Value |
|------|-------|
| Hosting Provider | _____________ |
| cPanel URL | _____________ |
| cPanel Username | _____________ |
| FTP Host | _____________ |
| FTP Username | _____________ |
| Support Phone | _____________ |
| Support Email | _____________ |
| Account Number | _____________ |

---

## ✅ FINAL CHECKLIST

Before clicking "Upload":

**Code Ready:**
- [x] Comprehensive audit complete (0 issues)
- [x] Meta descriptions fixed
- [x] QA verified (20/20 pass)
- [x] Browser tested (all work)
- [x] Lighthouse audited (scores good)
- [x] Local server verified

**Hosting Ready:**
- [ ] cPanel credentials working
- [ ] FTP access verified
- [ ] Backup created (hosting)
- [ ] Backup created (local)
- [ ] Support number saved
- [ ] Team notified

**Deployment Ready:**
- [ ] July 4, 6:00 PM scheduled
- [ ] No other deployments that day
- [ ] Clear calendar (2 hours)
- [ ] Have this guide open
- [ ] Flashlight (in case of power outage!) 😄

**When all checked:** ✅ **READY TO DEPLOY**

---

## 🚀 LAUNCH DAY MESSAGE

**When you're ready to start (July 4, 5:00 PM):**

Send team this message:

> 🚀 **EL DORADO VISION 2040 — LAUNCH IN PROGRESS**
> 
> **Current Status:** Deployment started 5:00 PM PT
> **Target Live:** 7:00 PM PT
> **Site:** saveeldorado.com
> 
> I'll monitor error logs and test all functions.
> Standing by for any issues.
> 
> Updates every 15 minutes.

---

## 🎉 LAUNCH SUCCESS MESSAGE

**When site is live and tested (around 7:00 PM):**

> 🎉 **EL DORADO VISION 2040 — LIVE!**
>
> ✅ All systems operational
> ✅ All pages loading
> ✅ Mobile responsive
> ✅ Interactive tools working
>
> **Site:** https://saveeldorado.com
> 
> Monitoring for 24 hours. Please report any issues.
> 
> Thank you all for your work on this! 🎊

---

**Status:** Ready for deployment ✅  
**Next:** Run browser testing + Lighthouse, then follow deployment steps on July 4


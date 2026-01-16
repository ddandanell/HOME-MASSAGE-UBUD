# Google Search Console - Staff Operating Procedures

**Purpose:** Weekly monitoring and maintenance guide for non-technical staff  
**Time Required:** 5-10 minutes per week  
**Who:** Marketing Manager, Content Manager, or designated SEO person

---

## Weekly Check (Every Monday, 5 Minutes)

### 1. Login to Google Search Console
- Go to: https://search.google.com/search-console
- Select property: `homemassageubud.com`

---

### 2. Check Pages Status (2 minutes)

**Navigation:** Left sidebar → Pages

**What to look for:**

#### ✅ GOOD Signs:
- **"Valid" pages increasing** (green line going up)
- Total indexed pages: 60-73 pages
- No red "Error" section

#### ⚠️ WARNING Signs:
- **"Not indexed" pages increasing** (gray section growing)
- **"Error" section appears** (red)
- Indexed pages dropping significantly

**Action if warning appears:**
1. Click on the warning section
2. Screenshot the error list
3. Send to web developer with message: "GSC showing indexing errors - see attached"

---

### 3. Check Core Web Vitals (1 minute)

**Navigation:** Left sidebar → Core Web Vitals

**What to look for:**

#### ✅ GOOD:
- Green: "Good URLs" section dominant
- Yellow: Acceptable, monitor if increasing
- No red section

#### ❌ BAD:
- Red: "Poor URLs" section present
- Mobile or Desktop showing red

**Action if red appears:**
1. Screenshot the issue
2. Note which pages are affected
3. Alert web developer: "Core Web Vitals showing poor performance"

---

### 4. Check Enhancements (2 minutes)

**Navigation:** Left sidebar → Enhancements

Check THREE sections:

#### A. Breadcrumbs
- ✅ Should show valid items
- ❌ If errors appear: Screenshot and alert developer

#### B. FAQ
- ✅ Should show valid items matching FAQ pages
- ❌ If errors appear: Screenshot and alert developer

#### C. Review Snippets (if implemented)
- ✅ Should show valid reviews
- ❌ If errors appear: Screenshot and alert developer

**Action for any enhancement errors:**
1. Click the error
2. Note which pages are affected
3. Screenshot
4. Alert developer with page URLs

---

### 5. Check Performance Trends (1 minute)

**Navigation:** Left sidebar → Performance

**Quick glance at:**
- Total clicks (should be steady or increasing)
- Total impressions (should be growing)
- Average CTR (click-through rate)
- Average position

**What's normal:**
- Fluctuations are normal
- Weekends may be lower
- Seasonal changes expected

**When to act:**
- Sudden drops >30% lasting 3+ days
- Zero clicks for multiple days
- Dramatic position drops

**Action:**
- Take screenshot of graph
- Note date when drop started
- Alert marketing manager

---

## Monthly Review (First Monday of Month, 10 Minutes)

### 1. Export Performance Data

**Navigation:** Performance → Export → Download CSV

**Save as:** `GSC-Performance-[Month]-[Year].csv`

**Review:**
- Which pages get most clicks?
- Which keywords drive traffic?
- Are service pages performing?
- Are location pages performing?

### 2. Check Search Appearance

**Navigation:** Left sidebar → Search Appearance

**Look for:**
- Rich results showing up?
- Are FAQs displaying in search?
- Are breadcrumbs showing?
- Any new enhancement opportunities?

### 3. Security Check

**Navigation:** Left sidebar → Security & Manual Actions

**Must be:**
- ✅ "No issues detected" for both sections
- Any other message = URGENT, alert immediately

---

## When Adding New Pages

**Every time a new page/blog post goes live:**

### 1. Wait 24 Hours
- Let the sitemap auto-update (happens automatically on deploy)

### 2. Request Indexing (Do This Once)

**Steps:**
1. Go to Google Search Console
2. Click the search bar at top
3. Enter your new page URL, example:
   - `https://homemassageubud.com/new-service-page`
4. Wait for inspection to complete (30 seconds)
5. Click **"Request Indexing"** button
6. Wait for confirmation (1-2 minutes)
7. Done!

**Limit:** You can do this for 10-20 pages per day max

---

## Common Issues & Solutions

### Issue: "Page not indexed"

**Possible reasons:**
1. Page too new (wait 1-2 weeks)
2. Content too thin (add more content)
3. Duplicate content (make it unique)
4. Technical error (alert developer)

**Your action:**
- If page is >2 weeks old: Alert developer with page URL

---

### Issue: "Crawled - currently not indexed"

**What it means:** Google found it but chose not to index

**Possible reasons:**
1. Low quality content
2. Duplicate of another page
3. Not enough internal links to page

**Your action:**
1. Check if content is substantial (300+ words)
2. Check if content is unique
3. Add internal links from other pages
4. Wait 2 weeks, if still not indexed, alert developer

---

### Issue: "Discovered - currently not indexed"

**What it means:** Google knows about it, hasn't crawled yet

**Your action:**
- Normal, wait 1-2 weeks
- If urgent page: Use URL Inspection tool and request indexing

---

### Issue: Red "Poor" Core Web Vitals

**What it means:** Page is loading slowly or has layout issues

**Your action:**
1. Note which pages are affected
2. Alert developer immediately
3. Do NOT remove the pages
4. Developer will optimize performance

---

## Emergency Contacts

### Security Issue
- **Symptom:** Manual action penalty, security issue warning
- **Action:** IMMEDIATELY alert web developer
- **Urgency:** Within 1 hour

### Mass De-Indexing
- **Symptom:** >50% of pages suddenly not indexed
- **Action:** IMMEDIATELY alert web developer
- **Urgency:** Within 4 hours

### Core Web Vitals Collapse
- **Symptom:** All pages showing red "Poor"
- **Action:** Alert web developer same day
- **Urgency:** Within 24 hours

### Normal Issues
- **Symptom:** Individual pages not indexed, minor errors
- **Action:** Document and alert developer
- **Urgency:** Within 1 week

---

## Reporting Template

### Weekly Status Report (Send to Marketing Manager)

```
GSC Weekly Report - [Date]

✅ Status: [All Good / Issues Found]

📊 Performance:
- Total Clicks: [number]
- Total Impressions: [number]
- Average Position: [number]

📄 Indexing:
- Valid Pages: [number] / 73 total
- Issues: [None / See Below]

⚡ Core Web Vitals:
- Status: [Green / Yellow / Red]
- Issues: [None / See Below]

🔧 Actions Taken:
- [List any URL inspection requests]
- [List any issues reported to developer]

📝 Notes:
- [Any observations or concerns]
```

---

## Best Practices

### DO:
- ✅ Check every Monday morning
- ✅ Document any issues with screenshots
- ✅ Request indexing for important new pages
- ✅ Monitor trends over time
- ✅ Alert developer when needed

### DON'T:
- ❌ Panic over small fluctuations
- ❌ Make technical changes yourself
- ❌ Remove pages without consulting developer
- ❌ Ignore security warnings
- ❌ Request indexing for same URL repeatedly

---

## Resources

### Official Help:
- [GSC Help Center](https://support.google.com/webmasters)
- [GSC Training](https://developers.google.com/search)

### Internal Docs:
- `GOOGLE_SEARCH_CONSOLE_SETUP.md` - Setup guide
- `SCHEMA_TEMPLATES.md` - Structured data info
- `DEPLOYMENT_CHECKLIST.md` - For developers

### Tools:
- [Rich Results Test](https://search.google.com/test/rich-results) - Test page markup
- [PageSpeed Insights](https://pagespeed.web.dev/) - Check page speed

---

## Training Checklist

**New staff member should:**
- [ ] Get access to Google Search Console
- [ ] Read this SOP document
- [ ] Practice navigating to each section
- [ ] Know how to take screenshots
- [ ] Know who to alert for different issues
- [ ] Understand what's normal vs. concerning
- [ ] Practice requesting indexing for a test URL
- [ ] Know where internal documentation is stored

---

**Questions?**  
Contact: Web Developer or Marketing Manager

---

**Last Updated:** January 16, 2026  
**Version:** 1.0  
**Review:** Update quarterly or when Google changes GSC interface

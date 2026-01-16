# SEO Link Audit & Recovery - Action Plan Template

## Overview

This document provides a step-by-step action plan for implementing the SEO Link Audit & Recovery process for **homemassageubud.com**. Use this as your complete roadmap.

---

## 📅 Implementation Timeline

### Week 1-2: Discovery & Immediate Fixes ⚡

#### Day 1-2: Initial Audit
- [ ] Run comprehensive link audit: `npm run link:audit`
- [ ] Review generated reports (CSV, Markdown, JSON)
- [ ] Import CSV into Google Sheets for tracking
- [ ] Categorize issues by priority (High/Medium/Low)
- [ ] Estimate total effort hours
- [ ] Create GitHub issues or Trello cards for each item

#### Day 3-5: High Priority Fixes
- [ ] Fix broken service/product page links
  - [ ] Identify correct destination pages
  - [ ] Create 301 redirects in `vercel.json`
  - [ ] Test each redirect
  - [ ] Deploy changes
  - [ ] Monitor in GSC for 24-48 hours

- [ ] Fix broken location page links
  - [ ] Map old URLs to new URLs
  - [ ] Create 301 redirects
  - [ ] Update internal navigation
  - [ ] Test redirects
  - [ ] Deploy changes

- [ ] Fix broken homepage links
  - [ ] Update header navigation
  - [ ] Update footer links
  - [ ] Update call-to-action buttons
  - [ ] Test all links manually
  - [ ] Deploy changes

#### Day 6-8: Critical Button/CTA Fixes
- [ ] Verify WhatsApp button functionality
  - [ ] Check phone number format: `https://wa.me/628112656869`
  - [ ] Test on mobile and desktop
  - [ ] Add pre-filled message if needed
  - [ ] Document correct format

- [ ] Verify Call button functionality
  - [ ] Check format: `tel:+628112656869`
  - [ ] Test on mobile devices
  - [ ] Ensure clickable on all pages

- [ ] Verify Book Now buttons
  - [ ] Check all booking CTAs have valid hrefs
  - [ ] Test booking flow end-to-end
  - [ ] Fix any broken booking links
  - [ ] Document booking flow

#### Day 9-10: Custom 404 Page
- [ ] Review enhanced 404 page (already implemented)
- [ ] Test 404 page with various broken URLs
- [ ] Verify booking CTA works
- [ ] Check mobile responsiveness
- [ ] Add analytics tracking for 404 visits

**Week 1-2 Deliverable:**
- ✅ All high priority broken links fixed
- ✅ Critical buttons/CTAs working
- ✅ Custom 404 page live with booking CTA
- ✅ Documentation updated
- ✅ Initial metrics recorded

---

### Week 3-4: Quick Wins 🎯

#### Week 3: Update Redirect Links
- [ ] Identify all links that go through redirects
- [ ] Update to point directly to final destination
- [ ] Benefits:
  - Faster page load
  - Better user experience
  - Slight SEO improvement

**Example:**
```html
<!-- Before -->
<a href="/old-page">Link</a>
<!-- old-page redirects to /new-page -->

<!-- After -->
<a href="/new-page">Link</a>
```

#### Week 3-4: External Link Audit
- [ ] Run link audit with external link checking enabled
- [ ] Verify partner resort links
- [ ] Update or remove broken external links
- [ ] Add `rel="nofollow"` to commercial links if needed
- [ ] Document key external partners

**External Link Checklist:**
- [ ] Partner resort websites
- [ ] Social media profiles
- [ ] Review sites (TripAdvisor, Google, etc.)
- [ ] Map/location services
- [ ] Booking platforms

#### Week 4: Remove Duplicate/Meaningless Links
- [ ] Audit for duplicate links in navigation
- [ ] Remove links that don't add value
- [ ] Consolidate similar links
- [ ] Clean up footer navigation
- [ ] Simplify header menu

**Week 3-4 Deliverable:**
- ✅ No redirect chains
- ✅ External links verified
- ✅ Duplicate links removed
- ✅ Cleaner, more efficient navigation

---

### Month 2-3: Long-Term Improvements 📈

#### Month 2, Week 1: Google Search Console Setup
- [ ] Verify ownership in GSC (if not done)
- [ ] Submit updated sitemap
- [ ] Enable email notifications
- [ ] Set up custom alerts for 404 errors
- [ ] Document GSC monitoring process

**GSC Monitoring Setup:**
1. Coverage Report review (weekly)
2. Alert for >10 new 404 errors
3. Track improvement metrics
4. Document all fixes

#### Month 2, Week 2-3: Standardize URL Structure
- [ ] Review all current URLs
- [ ] Define URL naming conventions
- [ ] Document URL governance policy
- [ ] Create URL change request template
- [ ] Train team on new policies

**URL Structure Standard:**
```
Services: /services/[service-name]
Areas: /areas/[location-name]  
Blog: /blog/[post-slug]
Knowledge: /[topic]/knowledge/[article]
```

#### Month 2, Week 4: Backlink Recovery
- [ ] Identify pages with lost backlinks (from link audit)
- [ ] Create list of websites linking to broken pages
- [ ] Reach out to webmasters:
  - "Hi, noticed you're linking to [old URL]"
  - "Page has moved to [new URL]"
  - "Could you update the link?"
- [ ] Track outreach in spreadsheet
- [ ] Follow up after 1 week

**Outreach Email Template:**
```
Subject: Quick update - Link update request for HomeMassageUbud.com

Hi [Name],

I noticed that your page [their URL] links to our page:
[old broken URL]

We recently updated our website structure, and this page has moved to:
[new URL]

Would you be able to update the link? It would really help our visitors find the information they're looking for.

Thanks for featuring us!

Best regards,
[Your Name]
Home Massage Ubud
```

#### Month 3: Automation & Monitoring
- [ ] Set up monthly automated link audit (GitHub Actions)
- [ ] Configure email notifications for audit results
- [ ] Set up uptime monitoring (Uptime Robot)
- [ ] Create monitoring dashboard
- [ ] Document monitoring procedures

**Month 2-3 Deliverable:**
- ✅ GSC monitoring active
- ✅ URL governance policy in place
- ✅ Backlink recovery initiated
- ✅ Automated monitoring configured
- ✅ Monthly audit schedule established

---

## 📊 Tracking Spreadsheet Template

### Sheet 1: Broken Links Master List

| ID | Source URL | Broken Link | Type | Status Code | Priority | SEO Impact | Action Required | Redirect Target | Status | Assigned To | Completed Date | Notes |
|----|------------|-------------|------|-------------|----------|------------|-----------------|-----------------|--------|-------------|----------------|-------|
| 1 | /services | /services/deep-tissue-old | internal | 404 | High | High - Service page | 301 Redirect | /services/deep-tissue | Done | John | 2026-01-20 | Traffic: 150/mo |
| 2 | /home | /old-promo | internal | 404 | Medium | Medium - Promo | Remove link | N/A | In Progress | Sarah | - | Outdated promo |
| 3 | /blog/post-1 | /images/old-img.jpg | image | 404 | Low | Low - Image | Replace image | N/A | Pending | Design | - | Need new image |

**Download template:** [link-audit-tracking.xlsx]

### Sheet 2: External Links

| Source URL | External URL | Link Text | Status | Action | Priority | Completed |
|------------|--------------|-----------|--------|--------|----------|-----------|
| /about | https://partnerresort.com | Partner Resort | Valid | None | - | N/A |
| /contact | https://oldlink.com/page | Old Partner | 404 | Remove or update | Medium | No |

### Sheet 3: Button/CTA Audit

| Source URL | Button Text | Button Type | Target | Status | Issue | Fix Required | Completed |
|------------|-------------|-------------|--------|--------|-------|--------------|-----------|
| /services | Book Now | book | https://wa.me/... | Valid | None | None | N/A |
| /contact | Call Us | call | tel:+628... | Valid | None | None | N/A |
| /pricing | Reserve Now | book | # (empty) | Broken | No href | Add WhatsApp link | No |

### Sheet 4: Redirect Map

| Old URL | New URL | Redirect Type | Implementation Date | Traffic (30d before) | Traffic (30d after) | Status | Notes |
|---------|---------|---------------|---------------------|---------------------|---------------------|--------|-------|
| /old-service | /services/new | 301 | 2026-01-15 | 120 | 115 | Active | Successful transfer |
| /treatments/balinese | /services/balinese | 301 | 2026-01-15 | 80 | 75 | Active | Good transfer |

### Sheet 5: Weekly Metrics

| Week | Total Links Checked | Broken Links | High Priority | Medium Priority | Low Priority | Fixed This Week | Cumulative Fixed | % Complete |
|------|---------------------|--------------|---------------|-----------------|--------------|-----------------|------------------|------------|
| Week 1 | 289 | 15 | 5 | 7 | 3 | 5 | 5 | 33% |
| Week 2 | 289 | 10 | 0 | 7 | 3 | 5 | 10 | 67% |
| Week 3 | 289 | 5 | 0 | 2 | 3 | 5 | 15 | 100% |

---

## ⚡ Quick Start Guide

### For Immediate Action (Right Now)

**Step 1: Run First Audit (5 minutes)**
```bash
cd /path/to/project
npm run link:audit
```

**Step 2: Review Results (10 minutes)**
- Open `reports/link-audit-[timestamp].md`
- Scan executive summary
- Note number of high priority issues

**Step 3: Fix Top 3 Issues (30 minutes)**
- Focus on high priority only
- Create 301 redirects for top 3 broken links
- Test redirects work
- Deploy

**Step 4: Set Up Monitoring (15 minutes)**
- Add GSC email notifications
- Set up Uptime Robot for homepage
- Schedule monthly reminder to run audit

**Total time to get started: 1 hour**

---

## 🎯 Success Criteria

### Week 1-2 Goals
- [ ] Zero high priority broken links
- [ ] All critical CTAs functional
- [ ] Custom 404 page live

### Week 3-4 Goals
- [ ] Zero redirect chains
- [ ] External links verified
- [ ] Clean navigation structure

### Month 2-3 Goals
- [ ] GSC monitoring active
- [ ] <5 total broken links site-wide
- [ ] Monthly audit automated
- [ ] Backlink recovery >50% complete

---

## 📋 Pre-Deployment Checklist

**Before deploying any fixes:**
- [ ] Tested in local development
- [ ] Tested in staging (if available)
- [ ] All redirects tested manually
- [ ] Analytics tracking verified
- [ ] Documentation updated
- [ ] Team notified of changes
- [ ] Rollback plan prepared

**After deployment:**
- [ ] Verify in production
- [ ] Check GSC for new issues
- [ ] Monitor analytics for 24 hours
- [ ] Update tracking spreadsheet
- [ ] Mark tasks as complete

---

## 🔄 Monthly Maintenance Routine

**First Monday of Each Month (30 minutes):**
1. Run link audit: `npm run link:audit`
2. Review CSV report
3. Fix any new high priority issues
4. Update tracking spreadsheet
5. Check GSC coverage report
6. Review analytics for 404 traffic

**Expected outcomes:**
- Catch issues before they impact users
- Maintain zero high priority broken links
- Track improvement over time
- Proactive rather than reactive

---

## 🎓 Team Training

### For Developers
- [ ] Review URL governance policy
- [ ] Learn to create 301 redirects
- [ ] Understand link audit tool
- [ ] Know when to ask for SEO review

### For Content Creators
- [ ] Learn URL naming conventions
- [ ] Understand internal linking best practices
- [ ] Know how to check for broken links
- [ ] URL change request process

### For Marketing/SEO
- [ ] Master link audit tool
- [ ] GSC monitoring procedures
- [ ] Backlink recovery process
- [ ] Analytics interpretation

---

## 📞 Support & Resources

### Internal Documentation
- `LINK_AUDIT_TOOL.md` - How to run audits
- `REDIRECT_CONFIGURATION_GUIDE.md` - Setting up redirects
- `BROKEN_LINK_PREVENTION_GUIDE.md` - Prevention strategies
- `GOOGLE_SEARCH_CONSOLE_SETUP.md` - GSC setup

### External Tools
- **Google Search Console** - https://search.google.com/search-console
- **Uptime Robot** - https://uptimerobot.com
- **Redirect Checker** - https://httpstatus.io/
- **Screaming Frog** - https://www.screamingfrog.co.uk/seo-spider/

### Need Help?
1. Check documentation first
2. Review example reports
3. Search GitHub issues
4. Ask in team chat

---

## 🏆 Expected Results

### After Week 1-2
- **User Experience:** No broken critical links
- **SEO:** High priority pages preserved
- **Analytics:** 404 traffic should decrease by 80%

### After Week 3-4
- **Performance:** Faster page loads (no redirect chains)
- **UX:** Cleaner navigation
- **SEO:** Better crawl efficiency

### After Month 2-3
- **Proactive:** Issues caught before impacting users
- **Automated:** Monthly audits run automatically
- **Stable:** <5 broken links at any time
- **Process:** Team follows governance policies

---

## 📈 Reporting Template

### Monthly Report to Stakeholders

```markdown
## Link Health Report - [Month Year]

### Summary
- Total links checked: 289
- Broken links found: 3 (down from 15 last month)
- High priority issues: 0 (goal achieved!)
- Redirect chains: 0

### Actions Taken This Month
- Fixed 5 broken service page links
- Updated 12 redirect chains
- Recovered 3 backlinks through outreach
- Implemented automated monitoring

### Impact
- 404 page visits: Down 75%
- Bounce rate on 404: Down to 25%
- Booking conversions from 404: Up to 8%

### Next Month Focus
- Continue monthly audits
- Monitor new content for broken links
- Outreach for remaining backlinks
```

---

## 🎉 Conclusion

This action plan provides everything needed to:
- ✅ Find and fix broken links
- ✅ Prevent future issues
- ✅ Monitor link health
- ✅ Maintain excellent UX and SEO

Start with Week 1-2 immediate fixes, then build on that foundation with ongoing monitoring and prevention.

**Remember:** Prevention > Cure. Regular monthly audits catch issues before they become problems!

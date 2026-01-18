# Broken Link Prevention & Monitoring Guide

## Overview

This guide provides comprehensive strategies to prevent broken links and monitor link health on **homemassageubud.com**. Prevention is always better than cure when it comes to broken links.

## 🛡️ Prevention Strategies

### 1. Link Governance Policy

#### Establish URL Naming Conventions

**Rules:**
- ✅ Use lowercase only
- ✅ Use hyphens, not underscores
- ✅ Keep URLs short and descriptive
- ✅ Include primary keyword
- ✅ Avoid special characters
- ✅ Use consistent structure

**Examples:**
```
✅ Good: /services/balinese-massage
❌ Bad: /Services/BalineseMassage
❌ Bad: /services/balinese_massage
❌ Bad: /services/view.php?id=123
```

**URL Structure Standard:**
```
Homepage: /
Services: /services/[service-name]
Areas: /areas/[location-name]
Blog: /blog/[post-slug]
Knowledge: /[topic]/knowledge/[article-slug]
```

#### Create a URL Change Process

**Before changing or deleting any URL:**
1. [ ] Check if page has traffic (Google Analytics)
2. [ ] Check if page has backlinks (Ahrefs/GSC)
3. [ ] Create 301 redirect to new location
4. [ ] Update all internal links
5. [ ] Document the change
6. [ ] Test the redirect
7. [ ] Monitor for 30 days

**Template for URL change tracking:**
```markdown
## URL Change Request

- **Date:** 2026-01-16
- **Old URL:** /old-service-page
- **New URL:** /services/new-service
- **Reason:** URL structure consolidation
- **Traffic (last 30 days):** 150 visits
- **Backlinks:** 3 referring domains
- **Action:** 301 redirect implemented
- **Internal links updated:** Yes
- **Status:** Complete
```

### 2. Development Best Practices

#### Use Relative URLs for Internal Links

**Always use relative URLs:**
```html
✅ Good: <a href="/services/massage">Services</a>
✅ Good: <a href="../about">About</a>

❌ Bad: <a href="https://homemassageubud.com/services/massage">Services</a>
```

**Benefits:**
- Works in development and production
- No broken links when domain changes
- Easier to test locally
- Faster to update

#### Use Link Components with Validation

**Create a validated Link component:**
```typescript
// components/ValidatedLink.tsx
import { Link } from 'wouter';
import { useEffect } from 'react';

interface ValidatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const VALID_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/pricing',
  // ... add all valid routes
];

export function ValidatedLink({ href, children, className }: ValidatedLinkProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Check if href is valid
      const isValid = VALID_ROUTES.includes(href) || 
                      href.startsWith('http') || 
                      href.startsWith('mailto:') || 
                      href.startsWith('tel:');
      
      if (!isValid) {
        console.warn(`⚠️ Invalid link detected: ${href}`);
      }
    }
  }, [href]);
  
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
```

**Usage:**
```typescript
import { ValidatedLink } from '@/components/ValidatedLink';

<ValidatedLink href="/services">Our Services</ValidatedLink>
```

#### Implement Link Checking in CI/CD

**Add to GitHub Actions workflow:**
```yaml
# .github/workflows/link-check.yml
name: Link Check

on:
  pull_request:
    branches: [ main ]
  schedule:
    # Run weekly
    - cron: '0 0 * * 0'

jobs:
  link-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run link audit
        run: npm run link:audit
      
      - name: Check for broken links
        run: |
          if grep -q '"status": "broken"' reports/link-audit-*.json; then
            echo "❌ Broken links found!"
            exit 1
          else
            echo "✅ No broken links found"
          fi
      
      - name: Upload reports
        if: failure()
        uses: actions/upload-artifact@v2
        with:
          name: link-audit-reports
          path: reports/
```

### 3. Content Management Guidelines

#### Before Publishing New Content

**Checklist:**
- [ ] URLs follow naming convention
- [ ] All internal links are relative
- [ ] All external links open in new tab
- [ ] All images have alt text
- [ ] All buttons have proper hrefs
- [ ] WhatsApp links use correct format
- [ ] Phone links use tel: protocol
- [ ] No duplicate URLs created

#### When Updating Existing Content

**Checklist:**
- [ ] Don't change URL unless necessary
- [ ] If URL changes, create 301 redirect
- [ ] Update all internal links to page
- [ ] Update sitemap
- [ ] Notify search engines
- [ ] Monitor analytics for 30 days

#### When Deleting Content

**Process:**
1. **Check traffic and backlinks**
   ```bash
   # Check Analytics and GSC
   ```

2. **If page has traffic or backlinks:**
   - Create 301 redirect to most relevant page
   - Document the redirect
   - Monitor for 90 days

3. **If page has no traffic or backlinks:**
   - Still create redirect (to homepage or category)
   - Document for records
   - Can remove redirect after 1 year

4. **Update internal links:**
   - Find all internal links to deleted page
   - Update to point to redirect target
   - Run link audit to verify

### 4. Image Management

#### Image Naming Convention

**Rules:**
```
✅ Good: balinese-massage-ubud-villa.jpg
❌ Bad: IMG_1234.jpg
❌ Bad: image (1).jpg
```

**Benefits:**
- Descriptive names help SEO
- Easy to identify broken images
- No special characters that break URLs

#### Image Storage Strategy

**Organize by category:**
```
/public/images/
  /services/
    balinese-massage.jpg
    deep-tissue-massage.jpg
  /areas/
    ubud-location.jpg
    seminyak-location.jpg
  /blog/
    massage-benefits.jpg
  /team/
    therapist-1.jpg
```

**Benefits:**
- Easy to find and replace
- Prevents naming conflicts
- Logical organization

#### Image Replacement Process

**When replacing an image:**
1. Keep the same filename if possible
2. If changing filename, update all references
3. Run link audit to verify
4. Check page visually

**Use image components:**
```typescript
// components/OptimizedImage.tsx
interface ImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export function OptimizedImage({ src, alt, fallback = '/images/placeholder.jpg' }: ImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      onError={(e) => {
        console.error(`Image failed to load: ${src}`);
        e.currentTarget.src = fallback;
      }}
      loading="lazy"
    />
  );
}
```

## 📊 Monitoring Strategies

### 1. Google Search Console Setup

#### Enable Email Notifications

1. Go to **Google Search Console**
2. Click **Settings** (gear icon)
3. Click **Users and permissions**
4. Add email addresses for notifications
5. Enable **Email notifications** for:
   - Coverage issues
   - Manual actions
   - Security issues

#### Monitor Coverage Report

**Weekly tasks:**
- [ ] Check Coverage report
- [ ] Filter by "Error" status
- [ ] Look for new 404 errors
- [ ] Identify patterns
- [ ] Fix issues or create redirects

**How to check:**
```
1. Go to GSC → Coverage
2. Click "Error" tab
3. Look for "Not found (404)"
4. Click to see affected URLs
5. Export list for tracking
```

#### Set Up Custom Dashboard

**Key metrics to track:**
- 404 errors (should decrease)
- Redirect errors (should be 0)
- Crawl errors
- Coverage improvements

### 2. Automated Monitoring

#### Schedule Regular Link Audits

**Create a cron job or scheduled task:**

**Using GitHub Actions (recommended):**
```yaml
# .github/workflows/scheduled-audit.yml
name: Scheduled Link Audit

on:
  schedule:
    # Run on 1st of every month at 2 AM
    - cron: '0 2 1 * *'
  workflow_dispatch: # Allow manual trigger

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run link audit
        run: npm run link:audit
      
      - name: Commit reports
        run: |
          git config user.name "Link Audit Bot"
          git config user.email "bot@example.com"
          git add reports/
          git commit -m "Monthly link audit report"
          git push
      
      - name: Send notification
        if: failure()
        # Add notification logic (email, Slack, etc.)
```

**Using local cron (Linux/Mac):**
```bash
# Add to crontab
0 2 1 * * cd /path/to/project && npm run link:audit
```

#### Set Up Uptime Monitoring

**Services to use:**
- **Uptime Robot** (free tier: 50 monitors)
- **Pingdom** (paid, comprehensive)
- **StatusCake** (free tier: 10 monitors)

**Monitor key pages:**
- Homepage: /
- Services: /services
- Top 10 traffic pages
- Booking/contact pages

**Configure alerts:**
- Email notifications
- Response time > 5 seconds
- HTTP status ≠ 200
- Check frequency: Every 5 minutes

### 3. Analytics Monitoring

#### Set Up Google Analytics Alerts

**Custom alerts for:**

**404 Page Traffic Alert:**
```
Alert: 404 Page Views Spike
Condition: Page views > 50 (weekly)
Page: /404 or "not found"
Action: Email notification
```

**Bounce Rate Alert:**
```
Alert: High Bounce Rate
Condition: Bounce rate > 70%
Scope: All pages
Action: Email notification
```

**Exit Page Alert:**
```
Alert: High Exit Rate
Condition: Exit rate > 60%
Scope: Top 20 pages
Action: Email notification
```

#### Track Link Click Events

**Add event tracking to important links:**
```typescript
// Track button clicks
<Button 
  onClick={() => {
    gtag('event', 'book_now_click', {
      'event_category': 'engagement',
      'event_label': 'header_cta'
    });
  }}
>
  Book Now
</Button>

// Track external links
<a 
  href="https://wa.me/628112656869"
  onClick={() => {
    gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': 'contact_page'
    });
  }}
>
  WhatsApp Us
</a>
```

### 4. Regular Manual Checks

#### Monthly Manual Audit

**Checklist:**
- [ ] Run `npm run link:audit`
- [ ] Review CSV report
- [ ] Fix high priority issues
- [ ] Update redirect documentation
- [ ] Check GSC coverage report
- [ ] Review analytics for 404 traffic
- [ ] Test key user journeys
- [ ] Verify booking CTAs work

#### Quarterly Deep Dive

**Extended checklist:**
- [ ] Run full link audit
- [ ] Test all booking flows
- [ ] Check all forms
- [ ] Verify all phone/WhatsApp links
- [ ] Test on mobile devices
- [ ] Check page load speeds
- [ ] Review redirect chains
- [ ] Clean up old redirects
- [ ] Update documentation

#### User Journey Testing

**Key paths to test:**
1. Homepage → Services → Book
2. Homepage → Location → Book
3. Blog → Related Service → Book
4. Google → Landing Page → Book
5. 404 Page → Book

**Test on:**
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Tablet

## 📋 Maintenance Schedule

### Daily
- ✅ Monitor GSC for critical errors (automated)
- ✅ Check uptime monitoring alerts

### Weekly
- ✅ Review GSC coverage report
- ✅ Check analytics for 404 traffic
- ✅ Monitor automated alerts

### Monthly
- ✅ Run link audit: `npm run link:audit`
- ✅ Fix high priority issues
- ✅ Update documentation
- ✅ Review and approve URL changes

### Quarterly
- ✅ Deep link audit with external links
- ✅ User journey testing
- ✅ Redirect cleanup
- ✅ Documentation update
- ✅ Team training/review

### Annually
- ✅ Comprehensive site audit
- ✅ Remove old redirects (>2 years)
- ✅ Update monitoring strategy
- ✅ Review and update policies

## 📈 Success Metrics

### Track These KPIs

**Link Health:**
- Total broken links: **Target: 0**
- 404 error rate: **Target: <0.1%**
- Redirect chains: **Target: 0**
- External broken links: **Target: <5**

**User Experience:**
- 404 page bounce rate: **Target: <30%**
- Average time to find content: **Target: <30 seconds**
- Booking conversion from 404: **Target: >5%**

**SEO Performance:**
- Pages with errors in GSC: **Target: <1%**
- Coverage issues: **Target: 0 critical**
- Manual actions: **Target: 0**

## 🚨 Incident Response

### When Broken Links Are Discovered

**Priority 1: Critical (Homepage, Booking, Top Traffic Pages)**
- **Response time:** Within 2 hours
- **Action:** Immediate redirect or fix
- **Notification:** All stakeholders
- **Post-fix:** Root cause analysis

**Priority 2: High (Service Pages, Location Pages)**
- **Response time:** Within 24 hours
- **Action:** Create redirect or fix link
- **Notification:** SEO team
- **Post-fix:** Document fix

**Priority 3: Medium/Low (Blog, Images)**
- **Response time:** Within 1 week
- **Action:** Fix during regular maintenance
- **Notification:** None required
- **Post-fix:** Add to monthly report

### Escalation Process

```
1. Broken link detected
   ↓
2. Categorize priority
   ↓
3. If P1: Alert team immediately
   ↓
4. Create fix (redirect or update)
   ↓
5. Test fix
   ↓
6. Deploy
   ↓
7. Monitor for 24 hours
   ↓
8. Document in incident log
```

## 🔗 Related Documentation

- `LINK_AUDIT_TOOL.md` - How to run link audits
- `REDIRECT_CONFIGURATION_GUIDE.md` - How to set up redirects
- `GOOGLE_SEARCH_CONSOLE_SETUP.md` - GSC configuration
- `DEPLOYMENT_CHECKLIST.md` - Pre-deployment verification

## Conclusion

Consistent prevention and monitoring will keep **homemassageubud.com** free of broken links, providing:
- ✅ Better user experience
- ✅ Higher SEO rankings
- ✅ Improved conversion rates
- ✅ Professional site quality
- ✅ Reduced maintenance burden

Follow this guide to maintain excellent link health!

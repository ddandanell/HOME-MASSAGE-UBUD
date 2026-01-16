# 301 Redirect Configuration Guide

## Overview

This guide explains how to implement 301 redirects for broken links identified in the link audit. Proper 301 redirects preserve SEO value, maintain user experience, and prevent 404 errors.

## What is a 301 Redirect?

A **301 Moved Permanently** redirect tells search engines and browsers that a page has permanently moved to a new location. This:

- ✅ Passes ~90-99% of link equity (SEO value) to the new page
- ✅ Updates search engine indexes automatically
- ✅ Provides seamless user experience
- ✅ Prevents 404 errors
- ✅ Maintains backlink value

## When to Use 301 Redirects

**Use 301 redirects for:**
- ✅ Permanently moved pages
- ✅ Renamed URLs
- ✅ Merged content
- ✅ Deleted pages with traffic/backlinks
- ✅ URL structure changes
- ✅ Site migrations

**Don't use 301 for:**
- ❌ Temporary moves (use 302 instead)
- ❌ A/B testing (use 302 instead)
- ❌ Seasonal content (use 302 instead)

## Implementation Methods

### Method 1: Vercel Configuration (Recommended)

If deployed on Vercel, add redirects to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-service-page",
      "destination": "/services/new-page",
      "permanent": true
    },
    {
      "source": "/old-location/:slug",
      "destination": "/areas/:slug",
      "permanent": true
    },
    {
      "source": "/blog/old-post",
      "destination": "/blog/new-post",
      "permanent": true
    }
  ]
}
```

**Key features:**
- `"permanent": true` = 301 redirect
- `"permanent": false` = 302 redirect
- Supports wildcards with `:slug` parameters
- Supports regex patterns

**Example with parameters:**
```json
{
  "source": "/services/:service/booking",
  "destination": "/booking?service=:service",
  "permanent": true
}
```

### Method 2: Express.js Server (For Full-Stack)

Add redirects to `server/index.ts`:

```typescript
// Individual redirects
app.get('/old-page', (req, res) => {
  res.redirect(301, '/new-page');
});

// Pattern-based redirects
app.get('/old-services/:slug', (req, res) => {
  res.redirect(301, `/services/${req.params.slug}`);
});

// Multiple redirects
const redirects = {
  '/old-page-1': '/new-page-1',
  '/old-page-2': '/new-page-2',
  '/old-page-3': '/new-page-3'
};

Object.entries(redirects).forEach(([source, destination]) => {
  app.get(source, (req, res) => {
    res.redirect(301, destination);
  });
});
```

### Method 3: Client-Side Routing (React/Wouter)

For single-page apps, add redirects in `App.tsx`:

```typescript
import { Redirect, Route } from "wouter";

function App() {
  return (
    <Switch>
      {/* Regular routes */}
      <Route path="/services" component={Services} />
      
      {/* 301 redirects */}
      <Route path="/old-service">
        {() => {
          // Redirect with replacement
          window.location.replace('/services');
          return null;
        }}
      </Route>
      
      {/* Multiple redirects */}
      <Route path="/old-page-1">
        <Redirect to="/new-page-1" replace />
      </Route>
      <Route path="/old-page-2">
        <Redirect to="/new-page-2" replace />
      </Route>
    </Switch>
  );
}
```

**Note:** Client-side redirects are less SEO-friendly than server-side. Use only when server-side isn't possible.

### Method 4: Netlify Configuration

If deployed on Netlify, create `_redirects` file in `public/`:

```
# Redirects from what the browser requests to what we serve
/old-page    /new-page    301
/old-services/*    /services/:splat    301
/blog/old-post    /blog/new-post    301

# Redirect with query parameters
/booking?service=:service    /services/:service/book    301
```

**Rules:**
- One redirect per line
- `301` at end for permanent
- `302` for temporary
- `:splat` captures path segments

## Common Redirect Patterns

### 1. Simple Page Move

**Problem:** Page moved to new URL
```
Old: /massage-services
New: /services/massage
```

**Solution:**
```json
{
  "source": "/massage-services",
  "destination": "/services/massage",
  "permanent": true
}
```

### 2. Category Restructure

**Problem:** Multiple pages moved to new category
```
Old: /treatments/balinese
Old: /treatments/deep-tissue
New: /services/balinese-massage
New: /services/deep-tissue-massage
```

**Solution:**
```json
{
  "source": "/treatments/:treatment",
  "destination": "/services/:treatment-massage",
  "permanent": true
}
```

### 3. Deleted Page → Homepage

**Problem:** Page deleted, no equivalent
```
Old: /old-promo-page
Action: Redirect to homepage
```

**Solution:**
```json
{
  "source": "/old-promo-page",
  "destination": "/",
  "permanent": true
}
```

### 4. Deleted Page → Service Hub

**Problem:** Service page deleted
```
Old: /hot-stone-therapy
Action: Redirect to main services page
```

**Solution:**
```json
{
  "source": "/hot-stone-therapy",
  "destination": "/services",
  "permanent": true
}
```

### 5. Location Page Consolidation

**Problem:** Multiple location pages merged
```
Old: /ubud-center
Old: /ubud-north
Old: /ubud-east
New: /ubud
```

**Solution:**
```json
{
  "redirects": [
    {
      "source": "/ubud-center",
      "destination": "/ubud",
      "permanent": true
    },
    {
      "source": "/ubud-north",
      "destination": "/ubud",
      "permanent": true
    },
    {
      "source": "/ubud-east",
      "destination": "/ubud",
      "permanent": true
    }
  ]
}
```

### 6. URL Cleanup (Remove Parameters)

**Problem:** URLs have unnecessary parameters
```
Old: /services?id=123&ref=google
New: /services/massage-therapy
```

**Solution:**
```json
{
  "source": "/services",
  "destination": "/services/massage-therapy",
  "permanent": true
}
```

## Redirect Strategy for Link Audit Results

Based on link audit findings, apply this strategy:

### High Priority Broken Links

**Service/Product Pages → Equivalent Page**
```
/services/deep-tissue-old → /services/deep-tissue
/treatments/balinese → /services/balinese-massage
```

**Service/Product Pages → Service Hub** (if no equivalent)
```
/services/discontinued-service → /services
/old-treatment → /services
```

**Location Pages → Correct Location**
```
/areas/ubud-old → /areas/ubud
/seminyak-massage → /areas/seminyak
```

**Location Pages → Service Areas Page** (if no equivalent)
```
/old-location → /service-areas
```

**Homepage Links → Homepage**
```
/home-old → /
/index.html → /
```

### Medium Priority Broken Links

**Blog Posts → Similar Post**
```
/blog/old-post → /blog/similar-post
```

**Blog Posts → Blog Hub** (if no equivalent)
```
/blog/deleted-post → /blog
```

**General Internal Pages → Closest Match**
```
/about-old → /about
/contact-us → /contact
```

### Low Priority (Images)

- Don't create redirects for images
- Replace with new images instead
- Use same filename if possible to avoid redirect

## Testing Redirects

### Manual Testing

1. **Open browser**
2. **Navigate to old URL**
3. **Verify:**
   - ✅ Redirects to correct new URL
   - ✅ Browser URL updates
   - ✅ Page loads correctly
   - ✅ No redirect loops

### Testing with curl

```bash
# Check redirect status
curl -I https://homemassageubud.com/old-page

# Follow redirects
curl -L https://homemassageubud.com/old-page

# See redirect chain
curl -sL -w "%{url_effective}\n" -o /dev/null https://homemassageubud.com/old-page
```

**Expected output:**
```
HTTP/1.1 301 Moved Permanently
Location: https://homemassageubud.com/new-page
```

### Testing with Online Tools

1. **Redirect Checker Tools:**
   - https://httpstatus.io/
   - https://www.redirect-checker.org/
   - https://www.internetmarketingninjas.com/tools/redirect-checker/

2. **Enter old URL**
3. **Verify:**
   - Shows 301 status
   - Shows correct destination
   - No redirect chains (ideally 1 redirect)

### Bulk Testing

Create a test script:

```typescript
import axios from 'axios';

const redirectsToTest = [
  { from: '/old-page-1', to: '/new-page-1' },
  { from: '/old-page-2', to: '/new-page-2' },
];

async function testRedirects() {
  for (const redirect of redirectsToTest) {
    try {
      const response = await axios.get(
        `https://homemassageubud.com${redirect.from}`,
        { maxRedirects: 0, validateStatus: (s) => s < 400 }
      );
      
      const location = response.headers.location;
      const status = response.status;
      
      if (status === 301 && location?.includes(redirect.to)) {
        console.log(`✅ ${redirect.from} → ${redirect.to}`);
      } else {
        console.log(`❌ ${redirect.from} failed`);
      }
    } catch (error) {
      console.log(`❌ ${redirect.from} error`);
    }
  }
}

testRedirects();
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Redirect Chains

**Bad:**
```
/page-1 → /page-2 → /page-3
```

**Good:**
```
/page-1 → /page-3
/page-2 → /page-3
```

**Why:** Multiple redirects slow down page load and dilute SEO value.

### ❌ Mistake 2: Redirect Loops

**Bad:**
```
/page-1 → /page-2
/page-2 → /page-1
```

**Result:** Browser error, page never loads

**Fix:** Ensure redirects have a final destination that doesn't redirect

### ❌ Mistake 3: Using 302 Instead of 301

**Bad:** Temporary redirect for permanent move
```javascript
res.redirect(302, '/new-page'); // Temporary
```

**Good:** Permanent redirect
```javascript
res.redirect(301, '/new-page'); // Permanent
```

**Why:** 301 passes SEO value, 302 doesn't

### ❌ Mistake 4: Redirecting to Irrelevant Pages

**Bad:**
```
/services/balinese-massage → / (homepage)
```

**Good:**
```
/services/balinese-massage → /services/massage
```

**Why:** Relevance matters for user experience and SEO

### ❌ Mistake 5: Forgetting Query Parameters

**Bad:**
```
/services?type=massage → /services
```
**User loses:** Query parameter information

**Good:** Preserve or handle appropriately
```
/services?type=massage → /services/massage
```

## Redirect Tracking and Monitoring

### 1. Document All Redirects

Create a spreadsheet with:
- Old URL
- New URL
- Date implemented
- Reason for redirect
- Status (active/removed)
- Traffic impact

### 2. Monitor in Google Search Console

**Coverage Report:**
1. Go to Coverage tab
2. Check for redirect issues
3. Verify redirects are detected
4. Monitor for redirect chains

**URL Inspection Tool:**
1. Enter old URL
2. Check "Discovered - currently not indexed"
3. Verify redirect is followed

### 3. Track in Analytics

**Before redirect:**
- Note traffic to old URL

**After redirect:**
- Monitor traffic to new URL
- Verify traffic transferred
- Check bounce rate (should stay similar)

### 4. Set Up Alerts

**Google Search Console:**
- Enable email notifications
- Monitor for new 404 errors
- Track coverage issues

**Monitoring Tools:**
- Uptime Robot
- Pingdom
- Custom scripts

## Redirect Maintenance

### Monthly Review
- [ ] Check redirect logs
- [ ] Identify unused redirects
- [ ] Remove temporary redirects (302s)
- [ ] Update redirect documentation

### Quarterly Audit
- [ ] Run link audit tool
- [ ] Verify all redirects work
- [ ] Check for redirect chains
- [ ] Optimize redirect rules

### Annual Cleanup
- [ ] Remove redirects older than 2 years (if no traffic)
- [ ] Consolidate redirect rules
- [ ] Update redirect strategy
- [ ] Archive old redirects for reference

## Integration with Link Audit

### Workflow

1. **Run link audit:**
   ```bash
   npm run link:audit
   ```

2. **Review CSV report:**
   - Sort by Priority (High → Low)
   - Identify broken links needing redirects

3. **Plan redirects:**
   - High priority: Redirect to equivalent page
   - Medium priority: Redirect to category page
   - Low priority: Consider removing

4. **Implement redirects:**
   - Add to `vercel.json` or server config
   - Test each redirect
   - Deploy changes

5. **Verify:**
   - Test redirects manually
   - Run link audit again
   - Check GSC for redirect detection

6. **Monitor:**
   - Track in analytics
   - Monitor GSC coverage
   - Update documentation

## Example Redirect Configuration

Based on typical link audit findings:

```json
{
  "redirects": [
    // High Priority - Service Pages
    {
      "source": "/treatments/balinese",
      "destination": "/services/balinese-massage",
      "permanent": true
    },
    {
      "source": "/treatments/deep-tissue",
      "destination": "/services/deep-tissue-massage",
      "permanent": true
    },
    
    // High Priority - Location Pages
    {
      "source": "/ubud-massage",
      "destination": "/areas/ubud",
      "permanent": true
    },
    {
      "source": "/seminyak-massage",
      "destination": "/areas/seminyak",
      "permanent": true
    },
    
    // Medium Priority - Old Structure
    {
      "source": "/old-blog/:slug",
      "destination": "/blog/:slug",
      "permanent": true
    },
    
    // Catch-all for deleted services
    {
      "source": "/services/discontinued-*",
      "destination": "/services",
      "permanent": true
    },
    
    // Homepage variations
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/index.html",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

## Conclusion

Proper 301 redirect implementation is crucial for:
- ✅ Preserving SEO value
- ✅ Maintaining user experience
- ✅ Preventing 404 errors
- ✅ Transferring link equity
- ✅ Keeping search rankings

Use this guide with the link audit tool to implement a comprehensive redirect strategy for **homemassageubud.com**.

## Related Documentation

- `LINK_AUDIT_TOOL.md` - For finding broken links
- `GOOGLE_SEARCH_CONSOLE_SETUP.md` - For monitoring redirects
- `DEPLOYMENT_CHECKLIST.md` - For deployment verification
- `vercel.json` - Your redirect configuration file

# IndexNow Implementation Guide

IndexNow is a protocol that allows websites to instantly notify search engines (Bing, Yandex) about new or updated content.

## 🚀 What is IndexNow?

IndexNow enables you to:
- ✅ Instantly notify search engines of URL changes
- ✅ Bypass waiting for crawlers
- ✅ Save crawler bandwidth
- ✅ Get indexed faster on Bing and Yandex

**Supported Search Engines:**
- Microsoft Bing
- Yandex
- Seznam.cz
- Naver

**Note:** Google does not currently support IndexNow, but your sitemap submission handles Google indexing.

## 📋 Setup Instructions

### Step 1: Generate API Key

1. Generate a unique API key (UUID format):
   ```bash
   # Using Node.js
   node -e "console.log(require('crypto').randomUUID())"
   
   # Or use online generator
   # https://www.uuidgenerator.net/
   ```

2. Example API key: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

### Step 2: Create API Key File

1. Create a file in `/client/public/` with your API key as the filename:
   ```
   /client/public/a1b2c3d4-e5f6-7890-abcd-ef1234567890.txt
   ```

2. The file content should be your API key:
   ```
   a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

### Step 3: Verify API Key File

Make sure the file is accessible at:
```
https://homemassageubud.com/a1b2c3d4-e5f6-7890-abcd-ef1234567890.txt
```

## 💻 Implementation Options

### Option 1: Manual Submission (Quick Start)

Submit URLs manually using curl:

```bash
# Submit single URL
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "homemassageubud.com",
    "key": "YOUR_API_KEY_HERE",
    "keyLocation": "https://homemassageubud.com/YOUR_API_KEY_HERE.txt",
    "urlList": [
      "https://homemassageubud.com/"
    ]
  }'

# Submit multiple URLs
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "homemassageubud.com",
    "key": "YOUR_API_KEY_HERE",
    "keyLocation": "https://homemassageubud.com/YOUR_API_KEY_HERE.txt",
    "urlList": [
      "https://homemassageubud.com/",
      "https://homemassageubud.com/services",
      "https://homemassageubud.com/treatments"
    ]
  }'
```

### Option 2: Automated Script

Create a script to automatically submit URLs from your sitemap:

See `scripts/indexnow-submit.ts` for the implementation.

To run:
```bash
npm run indexnow:submit
```

### Option 3: On-Demand Submission

Add IndexNow submission to your deployment pipeline:

```bash
# After deploying new content
npm run build
npm run indexnow:submit
```

## 📊 Submission Limits

- **Rate Limit**: 10,000 URLs per day per host
- **Batch Size**: Up to 10,000 URLs per request (recommended: 100-1000)
- **Frequency**: Submit only when content changes

## ✅ Best Practices

1. **Submit Only Changed URLs**
   - Don't submit all URLs every time
   - Only submit new or updated pages
   - Track last submission date

2. **Batch Submissions**
   - Group URLs into batches of 100-200
   - Reduces API calls
   - More efficient processing

3. **Error Handling**
   - Retry on failures
   - Log submission results
   - Monitor API responses

4. **Timing**
   - Submit immediately after publishing
   - Don't submit future-dated content
   - Wait for content to be live

## 🔍 Verification

### Check Submission Status

1. **Bing Webmaster Tools**
   - Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Check URL Submission API section
   - View submission history

2. **HTTP Response Codes**
   - `200 OK`: Successfully submitted
   - `202 Accepted`: Received, processing
   - `400 Bad Request`: Invalid request format
   - `403 Forbidden`: Invalid API key
   - `422 Unprocessable`: Invalid URLs
   - `429 Too Many Requests`: Rate limit exceeded

### Test Your Setup

```bash
# Test single URL submission
curl -v -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "homemassageubud.com",
    "key": "YOUR_API_KEY",
    "keyLocation": "https://homemassageubud.com/YOUR_API_KEY.txt",
    "urlList": ["https://homemassageubud.com/"]
  }'
```

Expected response:
```json
HTTP/1.1 200 OK
```

## 🎯 Priority URLs to Submit First

Submit these high-priority pages first:

1. Homepage: `https://homemassageubud.com/`
2. Services: `https://homemassageubud.com/services`
3. Treatments: `https://homemassageubud.com/treatments`
4. Service Areas: `https://homemassageubud.com/service-areas`
5. Contact: `https://homemassageubud.com/contact`
6. Pricing: `https://homemassageubud.com/pricing`

Then submit:
- All treatment pages
- All area pages
- Service landing pages

## 📝 Monitoring

Track your IndexNow submissions:

1. **Create a log file** to record submissions:
   ```json
   {
     "timestamp": "2026-01-16T12:00:00Z",
     "urls_submitted": 73,
     "status": "success",
     "response_code": 200
   }
   ```

2. **Monitor in Bing Webmaster Tools**:
   - URL Inspection tool
   - Index coverage report
   - API submission history

## ⚠️ Important Notes

1. **Google Alternative**: Google doesn't support IndexNow. Use:
   - Google Search Console URL Inspection
   - Manual "Request Indexing"
   - Sitemap submission

2. **Content Must Be Live**: Don't submit URLs before content is published

3. **HTTPS Required**: IndexNow requires HTTPS URLs

4. **API Key Security**: 
   - Keep your API key secure
   - Don't commit to public repositories
   - Use environment variables

## 🆘 Troubleshooting

### API Key Not Found (403)
- Verify the key file is accessible at the keyLocation URL
- Check file permissions
- Ensure filename matches API key exactly

### Invalid Request (400)
- Check JSON format
- Verify all URLs are absolute (include https://)
- Ensure host matches URL domain

### Rate Limit (429)
- You've exceeded 10,000 URLs per day
- Wait 24 hours
- Reduce submission frequency

## 📞 Resources

- [IndexNow Documentation](https://www.indexnow.org/documentation)
- [Bing IndexNow Guide](https://www.bing.com/indexnow)
- [API Specification](https://www.indexnow.org/specification)

---

**Last Updated:** January 16, 2026

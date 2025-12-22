# Missing Schema Types

The following schema types are referenced in your queries (`src/lib/sanityQueries.js`) but are **missing** from your Sanity Studio schema definitions. These need to be created for the queries to work properly.

## Missing Schema Types

### 1. `slideshow`
- **Used in:** `getSlideshowData()` query
- **Location needed:** `xbdsanity/schemaTypes/home/slideshow.js`
- **Query structure:** See `src/lib/sanityQueries.js` lines 23-54

### 2. `imageBanner`
- **Used in:** `getImageBannerData()` query
- **Location needed:** `xbdsanity/schemaTypes/home/imageBanner.js`
- **Query structure:** See `src/lib/sanityQueries.js` lines 383-406

### 3. `bookFaqs`
- **Used in:** `getBookFaqsData()` query
- **Location needed:** `xbdsanity/schemaTypes/book/bookFaqs.js`
- **Query structure:** See `src/lib/sanityQueries.js` lines 618-637
- **Note:** This is different from `faqPage` which exists in `xbdsanity/schemaTypes/faq/faq.js`

### 4. `toolsFrameworksTimeline`
- **Used in:** `getToolsFrameworksTimelineData()` query
- **Location needed:** `xbdsanity/schemaTypes/book/toolsFrameworksTimeline.js`
- **Query structure:** See `src/lib/sanityQueries.js` lines 639-680

### 5. `keynotes`
- **Used in:** `getKeynotesData()` query
- **Location needed:** `xbdsanity/schemaTypes/aboutAnuj/keynotes.js`
- **Query structure:** See `src/lib/sanityQueries.js` lines 717-746

## Impact

Without these schema types:
- The queries will return `null` or fail
- The Sanity Studio structure will not show these sections (they're commented out in `xbdsanity/structure.js`)
- The frontend components expecting this data may not render correctly

## Next Steps

1. Create the missing schema files in the appropriate directories
2. Import them in `xbdsanity/sanity.config.js`
3. Add them to the schema types array
4. Uncomment the corresponding sections in `xbdsanity/structure.js`
5. Deploy the updated Sanity Studio

## Schema Type Reference

You can use the query structures in `src/lib/sanityQueries.js` as a reference for what fields each schema type should have. Each query shows the expected structure of the data.


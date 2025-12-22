# Sanity Studio Structure Configuration Guide

## Problem
Your local Sanity Studio at `localhost:3333` shows a flat list of content sections, while the deployed version shows a hierarchical structure with Pages and Sections organized under them.

## Solution
You need to configure the Structure tool in your Sanity Studio to match the deployed version's organization.

## Steps to Fix

### 1. Locate Your Sanity Studio Directory
Your Sanity Studio is likely in a separate directory or repository. Look for:
- A directory named `studio` or `sanity-studio`
- A `sanity.config.js` or `sanity.config.ts` file
- A `package.json` with `@sanity/studio` or similar dependencies

### 2. Install Structure Tool (if not already installed)
If you're using Sanity Studio v3, the structure tool is built-in. For older versions, you may need:

```bash
npm install @sanity/structure
```

### 3. Update Your `sanity.config.js`

Add the structure configuration to your `sanity.config.js` file. Here's an example:

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure} from './sanity-structure.config' // Import the structure config

export default defineConfig({
  name: 'xbd',
  title: 'XBD Sanity Studio',
  projectId: '6bjtp9fw', // Your project ID from src/lib/sanity.js
  dataset: 'production',
  
  plugins: [
    structureTool({
      structure, // Use the custom structure
    }),
  ],
  
  // ... rest of your config
})
```

### 4. Alternative: Inline Structure Configuration

If you prefer to keep everything in one file, you can copy the structure definition from `sanity-structure.config.js` directly into your `sanity.config.js`:

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // ... (copy the structure definition from sanity-structure.config.js)
    ])

export default defineConfig({
  name: 'xbd',
  title: 'XBD Sanity Studio',
  projectId: '6bjtp9fw',
  dataset: 'production',
  
  plugins: [
    structureTool({
      structure,
    }),
  ],
})
```

### 5. Important Notes

- **Document IDs**: The structure configuration uses specific document IDs (like `'home-banner'`, `'book-banner'`). Make sure these match the actual document IDs in your Sanity dataset, or modify them to match your setup.

- **Schema Types**: The structure references schema types (like `'banner'`, `'slideshow'`, etc.). Ensure all these schema types are defined in your Studio's schema files.

- **Flexible Structure**: If you want a more flexible structure that automatically lists all documents of each type, you can modify the structure to use `S.documentTypeListItems()` instead of hardcoded document IDs.

### 6. Restart Your Studio

After making these changes:
1. Save the configuration file
2. Restart your Sanity Studio server
3. Refresh your browser at `localhost:3333`

### 7. Verify the Structure

You should now see:
- **Content** as the main list
- **Home Page** → with sections nested underneath
- **Book Page** → with sections nested underneath
- **About Anuj Page** → with sections nested underneath
- **Learning Hub Page** → with sections nested underneath
- **FAQ Page**
- **Insights Page** → with sections nested underneath

## Troubleshooting

### If the structure doesn't appear:
1. Check that `structureTool` is properly imported and configured
2. Verify your Sanity Studio version supports the structure tool
3. Check the browser console for any errors
4. Ensure all referenced schema types exist

### If documents don't appear:
1. Check that the document IDs in the structure match your actual document IDs
2. Consider using a more flexible structure that lists all documents of each type
3. Verify you have the correct permissions to view these documents

## Need Help?

If you can't find your Studio directory or need help locating it, check:
- Your project's root directory for a `studio` folder
- Any separate repositories for the Sanity Studio
- Your deployment configuration to see where the Studio is hosted



# 🧠 Adding New Topics to the Learning Platform

This guide explains how to properly add new educational topics to the Learning Platform. Topics are dynamically rendered based on a central JSON object, allowing easy expansion without writing new pages.

## 🧭 How to Add a New Topic – Step by Step

Follow this exact order:

### 📦 1. Use the JSON Template

A topic can include multiple sections, each with their own heading, content, and optional table.

Slug must be unique, URL-safe, and correspond with the path used in `topics.js`.

Below is a complete JSON structure for one topic entry inside `topicsData.js`:

````js
'new-topic-slug': {
  title: 'New Topic Title',
  sections: [
    {
      heading: 'Your Section Title',
      content: [
        'Markdown-supported paragraph',
        '- List item',
        '```js\nconsole.log("Code supported");\n```'
      ]
    },
    {
      heading: 'Optional Table',
      table: {
        head: ['Column A', 'Column B'],
        rows: [['A1', 'B1'], ['A2', 'B2']]
      }
    }
  ]
}

````

### ✍️ 2. Add Your Topic Data

- 📄 **File**: `src/data/topicsData.js`
- 🔁 **Action**: Paste your topic JSON inside the `topicsData` object.

```js
export const topicsData = {
  'hoisting': { ... },
  'new-topic-slug': { ... } // ← ADD HERE
}
```

### 🔗 3. Register the Topic in Navigation

- 📄 **File**: `src/data/topics.js`
- 🔁 **Action**: Add metadata for your topic.

```js
export const topics = [
  { title: 'Hoisting', slug: 'hoisting' },
  { title: 'New Topic Title', slug: 'new-topic-slug' } // ← ADD HERE
]
```

### 🚀 4. Done! Launch and Test

Start your app and go to the URL:

```bash
npm run dev
```

Open your browser and check:

- `/new-topic-slug` → Renders your new content ✅
- `/knowledge` → Shows it in the list
- `/` → Search should find it

Happy building! 💻

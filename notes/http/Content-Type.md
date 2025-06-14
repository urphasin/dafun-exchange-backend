# Content-Type Headers Guide

Great question — understanding `Content-Type` headers is essential for building APIs and web services that behave correctly.

## 📦 What is `Content-Type`?

The `Content-Type` HTTP header tells the client **what kind of data is being sent** in the response (or request). It affects how the browser or client **parses, renders, or stores** the content.

## 🔝 Common `Content-Type` Values

| Content-Type | Meaning | Used For |
|--------------|---------|----------|
| `application/json` | JSON-encoded data | APIs, frontend/backend communication |
| `text/html` | HTML markup | Web pages, API docs |
| `text/plain` | Plain text | Simple debug/test responses |
| `application/x-www-form-urlencoded` | Form data (URL-style) | HTML form submissions |
| `multipart/form-data` | Form + file uploads | Image/file upload forms |
| `application/octet-stream` | Raw binary | File downloads, binary transfers |
| `text/css` | CSS stylesheets | Frontend assets |
| `application/javascript` | JavaScript files | Script delivery |
| `image/jpeg`, `image/png`, etc. | Images | Media responses |
| `application/pdf` | PDF documents | File downloads or previews |
| `application/xml`, `text/xml` | XML | Legacy APIs, some data integrations |
| `application/ld+json` | JSON-LD | Linked data (used in SEO/semantic web) |
| `application/vnd.api+json` | JSON API spec | Strict JSON:API implementations |

## 🧪 Examples in Practice

### 1. JSON API

```ts
res.set("Content-Type", "application/json").send({ user: "Otito" });
```

### 2. HTML Page

```ts
res.set("Content-Type", "text/html").send("<h1>Hello</h1>");
```

### 3. File Download (PDF)

```ts
res.set("Content-Type", "application/pdf").send(fileBuffer);
```

## 🧩 How the Browser Reacts

| Content-Type | What the browser does |
|--------------|----------------------|
| `text/html` | Renders as a webpage |
| `application/json` | Shows as raw JSON (often pretty-printed in dev tools) |
| `application/pdf` | Opens PDF viewer or downloads |
| `image/png` | Displays the image |
| `application/octet-stream` | Prompts download |

## 🧠 Tip

When building APIs, the most common ones you'll use are:

* `application/json` (your default for APIs)
* `multipart/form-data` (for image uploads)
* `text/html` (for human-readable docs or UI)
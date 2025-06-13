# 🚧 Phase 1: Core Setup

### ✅ 1. Health Check Route
**Why:** Helps you and your team know the API is alive (great for CI/deployments).

---

# 📦 Phase 2: Define MVP Data Models

Match this with your [📋 frontend checklist](0612T14:43 Dafun Exchange Notes Repo):

| Model | Fields (Initial) | Purpose |
|-------|------------------|---------|
| **User** | `id`, `username`, `avatar`, `bio`, `rating`, `email` | Profile page, ratings, trade history |
| **Item** | `id`, `title`, `description`, `image`, `ownerId`, `tags`, `location` | Listings feed, item detail page |
| **Offer** | `id`, `itemOfferedId`, `itemRequestedId`, `message`, `status`, `senderId`, `receiverId` | Offer form, inbox, finalize trade |

*We can refine these later, but these will power 90% of the MVP flows.*

---

# 🛠 Phase 3: Implement Endpoints

### 🚀 Main APIs (MVP)

| Route | Purpose |
|-------|---------|
| `GET /api/items` | Browse all listings |
| `POST /api/items` | Create new listing |
| `GET /api/items/:id` | Item detail |
| `POST /api/offers` | Send an offer |
| `GET /api/offers/inbox` | View incoming offers |
| `GET /api/offers/sent` | View sent offers |
| `POST /api/offers/:id/accept` | Accept offer |
| `GET /api/users/:id` | View profile |

**Optional:**

- Auth endpoints (`/login`, `/register`) if needed  
- Upload route for images (or use base64/file upload fallback)

---

# 🔐 Phase 4: Basic Auth (Optional MVP Feature)

JWT-based auth with a User login/register flow.  
Or defer auth until v2 and just fake a logged-in user for now to build core trading logic faster.

---

# 🧪 Phase 5: Testing & DevOps

- Use **Postman** or **Thunder Client** to test routes  
- Add **environment checks** (`NODE_ENV`) for prod/dev  
- Add **logging and error handling middleware**  
- *Optional:* Add a Swagger-style `/api/docs` later

---

# 🧭 Suggested Directory Layout

```
src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
└── server.ts
```

---

# ✅ Action Plan to Start

- Add `/api/health` route
- Scaffold **User**, **Item**, and **Offer** Mongoose models (TypeScript-safe)
- Create routes + controllers for `/api/items` first
- Test with mock data in Postman
- Then move to **offers**, **profiles**, and **inbox** logic

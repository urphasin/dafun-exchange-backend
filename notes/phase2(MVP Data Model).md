# 📦 Phase 2 Preparation

- Create placeholder files for `User.ts`, `Item.ts`, and `Offer.ts` models in `models/`
- Define your **User**, **Item**, and **Offer** schemas in Mongoose

# 📦 Phase 2: Scaffold MVP Models

You'll be using **Mongoose + TypeScript**, so we’ll define interfaces + schemas for the following:

---

## 🧑‍💼 User Model

| Field     | Type             |
|-----------|------------------|
| id        | ObjectId (auto)  |
| username  | string           |
| avatar    | string (URL)     |
| bio       | string           |
| rating    | number           |
| email     | string           |

---

## 🎁 Item Model

| Field     | Type                  |
|-----------|-----------------------|
| id        | ObjectId (auto)       |
| title     | string                |
| description | string              |
| image     | string (URL)          |
| ownerId   | ObjectId (ref: User)  |
| tags      | string[]              |
| location  | string                |

---

## 🔁 Offer Model

| Field           | Type                    |
|-----------------|-------------------------|
| id              | ObjectId (auto)         |
| itemOfferedId   | ObjectId (ref: Item)    |
| itemRequestedId | ObjectId (ref: Item)    |
| message         | string                  |
| status          | `'pending'`             |
| senderId        | ObjectId (ref: User)    |
| receiverId      | ObjectId (ref: User)    |

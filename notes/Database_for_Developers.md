# 📚 Your Mini Curriculum: “Databases for Developers”

Here’s what to focus on over the next **3–5 days**.

---

## 🔰 1. What Is a Database?
Ans: A database is a system for storing and querying data
- Understand why we use a database.
  - Ans: We use a database to query large amount of data
- Learn what a **record**, **field**, **table/collection**, and **ID** are.
  - Ans:
    - A record/document is a single entry of items in a database. A row in a spreadsheet.
    ```
      {
        "_id": "664c23f1...",
        "username": "otito",
        "email": "otito@example.com",
        "rating": 4.8
      }
      This whole object is one record (called a **document** in MongoDB).
    ```
    - A field is a single piece of data with a record. A column in a spreadsheet. A label or attribute that stores a value (like a name, email, or rating)
    ```
      {
        "_id": "664c23f1...",
        "username": "otito",       ← field
        "email": "otito@example.com",  ← field
        "rating": 4.8              ← field
      }
      Each key (username, email, rating) is a field, and its corresponding value is the field’s data.
    ```
    - A table/collection


**🧠 Analogy:** A database is like a spreadsheet.  
Each **row** is a **record** (like a user), each **column** is a **field** (like username or email).

---

## 🧱 2. SQL vs NoSQL

Learn the two major types of databases:

- **SQL (relational):** MySQL, PostgreSQL  
  → Data in tables, with strict schemas
- **NoSQL (non-relational):** MongoDB  
  → Data in flexible, JSON-like documents

For this project, you're using **MongoDB**, a NoSQL database.

### ✅ Focus on MongoDB Concepts:

- What is a **collection**? (like a table)
- What is a **document**? (like a row)
- What is an **ObjectId**?

---

## 🗃️ 3. Basic MongoDB Operations

Learn these 5 basic operations:

- `insertOne()` — add data  
- `find()` — get data  
- `updateOne()` — change data  
- `deleteOne()` — remove data  
- `findById()` — get data by ID

### 🛠️ Practice Tools:

- MongoDB Atlas (Playground)
- MongoDB Compass App

---

## ⚙️ 4. Mongoose 101 (Just Read — Don't Code Yet)

Learn what **Mongoose** is:  
> A “bridge” between your code and MongoDB.

### Understand:

- What is a **schema**?  
  → Defines what fields your data should have.
- What is a **model**?  
  → Lets you talk to MongoDB from your code.

🧘‍♂️ *Don't worry about decorators, types, or methods yet. Just understand conceptually how Mongoose wraps MongoDB.*

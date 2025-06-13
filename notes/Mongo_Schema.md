# MongoDB Schema Guide

## ⚙️ What is a Schema?

A schema is like a blueprint for a document. It says: "Every document in this collection should have these fields, with these types."

```typescript
const UserSchema = new Schema({
  username: String,
  email: String,
});
```

Think of this as: "Every user must have a username and email."

## 🏭 What is a Model?

A model is a machine built from a schema. It lets you interact with the collection in the database using code.

```typescript
const User = mongoose.model("User", UserSchema);
```

This does two things:

1. Tells Mongoose to use the UserSchema blueprint
2. Connects it to a MongoDB collection called `users` (Mongoose automatically pluralizes "User" to "users")

Now you can do:

```typescript
User.find()
User.create()
User.findById()
```

Just like calling SQL commands on a table.

## 🧠 Why is it "User" but the collection is "users"?

Mongoose automatically turns "User" → "users" (You can override that if you want, but this is the default.)

So this:

```typescript
mongoose.model("User", UserSchema)
```

gives you access to the `users` collection in MongoDB.

## 💡 What does `<IUser>` mean?

```typescript
mongoose.model<IUser>("User", UserSchema)
```

This part is purely TypeScript. You're saying: "The shape of each document returned by this model should match the IUser interface."

So when you do this:

```typescript
const user = await User.findById("abc123");
user?.email; // autocomplete works!
```

TypeScript knows user has `.email`, `.username`, etc.

Without it, user is just an `any`, and you could write `user.dinosaur` and not get an error 😬

## ✅ Summary Table

| Term | Meaning |
|------|---------|
| Schema | A blueprint for documents — says what fields to expect |
| Model | A function you use to read/write to the collection |
| "User" | The model name — becomes `users` collection in MongoDB |
| `<IUser>` | TypeScript type that gives you intellisense + safety |
| `export default ...` | Lets you import this model from other files easily |

## Complete Example

```typescript
// Define the blueprint (schema)
const UserSchema = new Schema({
  username: String,
  email: String,
});

// Build a machine (model) using the blueprint
const User = mongoose.model<IUser>("User", UserSchema);

// Now you can use the machine to get documents from the "users" collection
const user = await User.findById("abc123");
```
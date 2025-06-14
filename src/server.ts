// src/server.ts

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import User from './models/User';
import cors from "cors";


dotenv.config(); // Load .env variables

const app = express();
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log("\x1b[33mMongoDB Connected\x1b[0m"))
  .catch(err => console.error("\x1b[31m❌MongoDB Connection Error: \n" + err + "\x1b[0m"));  // red

// 🧠 API Routes

// Health Check
app.get("/api/health", (_:Request, res: Response) => {
  res.status(200).set('Content-Type', 'html').json({ status: "ok" });
})

// Home Page
app.get("/", (_, res) => {
  res.send("Dafurn Exchange Backend Running in TypeScript");
});

// Get all users
app.get("/api/users", async (_req: Request, res: Response) => {
  const users = await User.find();
  res.set("Content-Type", "application/json").json(users);
});

// Get one user
app.get("/api/users/:id", async (_req: Request, res: Response) => {
  const user = await User.findById(_req.params.id);
});

// Update user rating
app.put("/api/users/:id", async (_req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(_req.params.id, { rating: _req.body.rating }, { new: true });
  res.json(user);
});

// Delete a user
app.delete("/api/users/:id", async (_req: Request, res: Response) => {
  await User.findByIdAndDelete(_req.params.id);
  res.status(204).send();
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`\x1b[32mServer running on port:\x1b[0m \x1b[33m${PORT}\x1b[0m`)   // green
})
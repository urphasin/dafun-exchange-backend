// src/server.ts

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import User from './models/User';

dotenv.config(); // Load .env variables

const app = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log("\x1b[33mMongoDB Connected\x1b[0m"))
  .catch(err => console.error("\x1b[31m❌MongoDB Connection Error: \n" + err + "\x1b[0m"));  // red

// 🧠 API Routes

// Health Check
app.get("/api/health", (_:Request, res: Response) => {
  res.status(401).set('Content-Type', 'text/html').json({ status: "ok" });
})

app.get("/", (_, res) => {
  res.send("Dafurn Exchange Backend Running in TypeScript");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`\x1b[32mServer running on port:\x1b[0m \x1b[33m${PORT}\x1b[0m`)   // green
})
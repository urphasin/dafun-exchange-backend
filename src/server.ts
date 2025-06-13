import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/api/health", (_: Request, res: Response) => {
  res.status(200).json({ status: "ok" })
});


mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("\x1b[31mThe error: \n" + err + "\x1b[0m"))  // red

app.get("/", (_, res) => {
  res.send("Dafurn Exchange Backend Running in TypeScript");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`\x1b[32mServer running on port ${PORT} \x1b[0m`)   // green
})
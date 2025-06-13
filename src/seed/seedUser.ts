// src/seed/seedUser.ts

import mongoose from 'mongoose';
import User from "../models/User"; // assuming User.ts exports the model
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("\x1b[31mMONGODB_URI is not defined in environment variables\x1b[0m");
}

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("\x1b[33mConnected to MongoDB Atlas \x1b[0m");

    // Clear the collection as needed
    await User.deleteMany({});

    // Add 5 sample users

    await User.insertMany([
      {
        username: "otito",
        avatar: "https://example.com/avatar1.png",
        bio: "Backend builder",
        rating: 4.9,
        email: "otito@example.com"
      },
      {
        username: "amara",
        avatar: "https://example.com/avatar2.png",
        bio: "JavaScript learner",
        rating: 4.5,
        email: "amara@example.com"
      },
      {
        username: "zeke",
        avatar: "https://example.com/avatar3.png",
        bio: "Data nerd",
        rating: 4.2,
        email: "zeke@example.com"
      },
      {
        username: "mina",
        avatar: "https://example.com/avatar4.png",
        bio: "Design enthusiast",
        rating: 4.7,
        email: "mina@example.com"
      },
      {
        username: "jay",
        avatar: "https://example.com/avatar5.png",
        bio: "TypeScript fan",
        rating: 4.8,
        email: "jay@example.com"
      }
    ]);

    console.log("\x1b[32mUsers seeded\x1b[0m");
    process.exit(0);
  })
  .catch((err) => {
    console.error(`\x1b[31mError seeding users:\x1b[0m \x1b[33m${err}\x1b[0m`);
    process.exit(1);
  });
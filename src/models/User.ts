// src/models.ts
import mongoose, { Schema, Document } from "mongoose";

// 1. Define a TypeScript interface
export interface IUser extends Document {
  username: string;
  avatar: string;
  bio: string;
  rating: number;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Create the Mongoose schema
const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  avatar: { type: String },
  bio: { type: String },
  rating: { type: Number, default: 0 },
  email: { type: String, required: true, unique: true }
}, {
  timestamps: true
});

// 3. Export the Mongoose model
export default mongoose.model<IUser>("User", UserSchema);
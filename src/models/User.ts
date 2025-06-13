// src/models.ts
import mongoose, { Schema, Document } from "mongoose";

// 1. Define a TypeScript interface
export interface IUser extends Document {
  username: string;
  avatar: string;
  
}
import mongoose from "mongoose";

// Props that are req. to create a new User
export interface UserAttrs {
  email: string;
  password: string;
}

// Props that a User model has
export interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// Props that a User Document has
export interface UserDoc extends mongoose.Document, UserAttrs {}

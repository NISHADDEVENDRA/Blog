import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
    },
    email: {
      type: String,
    },
    profile: {
      type: String,
    },
    password: {
      type: String,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "This username is already taken"],
      minlength: [4, "Username must be at least 4 characters long"],
      validate: {
        validator: (value: string) => /^[a-zA-Z0-9]+$/.test(value),
        message: "Username can only contain letters and numbers",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
  },
  { timestamps: true }
);
export default UserSchema;

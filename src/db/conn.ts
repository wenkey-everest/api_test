import mongoose from "mongoose";

let database = mongoose.connect("mongodb://localhost:27017/user", () => {
  console.log("connected to database");
});

export { database };

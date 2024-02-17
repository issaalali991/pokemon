import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("Error from MongoDB Connection", error.stack));

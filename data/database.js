import mongoose from "mongoose";

export const connectDB = () => mongoose
.connect(process.env.MONGO_URL, {
  dbName: "todoDB",
})
.then(() => console.log("DB conneceted successfully"))
.catch((e) => console.log(e));

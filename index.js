import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddlerware } from "./middleware/error.js";
import cors from "cors";
export const app = express();

config({
  path:"./data/config.env"
})

// using middleware for JSON data accept krne ke liye
app.use(express.json())

// using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)

app.use(cors({
   origin:[process.env.FRONTEND_URL],
   methods:["GET","POST","PUT","DELETE"],
   credentials:true,
}))

app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("nice working");
});


// usinf error middleware
app.use(errorMiddlerware)
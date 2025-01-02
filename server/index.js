import express from "express";
import 'dotenv/config';
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
    connectDB();
    console.log(`Server is running on http://127.0.0.1:3000`); // แก้ไขเป็น http://
});
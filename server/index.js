import express from "express";
import 'dotenv/config';
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import e from "express";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {

    res.status(error.status || 500);

    res.json({
        message: error.message || "something went wrong",
        status: error.status,
        stack: error.stack
    });
});

app.listen(3000, () => {
    connectDB();
    console.log(`Server is running on http://127.0.0.1:3000`); // แก้ไขเป็น http://
});
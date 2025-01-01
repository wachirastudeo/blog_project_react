import express from "express";


const app = express();

app.get("/test", (req, res) => {
    res.status(200).send("Hello!");
});

app.listen(3000, () => {
    console.log(`Server is running on http://127.0.0.1:3000`); // แก้ไขเป็น http://
});
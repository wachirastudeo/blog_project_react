import express from "express";
import { getUserSavePosts, savePost } from "../controllers/user.controllers";

const router = express.Router();

router.get("/saved", getUserSavePosts);
router.patch("/saved", savePost);




export default router;
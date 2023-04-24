import express from "express";
import { getAlluser, register } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAlluser);

router.post("/users/new", register );

export default router;

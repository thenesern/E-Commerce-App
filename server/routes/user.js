import express from "express";
import { verifyTokenAndAuth } from "./verifyToken.js";
const router = express.Router();
import { update } from "../controllers/userController.js";

router.patch("/:id", verifyTokenAndAuth, update);

export default router;

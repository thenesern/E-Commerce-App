import { verifyTokenAndAuth } from "./verifyToken.js";
import {
  getAllReviews,
  createReview,
} from "../controllers/reviewController.js";
import express from "express";

const router = express.Router();

// router.route("/").get(getAllReviews).post(verifyTokenAndAuth, createReview);
router.route("/").get(getAllReviews).post(createReview);

export default router;

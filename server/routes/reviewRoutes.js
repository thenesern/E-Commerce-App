import { verifyTokenAndAuth } from "./verifyToken.js";
import {
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getAllReviews,
  setProductUserIds,
} from "../controllers/reviewController.js";
import express from "express";

const router = express.Router();

// Get the Review

router.get("/:id", getReview);
// Get all the Reviews
router.get("/", getAllReviews);

// Create a Review
router.post("/", setProductUserIds, createReview);

// Update the Review
router.patch("/:id", updateReview);

// Delete the Review
router.delete(":id", deleteReview);

export default router;

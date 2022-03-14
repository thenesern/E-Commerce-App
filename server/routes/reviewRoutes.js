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

// router.route("/").get(getAllReviews).post(verifyTokenAndAuth, createReview);
router.route("/").get(getAllReviews).post(setProductUserIds, createReview);
router.route("/:id").get(getReview).patch(updateReview).delete(deleteReview);

export default router;

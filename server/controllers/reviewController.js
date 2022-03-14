import Review from "../models/reviewModel.js";
import { createOne, deleteOne, getOne, updateOne } from "./handlerFactory.js";

export const getAllReviews = async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: {
      reviews,
    },
  });
};

export const setProductUserIds = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Get Review
export const getReview = getOne(Review);

// Create Review
export const createReview = createOne(Review);

// Update Review
export const updateReview = updateOne(Review);

// Delete Review
export const deleteReview = deleteOne(Review);

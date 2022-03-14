import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
    // options: { select: "title" },
    select: "title",
  }).populate({
    path: "user",
    //  options: { select: "firstName" },
    select: "firstName",
  });
  next();
});
/* reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName",
  });
  next();
}); */

const Review = mongoose.model("Review", reviewSchema);

export default Review;

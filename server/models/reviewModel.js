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
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

/* 
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
    options: { select: "title" },
    select: "title",
  }).populate({
    path: "user",
    options: { select: "firstName" },
    select: "firstName",
  });
  next();
}); */
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName",
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: "$product",
        nRating: {
          $sum: 1,
        },
        avgRating: {
          $avh: "$rating",
        },
      },
    },
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(productId, {
      ratingsQuantity: stats[0].nRating,
      ratingAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(productId, {
      ratingsQuantity: 0,
      ratingAverage: 2.5,
    });
  }
};

reviewSchema.post("save", function (next) {
  this.constructor.calcAverageRatings(this.product);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRating(this.r.tour);
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;

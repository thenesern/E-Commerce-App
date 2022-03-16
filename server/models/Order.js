import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

OrderSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "product",
    select: "name",
  });
  next();
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;

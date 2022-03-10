import express from "express";
const router = express.Router();
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";
import { createOrder, updateOrder } from "../controllers/orderController.js";

// Create Order
router.post("/", verifyToken, createOrder);

// Update the Order
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// Delete the Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

// Get All Orders
router.get("/", verifyTokenAndAdmin, getAllOrders);

// Get Income
router.get("/income", verifyTokenAndAdmin, getIncome);

export default router;

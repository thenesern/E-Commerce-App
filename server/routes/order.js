import express from "express";
const router = express.Router();
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "./verifyToken.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  getIncome,
} from "../controllers/orderController.js";

// Create Order
router.post("/", verifyToken, createOrder);

// Update the Order
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// Delete the Order
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuth, getUserOrder);

// Get All Orders
router.get("/", verifyTokenAndAdmin, getAllOrders);

// Get Income
router.get("/income", verifyTokenAndAdmin, getIncome);

export default router;

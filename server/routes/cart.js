import express from "express";
const router = express.Router();
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "./verifyToken.js";
import {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCarts,
} from "../controllers/cartController.js";

// Create Cart
router.post("/", verifyToken, createCart);

// Update the Cart
router.put("/:id", verifyTokenAndAuth, updateCart);

// Delete the Cart
router.delete("/:id", verifyTokenAndAuth, deleteCart);

// Get the Cart
router.get("/find/:userId", verifyTokenAndAuth, getCart);

// Get All the Carts

router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;

import express from "express";
const router = express.Router();
import { verifyTokenAndAuth, verifyTokenAndAdmin } from "./verifyToken.js";
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
router.put("/:id", verifyTokenAndAuthorization, updateCart);

// Delete the Cart
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// Get the Cart
router.get("/find/:userId", verifyTokenAndAuthorization, getCart);

// Get All the Carts

router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;

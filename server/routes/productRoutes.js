import { verifyTokenAndAdmin } from "./verifyToken.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controllers/productController.js";
import express from "express";
const router = express.Router();

// Get the Product
router.get("/:id", getProduct);

//Get all the Products
router.get("/", getAllProducts);

// Create Product
router.post("/", verifyTokenAndAdmin, createProduct);

// Update the Product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// Delete the Product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default router;

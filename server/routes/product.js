import { verifyTokenAndAdmin } from "./verifyToken";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = require("express").Router();

// Create Product
router.post("/", verifyTokenAndAdmin, createProduct);

// Update the Product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// Delete the Product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// Get the Product
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

export default router;

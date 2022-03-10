import express from "express";
import { verifyTokenAndAuth, verifyTokenAndAdmin } from "./verifyToken.js";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";

// Update
router.patch("/:id", verifyTokenAndAuth, updateUser);

// Delete
router.delete("/:id", verifyTokenAndAuth, deleteUser);

// Get All the Users
router.get("/", verifyTokenAndAdmin, getAllUsers);
export default router;

import express from "express";
import { verifyTokenAndAuth, verifyTokenAndAdmin } from "./verifyToken.js";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
  getStats,
} from "../controllers/userController.js";

// Get User
router.get("/:id", verifyTokenAndAuth, getUser);

// Get All the Users
router.get("/", verifyTokenAndAdmin, getAllUsers);

// Update
router.patch("/:id", verifyTokenAndAuth, updateUser);

// Delete
router.delete("/:id", verifyTokenAndAuth, deleteUser);

// Get the User Stats
router.get("/stats", verifyTokenAndAdmin, getStats);

export default router;

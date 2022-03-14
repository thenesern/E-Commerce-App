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

// Update
router.patch("/:id", verifyTokenAndAuth, updateUser);

// Delete
router.delete("/:id", verifyTokenAndAuth, deleteUser);

// Get User
// router.get("/:id", verifyTokenAndAdmin, getUser);
router.get("/:id", getUser);

// Get All the Users
// router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/", getAllUsers);

//Get the User Stats
router.get("/stats", verifyTokenAndAdmin, getStats);

export default router;

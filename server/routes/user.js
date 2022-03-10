import express from "express";
import { verifyTokenAndAuth, verifyTokenAndAdmin } from "./verifyToken.js";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/userController.js";

// Update
router.patch("/:id", verifyTokenAndAuth, updateUser);

// Delete
router.delete("/:id", verifyTokenAndAuth, deleteUser);

// Get User
router.get("/find/:id", verifyTokenAndAdmin, getUser);

// Get All the Users
router.get("/", verifyTokenAndAdmin, getAllUsers);
export default router;

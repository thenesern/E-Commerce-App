import express from "express";
const router = express.Router();
import {
  register,
  login,
  updatePassword,
  /*   forgotPassword,
  resetPassword, */
} from "../controllers/userController.js";

router.post("/register", register);
router.post("/login", login);
// router.patch("/updatePassword", "verify here" updatePassword);
/* router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword); */

export default router;

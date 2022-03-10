import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({
      status: "Failed",
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong cretentials");
    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const revealPassword = hashedPass.toString(CryptoJS.enc.Utf8);
    revealPassword !== req.body.password &&
      res.status(401).json("Wrong credentials");

    const accesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.PASS_SEC,
      { expiresIn: "3h" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ others, accesToken });
  } catch (err) {
    res.status(409).json({
      status: "Failed",
      message: err.message,
    });
  }
};

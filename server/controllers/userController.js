import User from "../models/UserModel.js";
import CryptoJS from "crypto-js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { deleteOne, getOne, updateOne } from "./handlerFactory.js";

export const register = async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    signedIn: req.body.signedIn,
    isMarked: req.body.isMarked,
  });

  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.PASS_SEC,
    {
      expiresIn: "1d",
    }
  );

  try {
    await newUser.save();
    res.status(201).json({
      status: "success",
      token,
      isAdmin: req.body.isAdmin,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      signedIn: req.body.signedIn,
      isMarked: req.body.isMarked,
      id: newUser._id,
    });
  } catch (err) {
    res.status(409).json({
      status: "Failed",
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return res.status(401).json("There is no user with that email");
    }

    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const revealedPassword = hashedPass.toString(CryptoJS.enc.Utf8);
    if (revealedPassword !== req.body.password) {
      return res.status(401).json("Wrong password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.PASS_SEC,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: "success",
      token,
      isAdmin: user.isAdmin,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      signedIn: user.signedIn,
      id: user._id,
    });
  } catch (err) {
    res.status(409).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// Get User
export const getUser = getOne(User);

// Update the User
export const updateUser = updateOne(User);

// Delete the User
export const deleteUser = deleteOne(User);

export const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* export const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json("There is no user with that email");
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/resetPassword/${resetToken}`;
  const message = `Forgot your password? ${resetURL}`;
  try {
    await sendEmail({
      email: user.email,
      subject: "Valid for 10 min",
      message,
    });
    res.status(200).json({
      status: "succes",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next();
  }
};
*/
export const resetPassword = async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: Date.now(),
    },
  });
  if (!user) {
    return res.status(400).json("Token is invalid or has expires");
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
};

export const updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  user.password = req.body.password;
  awaituser.save();

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.PASS_SEC,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({ status: "succes", token });
};

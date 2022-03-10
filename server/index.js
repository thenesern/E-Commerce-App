import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
const app = express();
dotenv.config();

mongoose
  .connect(`${process.env.DATABASE}`)
  .then(() => console.log("Connected to the DATABASE"))
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

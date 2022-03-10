import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js";
import loginRoute from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(cors());

mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DATABASE"))
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

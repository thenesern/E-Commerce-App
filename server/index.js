import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js";
import userRoute from "./routes/userRoutes.js";
import productRoute from "./routes/productRoutes.js";
import reviewRoute from "./routes/reviewRoutes.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

const app = express();
dotenv.config();

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Security for HTTP headers
app.use(helmet());

// Body parser, reading data from body into req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Data sanitization against NoSQL query injection attacks
app.use(mongoSanitize());

// Data sanitization against XSS injection attacks
app.use(xss());

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
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

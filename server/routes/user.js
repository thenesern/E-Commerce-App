import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("successful");
});

router.post("/"),
  (req, res) => {
    const data = req.body;
    res.send("posted");
  };

export default router;

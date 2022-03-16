import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;
  if (authHeader) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.PASS_SEC, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: "fail",
          message: "Token is not valid!",
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ status: "fail", message: "Please sign in!" });
  }
};

export const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ status: "fail", message: "You are not authenticated!" });
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ status: "fail", message: "You are not alowed to do that!" });
    }
  });
};

import Product from "../models/ProductModel.js";
import { createOne, deleteOne, updateOne } from "./handlerFactory.js";

// Create Product
export const createProduct = createOne(Product);

// Update the Product
export const updateProduct = updateOne(Product);

// Delete the Product
export const deleteProduct = deleteOne(Product);

// GET the Product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews");
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "No product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        product,
        reviews: product.reviews,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All the Products
export const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

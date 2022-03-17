import styles from "./ProductTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Delete, StoreMallDirectory } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../../../redux/apiCalls";
import { Box, Modal, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products);
  const [open, setOpen] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const colors = color.split(",");
  const sizes = size.split(",");
  const categories = category.split(",");
  const [id, setId] = useState();
  const [productName, setProductName] = useState();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const addHandler = () => {
    addProduct(dispatch, {
      name,
      description,
      colors,
      sizes,
      categories,
      price,
      stock,
    });
  };

  const handleClose = () => setOpen(false);
  const sureClose = () => setIsSure(false);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "title",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.productListItem}>
            <img
              className={styles.productListImg}
              src={params.row?.img}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 100 },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      renderCell: (params) => {
        return <p>`${params.row?.price}`</p>;
      },
    },
    {
      field: "color",
      headerName: "Color",
      width: 160,
    },
    {
      field: "size",
      headerName: "Size",
      width: 160,
    },
    {
      field: "categories",
      headerName: "Category",
      width: 160,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => {
        return <p>{params.row?.createdAt.split("T", 1)}</p>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.actions}>
            <Link
              to={`/product/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <button className={styles.viewButton}>
                <StoreMallDirectory className={styles.viewIcon} />
                View
              </button>
            </Link>
            <button
              className={styles.deleteButton}
              onClick={() => {
                setId(params.row._id);
                setProductName(params.row.title);
                setIsSure(true);
              }}
            >
              <Delete className={styles.deleteIcon} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.datatable}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <h4 className={styles.header}>Add a Product</h4>
          <div className={styles.modalHeader}>
            <form className={styles.inputs}>
              <TextField
                className={styles.input}
                helperText="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Title"
              />
              <TextField
                className={styles.input}
                helperText="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
              />
              <TextField
                className={styles.input}
                helperText='Product Color (with ",")'
                label="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <TextField
                className={styles.input}
                helperText='Product Size (with ",")'
                value={size}
                onChange={(e) => setSize(e.target.value)}
                label="Size"
              />
              <TextField
                className={styles.input}
                helperText='Product Category (with ",")'
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                className={styles.input}
                helperText="Product Price"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                className={styles.input}
                helperText="Product Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                label="Stock"
              />
            </form>
            <div>
              <input type="file" className={styles.file} />
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button className={styles.discard} onClick={handleClose}>
              Discard
            </button>
            <button
              className={styles.delete}
              onClick={() => {
                addHandler();
                handleClose();
              }}
            >
              ADD
            </button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={isSure}
        onClose={sureClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <div className={styles.modalHeader}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontWeight: "600", color: "#001219" }}
            >
              Are you sure?
            </Typography>
          </div>
          <div className={styles.modalBody}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              The product ({productName}) will be deleted.
            </Typography>
          </div>
          <div className={styles.modalFooter}>
            <button className={styles.discard} onClick={sureClose}>
              Discard
            </button>
            <button
              className={styles.delete}
              onClick={() => {
                handleDelete(id);
                sureClose();
              }}
            >
              DELETE
            </button>
          </div>
        </Box>
      </Modal>
      <div className={styles.datatableheader}>
        <span>Product List</span>
        <button className={styles.add} onClick={() => setOpen(true)}>
          Add Product
        </button>
      </div>
      <DataGrid
        rows={products}
        className={styles.datagrid}
        columns={columns}
        getRowId={(row) => row?.title + row?._id + row?.title}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductTable;

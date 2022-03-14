import styles from "./ProductTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Delete, StoreMallDirectory } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../../redux/apiCalls";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.productListItem}>
            <img
              className={styles.productListImg}
              src={params.row.image}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={styles.actions}>
            <Link
              to="/dashboard/users/:userId"
              style={{ textDecoration: "none" }}
            >
              <button className={styles.viewButton}>
                <StoreMallDirectory className={styles.viewIcon} />
                View
              </button>
            </Link>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row._id)}
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
      <div className={styles.datatableTitle}>Product List</div>
      <DataGrid
        rows={products}
        className={styles.datagrid}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default ProductTable;

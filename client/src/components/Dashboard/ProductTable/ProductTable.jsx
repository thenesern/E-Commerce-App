import styles from "./ProductTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Inventory, Delete, OpenInNew } from "@material-ui/icons";

const Datatable = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link
              to="/dashboard/product/:productId"
              style={{ textDecoration: "none" }}
            >
              <button className={styles.viewButton}>
                <OpenInNew className={styles.viewIcon} />
                View
              </button>
            </Link>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
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
        className={styles.datagrid}
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

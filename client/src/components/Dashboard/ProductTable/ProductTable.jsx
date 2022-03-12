import style from "./ProductTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

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
          <div className={style.cellAction}>
            <Link
              to="/dashboard/product/:productId"
              style={{ textDecoration: "none" }}
            >
              <div className={style.viewButton}>View</div>
            </Link>
            <div
              className={style.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={style.datatable}>
      <div className={style.datatableTitle}>
        Add New Product
        <Link to="/product/new" className={style.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        className={style.datagrid}
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

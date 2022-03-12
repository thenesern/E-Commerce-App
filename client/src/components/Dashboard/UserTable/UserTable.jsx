import styles from "./UserTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AccountBox, AddBox, Delete } from "@material-ui/icons";

const Datatable = () => {
  const [data, setData] = useState(userRows);

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
              to="/dashboard/users/:userId"
              style={{ textDecoration: "none" }}
            >
              <button className={styles.viewButton}>
                <AccountBox className={styles.viewIcon} />
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
      <div className={styles.datatableTitle}>User List</div>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

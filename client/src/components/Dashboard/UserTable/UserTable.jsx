import styles from "./UserTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AccountBox, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../../redux/apiCalls";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.userListItem}>
            <img className={styles.userListImg} src={params.row.image} alt="" />
            {params.row.firstName + " " + params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Signed Up At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.userListItem}>
            <img className={styles.userListImg} src={params.row.image} alt="" />
            {params.row.createdAt.split("T", 1)}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
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
                <AccountBox className={styles.viewIcon} />
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
      <div className={styles.datatableTitle}>User List</div>
      <DataGrid
        rows={users}
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

export default UserTable;

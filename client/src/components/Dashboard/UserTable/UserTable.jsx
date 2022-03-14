import styles from "./UserTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AccountBox, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../../redux/apiCalls";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (!isAdmin) {
      deleteUser(id, dispatch);
    }
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 300,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.userListItem}>
            <img className={styles.userListImg} src={params.row.image} alt="" />
            {params.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
      renderCell: (params) => {
        return <div className={styles.userListItem}>{params.row.lastName}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Signed Up At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.userListItem}>
            {params.row.createdAt.split("T", 1)}
          </div>
        );
      },
    },
    {
      field: "signedIn",
      headerName: "Signed In At",
      width: 200,
      renderCell: (params) => {
        return <div className={styles.userListItem}>{params.row.signedIn}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
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
              onClick={() => {
                setId(params.row._id);
                setFirstName(params.row.firstName);
                setLastName(params.row.lastName);
                setIsAdmin(params.row.isAdmin);
                setOpen(true);
              }}
            >
              <Delete className={styles.deleteIcon} />
            </button>
          </div>
        );
      },
    },
  ];
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <div className={styles.datatable}>
      <Modal
        open={open}
        onClose={handleClose}
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
              The user ({firstName} {lastName}) will be deleted.
            </Typography>
          </div>
          <div className={styles.modalFooter}>
            <button className={styles.discard} onClick={handleClose}>
              Discard
            </button>
            <button
              className={styles.delete}
              onClick={() => {
                handleDelete(id);
                handleClose();
              }}
            >
              DELETE
            </button>
          </div>
        </Box>
      </Modal>
      <div className={styles.datatableTitle}>User List</div>
      <DataGrid
        rows={users}
        className={styles.datagrid}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserTable;
